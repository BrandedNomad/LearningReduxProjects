import {ADD_GOAL,REMOVE_GOAL} from "../actions/goals";
import {RECEIVE_DATA} from "../actions/shared";


//Reducer
export default function goals(state=[],action){

    switch(action.type){
        case ADD_GOAL:
            return state.concat([action.goal])
        case REMOVE_GOAL:
            return state.filter((goal)=>{
                return goal.name !== action.goal.name
            })
        case RECEIVE_DATA:
            return action.goals
        default:
            return state
    }
}