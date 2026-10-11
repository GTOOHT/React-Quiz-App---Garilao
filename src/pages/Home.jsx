
function Home({ startQuiz }) {
  return (
    <div className="home-page">
      <div className="home-card">
        <p className="eyebrow">TEST YOUR KNOWLEDGE</p>

        <h1>Welcome to Dev Quiz</h1>

        <p>
          Answer 10 questions about web development
          and see how much you know.
        </p>

        <button
          className="primary-button"
          onClick={startQuiz}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default Home;
