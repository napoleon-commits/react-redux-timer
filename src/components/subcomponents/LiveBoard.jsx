import React from "react";
import { connect } from 'react-redux';

import {
    START_TIMER_1,
    START_TIMER_2,
    INCREMENT_TIMER_1,
    INCREMENT_TIMER_2,
} from "../../redux/ActionTypes";

class LiveBoard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            startTimer1bool: false,
            startTimer2bool: false,
        }
        this.startTimer1 = this.startTimer1.bind(this);
        this.stopTimer1 = this.stopTimer1.bind(this);
        this.startTimer2 = this.startTimer2.bind(this);
        this.stopTimer2 = this.stopTimer2.bind(this);
    }
    componentDidMount(){
        setInterval(()=>{
            if(this.state.startTimer1bool){
                this.props.startTimer1();
            }
            if(this.state.startTimer2bool){
                this.props.startTimer2();
            }
        }, 10);
    }
    startTimer1(){
        this.setState({
            startTimer1bool: true,
        })
    }
    stopTimer1(){
        this.setState({
            startTimer1bool: false,
        })
    }
    startTimer2(){
        this.setState({
            startTimer2bool: true,
        })
    }
    stopTimer2(){
        this.setState({
            startTimer2bool: false,
        })
    }
    render() {
        return (
            <>
                <div>
                    <button onClick={this.startTimer1}>Start Timer 1</button>
                    <button onClick={this.stopTimer1}>Stop Timer 1</button>
                    <button>Increment Timer 1</button>
                </div>
                <div>
                    <button onClick={this.startTimer2}>Start Timer 2</button>
                    <button onClick={this.stopTimer2}>Stop Timer 2</button>
                    <button>Increment Timer 2</button>
                </div>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // dispatching plain actions
        incrementTimer1: () => dispatch({ type: INCREMENT_TIMER_1 }),
        startTimer1: () => dispatch({ type: START_TIMER_1 }),
        incrementTimer2: () => dispatch({ type: INCREMENT_TIMER_2 }),
        startTimer2: () => dispatch({ type: START_TIMER_2 }),
    }
}
export default connect(
    ()=>({}),
    mapDispatchToProps
)(LiveBoard);
