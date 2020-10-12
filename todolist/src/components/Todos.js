import React from 'react';
import {connect} from 'react-redux'
import {handleAddTodo} from "../actions/todos";
import List from "./List";


class Todos extends React.Component {

    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this)
    }

    addItem(event){
        event.preventDefault()
        this.props.dispatch(handleAddTodo(this.input.value))
        this.input.value=''
    }


    render(){

        return(
            <div>
                <h1>Todo List</h1>
                <input
                    type="text"
                    placeholder="Add Todo"
                    ref={(input)=> {
                        this.input = input
                    }
                    }
                />
                <button onClick={this.addItem}>Add Todo</button>
                <List listItems={this.props.todos} dispatch={this.props.dispatch}/>
            </div>
        )
    }
}

export default connect((state)=>{
    return {todos:state.todos}
})(Todos)

