
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";

import Home from "./pages/Home.jsx";
import Quiz from "./pages/Quiz.jsx";
import Result from "./pages/Result.jsx";
import "./App.css";

function AppContent() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  function resetQuiz() {
    setCurrent(0);
    setAnswers({});
  }

  function startQuiz() {
    resetQuiz();
    navigate("/quiz");
  }

  function returnHome() {
    resetQuiz();
    navigate("/");
  }

  function retakeQuiz() {
    resetQuiz();
    navigate("/quiz");
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<Home startQuiz={startQuiz} />}
      />

      <Route
        path="/quiz"
        element={
          <Quiz
            current={current}
            setCurrent={setCurrent}
            answers={answers}
            setAnswers={setAnswers}
          />
        }
      />

      <Route
        path="/result"
        element={
          <Result
            retakeQuiz={retakeQuiz}
            returnHome={returnHome}
          />
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
