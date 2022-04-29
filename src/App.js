import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

import { IconButton, Button, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Add } from "@mui/icons-material";

import CRA from "./BasicsOfReact/CRA/CRA";
import UseEffect from "./BasicsOfReact/UseEffect";
import CleanUp from "./BasicsOfReact/CleanUp";

import TodoList from "./Practice/TodoList";
import CoinTracker from "./Practice/CoinTracker";

import Movies from "./Practice/Movie/routes/Home";
import Detail from "./Practice/Movie/routes/Detail";
import { useState } from "react";

const Input = styled("input")({
  display: "none",
});

function App() {
  return (
    <Container maxWidth="md">
      <h1>React 기초(예제)</h1>
      <Router>
        <Routes>
          <Route path={process.env.PUBLIC_URL + "/"} element={<Layout />}>
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
    </Container>
  );
}

export default App;

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/basic"}>Basic</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/practice"}>Practice</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

function Home() {
  const [imgSrc, setImgSrc] = useState("");
  const [file, setFile] = useState("");
  const readImage = (input) => {
    if (input.files && input.files[0]) {
      // 이미지 파일인지 검사(생략)

      // FileReader 인스턴스 생성
      const reader = new FileReader();

      // 이미지가 로드 된 경우
      reader.onload = (e) => {
        setImgSrc(e.target);
      };

      // reader가 이미지 읽도록 하기
      reader.readAsDataURL(input.files[0]);
    }
  };
  const onChange = (event) => {
    setFile(event.target.files[0]);
    readImage(event.target);
  };
  const onClick = () => {
    setFile("");
    setImgSrc("");
  };
  return (
    <div>
      <h2>Home</h2>
      <p>
        <a
          href="https://reactrouter.com/docs/en/v6/examples/basic"
          target="_blank"
          rel="noreferrer"
        >
          React Router Basic Example 참고
        </a>
      </p>
      <br />
      <h3>업로드 이미지 미리보기</h3>
      <Button variant="contained" onClick={onClick}>
        초기화
      </Button>
      <label htmlFor="icon-button-file">
        <Input
          onChange={onChange}
          accept="image/*"
          id="icon-button-file"
          type="file"
        />
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <Add />
        </IconButton>
      </label>
      {file ? <p>{file.name}</p> : null}
      {imgSrc ? (
        <img src={imgSrc.result} alt="업로드 파일" width="100%" />
      ) : (
        <p>이미지가 없어요</p>
      )}
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
            <Link to={process.env.PUBLIC_URL + "/basic"}>초기화</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/basic/cra"}>CRA</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/basic/useeffect"}>
              UseEffect
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/basic/cleanup"}>CleanUp</Link>
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
            <Link to={process.env.PUBLIC_URL + "/practice"}>초기화</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/practice/todolist"}>
              TodoList
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/practice/cointracker"}>
              CoinTracker
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/practice/movie"}>Movie</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
