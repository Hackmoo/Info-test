import React, { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./LeftSideApp/TodoList";
import TodoReact from "./RightSideApp/TodoReact";

function App() {
  let [array, setArray] = useState([
    // Массив 'тудушек'
    { id: 0, name: "test1", inProgress: "waiting" },
    { id: 1, name: "test2", inProgress: "ok" },
    { id: 2, name: "test3", inProgress: "process" },
  ]);

  function removeElement(id) {
    // Удаление из массива через фильтр
    setArray(array.filter((el) => el.id !== id));
  }

  let [currentElement, setCurrentElement] = useState(array[0]); // Инициализация текущего элемента.
  // Нужен для понимания какой конкретно
  // элемент из списка сейчас выбран

  function setCurrentElementFunc(id) {
    // Логика переключения текущего элемента
    setCurrentElement(array.find((el) => el.id === id));
  }

  function changeNote(text, status) {
    // Логика редактирования заметок
    if(text){
      let temp = [...array];
      temp[temp.findIndex((el) => el.id === currentElement.id)].name = text;
      temp[temp.findIndex((el) => el.id === currentElement.id)].inProgress = status;
      setArray(temp);
    }
    else if(!text && status){
      let temp = [...array];
      temp[temp.findIndex((el) => el.id === currentElement.id)].inProgress = status;
      setArray(temp);
    }
  }

  useEffect(() => {
    // Фикс бага - пишет в редактировании удалённую карточку
    let temp = [...array]; 
    try {
      if (temp.find((el) => el.id === currentElement.id)) {
        return;
      } else {
        setCurrentElement(array[0]);
      }
    } catch {  // Вызывало ошибку, т.к вызывалось при currentElement undefiend в момент, когда нет карточек
      return;
    }
  }, [array]);

  function addNote(text, status) {                        // Добавление новых заметок
      let temp = { id: Date.now(), name: text, inProgress: status };
      setArray([...array, temp]);
  }

  return (
    <div className="App">
      <div className="mainBox">
        <TodoList
          arr={array}
          removeFunction={removeElement}
          setCurrentElement={setCurrentElementFunc}
        />
        <TodoReact
          currentElement={currentElement}
          changeTodoFunction={changeNote}
          addNote={addNote}
        />
      </div>
    </div>
  );
}

export default App;
