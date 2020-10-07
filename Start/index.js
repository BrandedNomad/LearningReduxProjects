
//library code

//Store
function createStore(reducer){

    let state
    let listeners = []

    //Getter methods
    const getState =()=>{
        return state
    }

    //Listening for state changes and informs user when state has changed
    const subscribe = (listener) =>{
        listeners.push(listener)
        return ()=>{
            listeners = listeners.filter((l)=>{ //provides user with a way to unsubscribe from store
                return l !== listener
            })
        }

    }

    const dispatch = (action)=>{
        state = reducer(state,action)
        listeners.forEach((listener)=>{
            listener()
        })
    }

    //Update State

    return {
        getState,
        subscribe,
        dispatch
    }
}

//App Code

//Reducer: takes in a state and a action and reduces it to a new state
//Always a pure function
function todos(state =[],action){ //initially state is undefined so need to set it's default

    switch(action.type){
        case 'ADD_TODO':
            return state.concat([action.todo])
        case 'REMOVE_TODO':
            return state.filter((todo)=>{
                return todo.name !== action.todo.name
            })
        case 'TOGGLE_TODO':
            return state.map((todo)=>{
                return todo.name !== action.todo.name ? todo:
                    Object.assign({},todo,{complete:!todo.complete})
            })
        default:
            return state
    }

}

function goals(state=[],action){

    switch(action.type){
        case 'ADD_GOAL':
            return state.concat([action.goal])
        case 'REMOVE_GOAL':
            return state.filter((goal)=>{
                return goal.name !== action.goal.name
            })
        default:
            return state
    }
}

function

const x = createStore(todos)

x.getState();

const unsubscribe = x.subscribe(()=>{
    console.log('this new state is: ', x.getState())
})

x.dispatch({
    type:'ADD_TODO',
    todo:{
        id:0,
        name:'Go for a run',
        complete:false
    }
})

x.dispatch({
    type:'ADD_TODO',
    todo:{
        id:1,
        name:'Go for a walk',
        complete:false
    }
})

x.dispatch({
    type:'TOGGLE_TODO',
    todo:{
        name:'Go for a run'
    }
})

x.dispatch({
    type:'REMOVE_TODO',
    todo:{
        name:'Go for a walk'
    }
})



