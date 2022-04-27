import { useEffect, useState } from "react";

function Hello() {
  // ***return에 컴포넌트 삭제시 실행할 코드 작성***
  useEffect(() => {
    console.log("created :)");
    return () => console.log("destroyed :(");
  }, []);

  // 위 코드를 풀어서 씀
  // function byFn() {
  //   console.log("bye :(");
  // }
  // function hiFn() {
  //   console.log("hi :)");
  //   return byFn;
  // }
  // useEffect(hiFn, []);

  // 화살표함수가 편하다
  // useEffect(() => {
  //   console.log("화살표함수 hi :)");
  //   return () => console.log("화살표함수 bye :(");
  // }, []);

  // useEffect(function () {
  //   console.log("함수 hi :)");
  //   return function () {
  //     console.log("함수 bye :(");
  //   };
  // }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
