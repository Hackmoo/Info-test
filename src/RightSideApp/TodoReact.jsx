import React, { useState } from "react";
import "./todoReact.css";
import MyButton from "../UI/myButton";

function TodoList({ currentElement, changeTodoFunction, addNote }) {
  let [inputValue, setInputValue] = useState("");
  let [modalIsOpen, setModalIsOpen] = useState(false)

  let modalFunction = () => {
    setModalIsOpen(el => !el)
  }

  let [selectState, setSelectState] = useState('waiting')
  return (
    <div className="todoReact">
      <MyButton classname={'redactButton'} func={() => modalFunction()}>Добавить заметку</MyButton>
      {modalIsOpen && <ModalWindow modalFunction={modalFunction} addNote={addNote}/>}
      <h1 style={{ textAlign: "center" }}>Редактирование - </h1>
      <h2 style={{ textAlign: "center", overflow: 'hidden', textOverflow: 'ellipsis' }}>{currentElement ? currentElement.name : 'Заметок нет'}</h2>
      <br />
      {currentElement && (  // Скрыть блок с управлением редактирования, если нет заметок
        <div className="changeNotesBlock">
        <h3>Изменить текст заметки</h3>
        <input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <h3>Изменить статус</h3>
        <select onChange={(event) => setSelectState(event.target.value)}> <option value="waiting" defaultChecked>Ожидает</option>
          <option value="ok">Выполнена</option>
          <option value="process">В процессе</option></select>
          <MyButton
          classname={"redactButton"}
          func={() => {
            changeTodoFunction(inputValue, selectState);
            setInputValue("");
          }}
        >
          Изменить
        </MyButton>
      </div>
      )}
    </div>
  );
}

function ModalWindow({modalFunction, addNote}){
  let [selectState, setSelectState] = useState('waiting')
  let [inputValue, setInputValue] = useState('')
  function createNote(){
    if(inputValue){
      modalFunction();
      addNote(inputValue, selectState);
      setInputValue('')
    }
    else{
      alert('Заполнены не все поля')
    }
  }
  return(
    <div className="modal">
      <div className="modalCard">
        <h1>Добавление новой заметки</h1>
        <div>
        <div className="modalEditorELement">
        <h3>Имя</h3>
        <input value={inputValue} onChange={(event) => setInputValue(event.target.value)}/>
        </div>
        <div className="modalEditorELement">
        <h3>Статус</h3>
        <select onChange={(event) => setSelectState(event.target.value)}>
          <option value="waiting" defaultChecked>Ожидает</option>
          <option value="ok">Выполнена</option>
          <option value="process">В процессе</option>
        </select>
        </div>
        </div>
        <div className="modalEditorELement">
        <MyButton classname={'modalCloseButton'} func={() => modalFunction()}>Закрыть</MyButton>
        <MyButton func={createNote}>Создать</MyButton>
        </div>
      </div>
    </div>
  )
}

export default TodoList;
