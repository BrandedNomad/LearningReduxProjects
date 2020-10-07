

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

    return {
        getState,
        subscribe
    }
}