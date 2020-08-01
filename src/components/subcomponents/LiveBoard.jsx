import React from "react";
import { connect } from 'react-redux';

import {
    START_TIMER_1,
    START_TIMER_2,
    STOP_TIMER_1,
    STOP_TIMER_2,
    INCREMENT_TIMER_1,
    INCREMENT_TIMER_2,
    TOGGLE_TIMER_1,
    TOGGLE_TIMER_2
} from "../../redux/ActionTypes";

class LiveBoard extends React.Component {
    constructor(props){
        super(props);
        this.startTimer1 = this.startTimer1.bind(this);
    }
    componentDidMount(){
        console.log(this.props.startTimer1bool);
        console.log(this.props.startTimer2bool);
    }
    startTimer1(){
        this.props.startTimer1();
    }
    render() {
        return (
            <>
                <div>
                    <button onClick={this.startTimer1}>Start Timer 1</button>
                    <button>Stop Timer 1</button>
                    <button>Increment Timer 1</button>
                </div>
                <div>
                    <button>Start Timer 2</button>
                    <button>Stop Timer 2</button>
                    <button>Increment Timer 2</button>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    const { startTimer1, startTimer2 } = state.Timer;
    return {
        startTimer1bool: startTimer1,
        startTimer2bool: startTimer2,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // dispatching plain actions
        incrementTimer1: () => dispatch({ type: INCREMENT_TIMER_1 }),
        startTimer1: () => dispatch({ type: START_TIMER_1 }),
        stopTimer1: () => dispatch({ type: STOP_TIMER_1 }),
        incrementTimer2: () => dispatch({ type: INCREMENT_TIMER_2 }),
        startTimer2: () => dispatch({ type: START_TIMER_2 }),
        stopTimer2: () => dispatch({ type: STOP_TIMER_2 }),
        toggleTimer1: () => dispatch({type: TOGGLE_TIMER_1}),
        toggleTimer2: () => dispatch({type: TOGGLE_TIMER_2}),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LiveBoard);
