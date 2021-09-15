import logo from "./logo.svg";
import "./App.scss";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import {Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
    </div>
  );
}

export default App;
