import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../pages/Home';
import QuestionList from '../pages/QuestionList';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/questions" element={<QuestionList />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;