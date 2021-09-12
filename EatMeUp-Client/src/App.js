import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginPage from './componets/LoginPage/Login'
import SignupPage from './componets/SignupPage/Signup'
import LandingPage from './componets/LandingPage/Landing'

function App() {
  return (
    <Router>
      <div className='App'>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignupPage} />
      </div>
    </Router>
  );
}

export default App;
