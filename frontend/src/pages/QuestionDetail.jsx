import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/questionList.css";

const questions = [
  {
    id: 1,
    title: "How do I get started with React?",
    author: "alice",
    upvotes: 34,
    answers: 12,
    date: "2025-06-09",
    body: "I'm new to React and would like to know how to get started. Any tips or resources?",
    answersList: [
      { id: 1, author: "bob", text: "Start with the official docs and try building a small project." },
      { id: 2, author: "carol", text: "Check out freeCodeCamp and YouTube tutorials!" }
    ]
  },
  {
    id: 2,
    title: "What are the best resources for learning JavaScript?",
    author: "bob",
    upvotes: 21,
    answers: 8,
    date: "2025-06-08",
    body: "Looking for the best online resources to learn JavaScript from scratch.",
    answersList: [
      { id: 1, author: "alice", text: "MDN Web Docs is the best place to start." }
    ]
  },
  {
    id: 3,
    title: "How can I improve my CSS skills?",
    author: "carol",
    upvotes: 15,
    answers: 5,
    date: "2025-06-07",
    body: "I want to get better at CSS. Any advice or resources?",
    answersList: [
      { id: 1, author: "bob", text: "Try CSSBattle and Frontend Mentor for practice." }
    ]
  },
];

const QuestionDetail = () => {
  const { id } = useParams();
  const question = questions.find(q => q.id === Number(id));

  if (!question) {
    return (
      <main className="question-list-layout">
        <h2>Question not found</h2>
        <Link to="/questions">Back to Questions</Link>
      </main>
    );
  }

  return (
    <main className="question-list-layout">
      <Link to="/questions" className="qd-back-link">&larr; Back to Questions</Link>
      <div className="question-list-card qd-question-card">
        <div className="qd-question-header">
          <div className="question-list-votes">
            <span className="question-list-upvotes">{question.upvotes}</span>
            <span className="question-list-votes-label">upvotes</span>
          </div>
          <div>
            <h2 className="qd-title">{question.title}</h2>
            <div className="question-list-meta">
              <span>by {question.author}</span>
              <span>· {question.answers} answers</span>
              <span>· {question.date}</span>
            </div>
          </div>
        </div>
        <div className="qd-body">{question.body}</div>
      </div>
      <div className="qd-answers-section">
        <h3 className="qd-answers-title">Answers</h3>
        <ul className="qd-answers-list">
          {question.answersList && question.answersList.length > 0 ? (
            question.answersList.map(ans => (
              <li key={ans.id} className="qd-answer-card">
                <div className="qd-answer-author">{ans.author}</div>
                <div className="qd-answer-text">{ans.text}</div>
              </li>
            ))
          ) : (
            <li>No answers yet. Be the first to answer!</li>
          )}
        </ul>
        <Link
          to={`/questions/${question.id}/answer`}
          className="qd-answer-btn"
        >
          Answer this question
        </Link>
      </div>
    </main>
  );
};

export default QuestionDetail;