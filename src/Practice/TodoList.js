import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState(""); // 생성
  const [toDos, setToDos] = useState([]); // 투두 리스트
  const onChange = (event) => setToDo(event.target.value);
  // form은 기본적으로 버튼 클릭으로 submit 동작을 하는데 막아야 함
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      // 빈 값이면 return하여 함수 실행하지 않음
      return;
    }
    // '...Array'로 하면 배열의 요소들로 입력됨
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {/* map -> 배열의 각 요소 수정하여 새 배열 return */}
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
