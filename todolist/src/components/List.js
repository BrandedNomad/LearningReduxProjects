import React from 'react';
import {handleToggleItem,handleDeleteTodo} from "../actions/todos";
import {handleDeleteGoal} from "../actions/goals";


function List(props){

    const remove = (event)=>{
        const name = event.target.parentNode.firstChild.innerText
        const type = event.target.parentNode.parentNode.parentNode.firstChild.innerText
        const id = event.target.parentNode.getAttribute("id")
        const completeClass = event.target.parentNode.firstChild.getAttribute("class")
        let complete = false
        if(completeClass === "red"){
            complete = true
        }

        if(type === "Todo List"){
            props.dispatch(handleDeleteTodo({name,id,complete}))
        }

        if(type === "Goals"){
            props.dispatch(handleDeleteGoal({name,id}))
        }

    }

    const toggle = (event)=>{
        const name = event.target.parentNode.firstChild.innerText
        const id = event.target.parentNode.getAttribute("id")
        const type = event.target.parentNode.parentNode.parentNode.firstChild.innerText
        if(type === "Todo List"){
            props.dispatch(handleToggleItem({name,id}))

        }


    }



    return (
        <ul>
            {props.listItems && props.listItems.map((item)=>{
                return <li
                    key={item.id}
                    id={item.id}
                >
                            <span
                                className={item.complete ? "red":""}
                                onClick={(event)=>{toggle(event)}}
                            >{item.name}</span>
                    <button onClick={(event)=>{
                        remove(event)
                    }}>X</button>
                </li>
            })}
        </ul>
    )
}

export default List;