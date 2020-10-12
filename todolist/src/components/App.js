import React, {Component} from 'react';
import {connect} from 'react-redux'
import {handleReceiveData} from "../actions/shared";
import ConnectedTodos from './Todos'
import ConnectedGoals from './Goals'


class App extends React.Component {

    componentDidMount(){
        const {dispatch} = this.props
        handleReceiveData(dispatch);
    }

    render(){


        if(this.props.loading === true){
            return <h3>Loading...</h3>
        }


        return (
            <div>
                <ConnectedTodos/>
                <ConnectedGoals/>
            </div>
        )
    }
}



export default connect((state)=>{
    return {loading:state.loading}
})(App)
