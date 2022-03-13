import './component/css/style.css';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect } from 'react-router-dom';
import homepage from './component/homepage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/" component={homepage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
