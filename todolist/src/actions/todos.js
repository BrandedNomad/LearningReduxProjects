export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

//Action generators
function addToDoAction(todo){
    return {
        type:ADD_TODO,
        todo
    }
}

function toggleToDoAction(name){
    return {
        type:TOGGLE_TODO,
        todo:{
            name
        }
    }
}

function removeToDoAction(name){
    return {
        type:REMOVE_TODO,
        todo:{
            name
        }
    }
}

import API from 'goals-todos-api'

//Async handlers
export function handleDeleteTodo(todo){


    return (dispatch)=>{
        dispatch(removeToDoAction(todo.name))
        return API.deleteTodo(todo.id)
            .catch((error)=>{
                dispatch(addToDoAction(todo))
                alert(error)
            })
    }

}

export function handleAddTodo(name){
    return (dispatch)=>{
        return API.saveTodo(name)
            .then((todo)=>{
                dispatch(addToDoAction(todo))
            }).catch((error)=>{
                alert('Failed to add item. Try again')
            })
    }
}

export function handleToggleItem(todo){

    return (dispatch)=>{
        dispatch(toggleToDoAction(todo.name))
        return API.saveTodoToggle(todo.id)
            .catch((error)=>{
                alert(error)
                dispatch(toggleToDoAction(todo.name))
            })
    }
}