import API from 'goals-todos-api'

export const ADD_GOAL = 'ADD_GOAL';
export const REMOVE_GOAL='REMOVE_GOAL';

//Action generators
function addGoalAction(goal){
    return {
        type:ADD_GOAL,
        goal
    }
}

function removeGoalAction(name){
    return {
        type:REMOVE_GOAL,
        goal:{
            name
        }
    }
}

//Async Handlers
export function handleDeleteGoal(goal){

    return (dispatch)=>{
        dispatch(removeGoalAction(goal.name))
        return API.deleteGoal(goal.id)
            .catch((error)=>{
                dispatch(addGoalAction(goal))
                alert(error)
            })
    }

}

export function handleAddGoal(name){
    return (dispatch)=>{
        return API.saveGoal(name)
            .then((goal)=>{
                dispatch(addGoalAction(goal))
            }).catch((error)=>{
                alert("Failed to add goal. Try again")
            })
    }
}