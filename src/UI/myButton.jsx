import React from "react";
import clsx from 'clsx'
import './myButton.css'

/**
 * В этом блоке должны были быть параметры, но я их убрал т.к не имеет смысла в данном приложении
 * clsx я оставил на случай, если всё таки понадобится внести небольшие корректировки в дизайн кнопки
 */


function MyButton({children, classname, func}){
    return(
        <button className={clsx('btn', classname)} onClick={func}>{children}</button> 
    )
}

export default MyButton