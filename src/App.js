import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import CRA from "./BasicsOfReact/CRA/CRA";
import UseEffect from "./BasicsOfReact/UseEffect";
import CleanUp from "./BasicsOfReact/CleanUp";

import TodoList from "./Practice/TodoList";
import CoinTracker from "./Practice/CoinTracker";

import Movies from "./Practice/Movie/routes/Home";
import Detail from "./Practice/Movie/routes/Detail";

function App() {
  return (
    <div>
      <h1>React 기초</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="basic" element={<Basic />}>
              <Route path="cra" element={<CRA />} />
              <Route path="useeffect" element={<UseEffect />} />
              <Route path="cleanup" element={<CleanUp />} />
            </Route>
            <Route path="practice" element={<Practice />}>
              <Route path="todolist" element={<TodoList />} />
              <Route path="cointracker" element={<CoinTracker />} />
              <Route path="movie" element={<Movies />} />
              <Route path="movie/:id" element={<Detail />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
  return;
}

export default App;

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/basic">Basic</Link>
          </li>
          <li>
            <Link to="/practice">Practice</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>
        <a
          href="https://reactrouter.com/docs/en/v6/examples/basic"
          target="_blank"
        >
          React Router Basic Example 참고
        </a>
      </p>
    </div>
  );
}

function Basic() {
  return (
    <div>
      <h2>Basic of React</h2>
      <nav>
        <ul>
          <li>
            <Link to="/basic">초기화</Link>
          </li>
          <li>
            <Link to="/basic/cra">CRA</Link>
          </li>
          <li>
            <Link to="/basic/useeffect">UseEffect</Link>
          </li>
          <li>
            <Link to="/basic/cleanup">CleanUp</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

function Practice() {
  return (
    <div>
      <h2>Practice</h2>
      <nav>
        <ul>
          <li>
            <Link to="/practice">초기화</Link>
          </li>
          <li>
            <Link to="/practice/todolist">TodoList</Link>
          </li>
          <li>
            <Link to="/practice/cointracker">CoinTracker</Link>
          </li>
          <li>
            <Link to="/practice/movie">Movie</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
