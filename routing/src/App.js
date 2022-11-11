import "./App.css";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/School">School</Link>
            </li>
            <li>
              <Link to="/College">college</Link>
            </li>
            <li>
              <Link to="/University">University</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/School" element={<School />} />
          <Route path="/College" element={<College />} />
          <Route path="/University" element={<University />} />
          <Route path="/" element={<Home />} />
        </Switch>
      </div>
    </Router>
  );
}
function Home() {
  return <h1>HOME</h1>;
}
function School() {
  return <h1>SCHOOL</h1>;
}
function College() {
  return <h1>COLLEGE</h1>;
}
function University() {
  return <h1>UNIVERSITY</h1>;
}
export default App;
