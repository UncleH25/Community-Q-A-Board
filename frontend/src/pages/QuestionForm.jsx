import React, { useState } from "react";
import "../styles/questionForm.css";

const QuestionForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //Send the data to the server or handle it as needed
    setSubmitted(true);
  };

  return (
    <main className="question-form-layout">
      <h1 className="question-form-title">Ask a Question</h1>
      {submitted ? (
        <div className="question-form-success">
          <h2>Thank you for your question!</h2>
          <p>Your question has been submitted.</p>
        </div>
      ) : (
        <form className="question-form" onSubmit={handleSubmit}>
          <label>
            Title
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
              placeholder="Enter a clear and descriptive title"
            />
          </label>
          <label>
            Details
            <textarea
              value={body}
              onChange={e => setBody(e.target.value)}
              required
              placeholder="Describe your question in detail"
              rows={6}
            />
          </label>
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
          <button type="submit" className="question-form-submit">
            Submit Question
          </button>
        </form>
      )}
    </main>
  );
};

export default QuestionForm;