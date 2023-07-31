import React from "react";
import MyButton from "../UI/myButton";

function ItemList({ name, id, removeFunction, inProgress, setCurrentElement}) {
  return (
    <div className="itemListBox" onClick={() => {
      setCurrentElement(id)
    }}>
      <span
        style={                        // Было решено сделать прямо через инлайн стили, т.к небольшое 
          inProgress === "waiting"     // тестовое задание. Обычно я это делаю через clsx и tailwind
            ? { color: "grey" }
            : inProgress === "ok"
            ? { color: "green" }
            : { color: "blue" }
        }
        className="noteInItem"
      >
        {name}
      </span>
      <MyButton func={() => removeFunction(id)} classname={'deleteButton'}>Удалить</MyButton>   
    </div> 
  );
}

export default ItemList;
