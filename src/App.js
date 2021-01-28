import React from "react";
import {
  BrowserRouter as Router, Route, Link,
  useLocation
} from "react-router-dom";
import { PersonalInfo } from "./memberForm/1Personalinfo";
// import { ThankYou } from './memberForm/6ThankYou';
import { Header } from "./components/Header";

const Pages = () => {
  const location = useLocation();
  return (
    <>
      <nav className="container">
        <ol className="steps">
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Personal Information</Link>
          </li>
          <li className={location.pathname === "/identity" ? "active" : ""}>
            <Link to="/identity">Identity</Link>
          </li>
          <li className={location.pathname === "/step3" ? "active" : ""}>
            <Link to="/interests">Interests</Link>
          </li>
          <li className={location.pathname === "/step4" ? "active" : ""}>
            <Link to="/codeofconduct">Code of Conduct</Link>
          </li>
          <li className={location.pathname === "/step5" ? "active" : ""}>
            <Link to="/slackconduct">Slack Guidelines</Link>
          </li>
          {/* <li className={location.pathname === "/step6" ? "active" : ""}>
            <Link to="/step6">Step 6</Link>
          </li>
          <li className={location.pathname === "/step7" ? "active" : ""}>
            <Link to="/step7">Step 7</Link>
          </li>
          <li className={location.pathname === "/step8" ? "active" : ""}>
            <Link to="/step8">Step 8</Link>
          </li>
          <li className={location.pathname === "/step9" ? "active" : ""}>
            <Link to="/step9">Step 9</Link>
          </li> */}
          {/* <li className={location.pathname === "/result" ? "active" : ""}>
            <Link to="/result">Result</Link>
          </li> */}
          <li className={location.pathname === "/thankyou" ? "active" : ""}>
            <Link to="/thankyou">Thank you</Link>
          </li>
        </ol>
      </nav>
      <Route exact path="/" component={PersonalInfo} />
      {/* <Route path="/thankyou" component={ThankYou} /> */}
    </>
  );
};

function App() {
  return (
    <>
      <Header />
      <Router>
        <Pages />
      </Router>
    </>
  );
}

export default App;
