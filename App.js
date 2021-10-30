import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Posts from './Posts';
import Todos from './Todos';

function App() {
  return (
      <Router>
                <div className="container">
                    <Link className='link' to="/Posts">Posts</Link>
                    <Link className='link' to="/ToDos">ToDos</Link>
                </div>
                <div className="results">
                  <Switch>
                    <Route exact path="/Posts"><Posts /></Route>
                    <Route exact path="/ToDos"><Todos /></Route>
                </Switch>
               </div>
        </Router>
  );
}

export default App;
