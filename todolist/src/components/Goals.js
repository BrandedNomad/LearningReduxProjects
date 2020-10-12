import React, {Component} from 'react';
import {connect} from 'react-redux'
import {handleAddGoal} from "../actions/goals";
import List from "./List";


class Goals extends React.Component {

    constructor(props){
        super(props)
        this.addGoal = this.addGoal.bind(this)
    }

    addGoal(event){
        event.preventDefault()
        this.props.dispatch(handleAddGoal(this.input.value))
        this.input.value = ''
    }

    render(){
        return(
            <div>
                <h1>Goals</h1>
                <input
                    type="text"
                    placeholder="Add Goal"
                    ref={(input)=>{
                        this.input = input
                    }}
                />
                <button onClick={this.addGoal}>ADD GOAL</button>
                <List listItems={this.props.goals} dispatch={this.props.dispatch}/>
            </div>
        )
    }
}

export default connect((state)=>{
    return {goals:state.goals}
})(Goals)