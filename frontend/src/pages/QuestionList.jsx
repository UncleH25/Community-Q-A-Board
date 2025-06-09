import React from "react";
import { Link } from "react-router-dom";
import "../styles/questionList.css";

const questions = [
  {
    id: 1,
    title: "How do I get started with React?",
    author: "alice",
    upvotes: 34,
    answers: 12,
    date: "2025-06-09",
  },
  {
    id: 2,
    title: "What are the best resources for learning JavaScript?",
    author: "bob",
    upvotes: 21,
    answers: 8,
    date: "2025-06-08",
  },
  {
    id: 3,
    title: "How can I improve my CSS skills?",
    author: "carol",
    upvotes: 15,
    answers: 5,
    date: "2025-06-07",
  },
];

const QuestionList = () => (
  <main className="question-list-layout">
    <h1 className="question-list-title">All Questions</h1>
    <ul className="question-list">
      {questions.map((q) => (
        <li key={q.id} className="question-list-card">
          <div className="question-list-votes">
            <span className="question-list-upvotes">{q.upvotes}</span>
            <span className="question-list-votes-label">upvotes</span>
          </div>
          <div className="question-list-main">
            <Link to={`/questions/${q.id}`} className="question-list-link">
              {q.title}
            </Link>
            <div className="question-list-meta">
              <span>by {q.author}</span>
              <span>· {q.answers} answers</span>
              <span>· {q.date}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </main>
);

export default QuestionList;