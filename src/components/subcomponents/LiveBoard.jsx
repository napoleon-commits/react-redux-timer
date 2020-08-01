import React from "react";
import { connect } from 'react-redux'

class LiveBoard extends React.Component {
    constructor(props){
        super(props);
        this.startTimer1 = this.startTimer1.bind(this);
    }
    startTimer1(){
        console.log('this.props');
        console.log(this.props);
        console.log('this.props');
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

const mapDispatchToProps = dispatch => {
    return {
        // dispatching plain actions
        increment: () => dispatch({ type: 'INCREMENT' }),
        decrement: () => dispatch({ type: 'DECREMENT' }),
        stop: () => dispatch({ type: 'STOP' })
    }
}
export default connect(
    () => ({}),
    mapDispatchToProps
)(LiveBoard);
