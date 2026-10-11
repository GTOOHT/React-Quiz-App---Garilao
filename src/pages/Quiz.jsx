
import QuizHeader from "../components/QuizHeader";
import QuestionCard from "../components/QuestionCard";
import ProgressBar from "../components/ProgressBar";
import questions from "../questions";
import { useNavigate } from "react-router-dom";

function Quiz({
  current,
  setCurrent,
  answers,
  setAnswers
}) {
  const question = questions[current];
  const navigate = useNavigate();

  function selectAnswer(choice) {
    setAnswers((previous) => ({
      ...previous,
      [current]: choice
    }));
  }

  function nextQuestion() {
    if (answers[current] === undefined) {
      alert("Please select an answer first.");
      return;
    }

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    }
  }

  return (
    <div className="page-container">
      <QuizHeader
        current={current + 1}
        total={questions.length}
      />

      <ProgressBar
        current={current + 1}
        total={questions.length}
      />

      <QuestionCard
        question={question}
        questionNumber={current + 1}
        selectedAnswer={answers[current]}
        onSelect={selectAnswer}
      />

      <div className="quiz-navigation">
        <button
          className="secondary-button"
          disabled={current === 0}
          onClick={() => setCurrent(current - 1)}
        >
          Previous
        </button>

        {current < questions.length - 1 ? (
          <button
            className="primary-button"
            onClick={nextQuestion}
          >
            Next Question
          </button>
        ) : (
          
<button
  className="primary-button"
  onClick={() => {
    if (answers[current] === undefined) {
      alert("Please select an answer first.");
      return;
    }

    navigate("/result", {
      state: { answers }
    });
  }}
>
  Finish Quiz
</button>

        )}
      </div>
    </div>
  );
}
export default Quiz;
