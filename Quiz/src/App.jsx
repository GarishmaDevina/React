import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css"

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await axios.get('https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple');
        setQuestions(response.data.results);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    }

    fetchQuestions();
  }, []);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    if (selectedAnswer === questions[currentQuestionIndex].correct_answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer('');
    } else {
      // Quiz completed
      alert(`Quiz completed! Your score: ${score}/${questions.length}`);
    }
  };

  return (
    <div className="quiz-container">
      <h1>Quiz</h1>
      {questions.length > 0 && currentQuestionIndex < questions.length && (
        <div className="question-container">
          <p className="question-count">Question {currentQuestionIndex + 1} of {questions.length}:</p>
          <p className="question-text">{questions[currentQuestionIndex].question}</p>
          <ul className="answer-list">
            {questions[currentQuestionIndex].incorrect_answers.map((answer, idx) => (
              <li key={idx} className="answer-item">
                <input
                  type="radio"
                  id={`answer${idx}`}
                  name="answer"
                  value={answer}
                  checked={selectedAnswer === answer}
                  onChange={() => handleAnswerSelect(answer)}
                />
                <label htmlFor={`answer${idx}`}>{answer}</label>
              </li>
            ))}
            <li className="answer-item">
              <input
                type="radio"
                id={`correctAnswer`}
                name="answer"
                value={questions[currentQuestionIndex].correct_answer}
                checked={selectedAnswer === questions[currentQuestionIndex].correct_answer}
                onChange={() => handleAnswerSelect(questions[currentQuestionIndex].correct_answer)}
              />
              <label htmlFor={`correctAnswer`}>{questions[currentQuestionIndex].correct_answer}</label>
            </li>
          </ul>
          <button className="next-button" onClick={handleNext}>Next</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
