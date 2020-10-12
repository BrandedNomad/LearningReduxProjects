import {ADD_TODO,REMOVE_TODO,TOGGLE_TODO} from "../actions/todos";
import {RECEIVE_DATA} from "../actions/shared";

//Reducer
export default function todos(state =[],action){ //initially state is undefined so need to set it's default

    switch(action.type){
        case ADD_TODO:
            return state.concat([action.todo])
        case REMOVE_TODO:
            return state.filter((todo)=>{
                return todo.name !== action.todo.name
            })
        case TOGGLE_TODO:
            return state.map((todo)=>{
                return todo.name !== action.todo.name ? todo:
                    Object.assign({},todo,{complete:!todo.complete}) //use Object assign in order not to mutate the original object (pure function)
            })
        case RECEIVE_DATA:
            return action.todos
        default:
            return state
    }

}