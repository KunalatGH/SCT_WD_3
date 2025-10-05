import React from "react";

function Result({ score, total, results, onRestart }) {
  // Simple confetti effect
  React.useEffect(() => {
    // Optional: Could use a confetti JS lib for full effect
    document.body.style.background = "linear-gradient(120deg, #a3e635, #60a5fa)";
    return () => {
      document.body.style.background = "";
    };
  }, []);

  return (
    <div className="text-center animate-fade-in">
      <h2 className="text-3xl font-bold mb-2">🎉 Quiz Complete!</h2>
      <p className="mb-2 text-xl">Your score: {score} / {total}</p>
      <p className="mb-4 text-gray-700">
        Correct: <span className="text-green-600">{results.filter(r => r.correct).length}</span> | 
        Incorrect: <span className="text-red-600">{results.filter(r => !r.correct).length}</span>
      </p>
      <ul className="mb-6">
        {results.map((res, idx) => (
          <li
            key={idx}
            className={`mb-2 ${res.correct ? 'text-green-700' : 'text-red-700'}`}
          >
            Q{idx + 1}: {res.question} — {res.correct ? '✓' : '✗'}
          </li>
        ))}
      </ul>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow transition"
        onClick={onRestart}
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default Result;
