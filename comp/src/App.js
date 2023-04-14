import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CodeSnippets from './pages/CodeSnippets';
import SubmitCode from './pages/SubmitCode';
import ReadArticle from './pages/ReadArticle';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/code-snippets" component={CodeSnippets} />
        <Route path="/submit-code" component={SubmitCode} />
        <Route path="/read-article" component={ReadArticle} />
      </Switch>
    </Router>
  );
}

export default App;
