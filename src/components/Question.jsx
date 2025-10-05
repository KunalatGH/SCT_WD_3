import React from "react";

function Question({
  data,
  userAnswer,
  setUserAnswer,
  showFeedback,
  isCorrect,
  disabled,
}) {
  // Single-Select
  if (data.type === "single") {
    return (
      <div>
        <p className="font-semibold mb-2">{data.question}</p>
        {data.options.map((option) => (
          <div key={option} className="mb-2">
            <label
              className={`flex items-center gap-2 cursor-pointer px-3 py-2 rounded transition-colors ${
                showFeedback
                  ? option === data.answer
                    ? "bg-green-200 border-green-400"
                    : userAnswer === option
                    ? "bg-red-200 border-red-400"
                    : ""
                  : "hover:bg-blue-100"
              }`}
            >
              <input
                type="radio"
                name="answer"
                value={option}
                checked={userAnswer === option}
                disabled={disabled}
                onChange={() => setUserAnswer(option)}
              />
              {option}
            </label>
          </div>
        ))}
        {showFeedback && (
          <div>
            {isCorrect ? (
              <span className="text-green-600 font-semibold">Correct!</span>
            ) : (
              <span className="text-red-600 font-semibold">Incorrect!</span>
            )}
          </div>
        )}
      </div>
    );
  }

  // Multi-Select
  if (data.type === "multi") {
    const handleChange = (option) => {
      if (userAnswer.includes(option)) {
        setUserAnswer(userAnswer.filter((ans) => ans !== option));
      } else {
        setUserAnswer([...userAnswer, option]);
      }
    };
    return (
      <div>
        <p className="font-semibold mb-2">{data.question}</p>
        {data.options.map((option) => (
          <div key={option} className="mb-2">
            <label
              className={`flex items-center gap-2 cursor-pointer px-3 py-2 rounded transition-colors ${
                showFeedback
                  ? data.answer.includes(option)
                    ? "bg-green-200 border-green-400"
                    : userAnswer.includes(option)
                    ? "bg-red-200 border-red-400"
                    : ""
                  : "hover:bg-blue-100"
              }`}
            >
              <input
                type="checkbox"
                value={option}
                checked={userAnswer.includes(option)}
                disabled={disabled}
                onChange={() => handleChange(option)}
              />
              {option}
            </label>
          </div>
        ))}
        {showFeedback && (
          <div>
            {isCorrect ? (
              <span className="text-green-600 font-semibold">Correct!</span>
            ) : (
              <span className="text-red-600 font-semibold">Incorrect!</span>
            )}
          </div>
        )}
      </div>
    );
  }

  // Fill-in-the-blank
  if (data.type === "fill") {
    return (
      <div>
        <p className="font-semibold mb-2">{data.question}</p>
        <input
          className={`border px-2 py-1 rounded ${
            showFeedback
              ? isCorrect
                ? "bg-green-200 border-green-400"
                : "bg-red-200 border-red-400"
              : ""
          }`}
          type="text"
          value={userAnswer}
          disabled={disabled}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
        {showFeedback && (
          <div>
            {isCorrect ? (
              <span className="text-green-600 font-semibold">Correct!</span>
            ) : (
              <span className="text-red-600 font-semibold">Incorrect! Correct answer: {data.answer}</span>
            )}
          </div>
        )}
      </div>
    );
  }

  return null;
}

export default Question;
