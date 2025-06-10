import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/answerForm.css";

const AnswerForm = () => {
  const { id } = useParams();
  const [author, setAuthor] = useState("");
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //Send the answer data to the server
    setSubmitted(true);
  };

  return (
    <main className="answer-form-layout">
      <h1 className="answer-form-title">Answer Question {id}</h1>
      {submitted ? (
        <div className="answer-form-success">
          <h2>Thank you for your answer!</h2>
          <p>Your answer has been submitted.</p>
          <Link to={`/questions/${id}`} className="answer-form-back">Back to Question</Link>
        </div>
      ) : (
        <form className="answer-form" onSubmit={handleSubmit}>
          <label>
            Your Name
            <input
              type="text"
              value={author}
              onChange={e => setAuthor(e.target.value)}
              required
              placeholder="Enter your name or nickname"
            />
          </label>
          <label>
            Your Answer
            <textarea
              value={answer}
              onChange={e => setAnswer(e.target.value)}
              required
              placeholder="Write your answer here"
              rows={6}
            />
          </label>
          <button type="submit" className="answer-form-submit">
            Submit Answer
          </button>
        </form>
      )}
    </main>
  );
};

export default AnswerForm;