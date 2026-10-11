
function ResultCard({
  total,
  correct,
  incorrect,
  percentage
}) {
  return (
    <div className="result-card">
      <h2>Quiz Completed!</h2>

      <p>Total Questions: {total}</p>
      <p>Correct Answers: {correct}</p>
      <p>Incorrect Answers: {incorrect}</p>

      <h3>Final Score: {correct} / {total}</h3>
      <h3>Percentage: {percentage}%</h3>
    </div>
  );
}

export default ResultCard;
