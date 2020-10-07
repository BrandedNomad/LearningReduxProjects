

//Reducer: takes in a state and a action and reduces it to a new state
//Always a pure function
function todos(state =[],action){ //initially state is undefined so need to set it's default
    if(action.type === 'ADD_TODO'){
        return state.concat([action.todo])
    }

    return state
}

//Store
function createStore(){

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
        state = todos(state,action)
        listeners.forEach((listener)=>{
            listener()
        })
    }

    //Update State

    return {
        getState,
        subscribe
    }
}