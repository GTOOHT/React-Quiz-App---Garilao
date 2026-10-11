
function QuizHeader({ current, total }) {
  return (
    <div className="quiz-header">
      <h1>Dev Quiz</h1>
      <p>
        Question {current} of {total}
      </p>
    </div>
  );
}

export default QuizHeader;
