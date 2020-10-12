import API from 'goals-todos-api'

//Constants
export const RECEIVE_DATA = 'RECEIVE_DATA'

//Action generators
function receiveDataAction(todos,goals){
    return{
        type:RECEIVE_DATA,
        todos,
        goals,
    }
}

//Async handlers
export function handleReceiveData(dispatch){
    Promise.all([
        API.fetchTodos(),
        API.fetchGoals()
    ]).then(([todos,goals])=>{
        dispatch(receiveDataAction(todos, goals))
    })
}

