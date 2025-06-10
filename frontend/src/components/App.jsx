import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../pages/Home';
import QuestionList from '../pages/QuestionList';
import QuestionDetail from '../pages/QuestionDetail';
import QuestionForm from '../pages/QuestionForm';
import AnswerForm from '../pages/Answerform';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/questions" element={<QuestionList />} />
                <Route path="/questions/:id" element={<QuestionDetail />} />
                <Route path="/ask" element={<QuestionForm />} />
                <Route path="/questions/:id/answer" element={<AnswerForm />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;