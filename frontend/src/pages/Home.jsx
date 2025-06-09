import React from "react";
import "../styles/home.css";

const trendingQuestions = [
  {
    id: 1,
    title: "How do I get started with React?",
    answers: 12,
    upvotes: 34,
  },
  {
    id: 2,
    title: "What are the best resources for learning JavaScript?",
    answers: 8,
    upvotes: 21,
  },
  {
    id: 3,
    title: "How can I improve my CSS skills?",
    answers: 5,
    upvotes: 15,
  },
];

const Home = () => (
  <main className="home-layout">
    <section className="home-feed">
      <div className="home-hero-card">
        <img
          src="/images/home-banner.png"
          alt="Community Banner"
          className="home-hero-banner"
        />
        <div className="home-hero-content">
          <div>
            <h2>Welcome to Uncleh25's Community Q&A Board</h2>
            <p>
              Ask questions, share answers, and join a growing community of curious minds. 
              Whether you need help or want to help others, you’re in the right place!
            </p>
            <div className="home-cta-buttons">
              <a href="/ask" className="home-cta">Ask a Question</a>
              <Link to="/questions" className="home-cta secondary">View Questions</Link>
            </div>
          </div>
        </div>
      </div>
      {/* ...rest of your code remains unchanged... */}
      <div className="home-section-title">
        <span>Trending Questions</span>
      </div>
      <ul className="home-question-list">
        {trendingQuestions.map((q) => (
          <li key={q.id} className="home-question-card">
            <div className="home-votes">
              <span className="home-upvotes">{q.upvotes}</span>
              <span className="home-votes-label">upvotes</span>
            </div>
            <div className="home-question-main">
              <a href={`/questions/${q.id}`} className="home-question-link">
                {q.title}
              </a>
              <span className="home-question-meta">{q.answers} answers</span>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/questions" className="home-view-all">View all questions &rarr;</Link>
    </section>
    <aside className="home-sidebar">
      <div className="home-community-card">
        <h3>About This Community</h3>
        <p>
          Uncleh25's Community Q&A Board is a place to ask questions, share knowledge, and connect with others. 
          Be kind, be curious, and help each other grow!
        </p>
        <a href="/ask" className="home-sidebar-cta">Ask your first question</a>
      </div>
      <div className="home-community-card">
        <h3>Quick Links</h3>
        <ul className="home-sidebar-links">
          <li><Link to="/questions">Browse Questions</Link></li>
          <li><a href="/ask">Ask a Question</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
      </div>
    </aside>
  </main>
);

export default Home;