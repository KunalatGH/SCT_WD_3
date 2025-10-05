import React, { useState } from "react";
import questions from "../assets/data/questions";
import Question from "./Question";
import Result from "./Result";

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const [answer, setAnswer] = useState(
    questions[0].type === "multi" ? [] : ""
  );

  const progress = ((current) / questions.length) * 100;

  const handleNext = () => {
    let correct = false;

    if (questions[current].type === "multi") {
      correct =
        answer.length === questions[current].answer.length &&
        answer.every(val => questions[current].answer.includes(val));
    } else {
      correct =
        answer
          .toString()
          .trim()
          .toLowerCase() ===
        questions[current].answer.toString().trim().toLowerCase();
    }

    setUserAnswers([
      ...userAnswers,
      { question: questions[current].question, correct }
    ]);

    if (current === questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrent(current + 1);
      setAnswer(
        questions[current + 1].type === "multi" ? [] : ""
      );
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setUserAnswers([]);
    setShowResult(false);
    setAnswer(questions[0].type === "multi" ? [] : "");
  };

  if (showResult) {
    const score = userAnswers.filter(ans => ans.correct).length;
    return (
      <Result
        score={score}
        total={questions.length}
        results={userAnswers}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded shadow">
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <span className="text-sm font-bold mr-2">Progress:</span>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-2 bg-blue-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
      <Question
        data={questions[current]}
        userAnswer={answer}
        setUserAnswer={setAnswer}
      />
      <button
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleNext}
        disabled={
          (questions[current].type === "multi" && answer.length === 0) ||
          (questions[current].type !== "multi" && !answer)
        }
      >
        {current === questions.length - 1 ? "Finish" : "Next"}
      </button>
    </div>
  );
}

export default Quiz;
