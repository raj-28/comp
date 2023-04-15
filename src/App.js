import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CodeSnippets from './pages/CodeSnippets';
import SubmitCode from './pages/SubmitCode';
import ReadArticle from './pages/ReadArticle';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/code-snippets" element={<CodeSnippets />} />
        <Route path="/submit-code" element={<SubmitCode />} />
        <Route path="/read-article" element={<ReadArticle />} />
      </Routes>
    </Router>
  );
}

export default App;
