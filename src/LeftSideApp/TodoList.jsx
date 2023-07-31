import React, { useState } from "react";
import ItemList from "./itemList";
import "./todoList.css";
function TodoList({ arr, removeFunction, setCurrentElement }) {
  let [inputValue, setInputValue] = useState("");
  return (
    <div className="todoList">
      <input                                                             // Поиск по массиву
        placeholder="Search..."
        className="input"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      {arr                                                     
        .filter((el) => el.name.indexOf(inputValue) !== -1)    // Фильтр списка по имени
        .map((el) => (                                         // Рендер уже самого списка
          <ItemList
            name={el.name}
            key={el.id}
            id={el.id}
            removeFunction={removeFunction}
            inProgress={el.inProgress}
            setCurrentElement={setCurrentElement}
          />
        ))}
    </div>
  );
}

export default TodoList;
