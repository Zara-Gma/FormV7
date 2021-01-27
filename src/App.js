import React from "react";
import {
  BrowserRouter as Router, Route, Link,
  useLocation
} from "react-router-dom";
import { PersonalInfo } from "./memberForm/1PersonalInfo";
import { Header } from "./components/Header";
// import "../src/memberForm/Step2.css";

const Pages = () => {
  const location = useLocation();
  return (
    <>
      <nav className="container">
        <ol className="steps">
          <li className={location.pathname === "/" ? "active" : ""}>
            {/* <Link to="/">Personal Information</Link> */}
          </li>
        </ol>
      </nav>
      {/* <Route exact path="/" component={PersonalInfo} /> */}
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