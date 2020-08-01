import React from 'react';
import { connect } from 'react-redux'

class Timer extends React.Component {
    render() {
        return (
            <>{this.props.id}-----{this.props.remainingTime}</>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { timer1RemainingTime, timer2RemainingTime } = state.Timer;
    return {
        remainingTime: (ownProps.id === "timer1" ? timer1RemainingTime : timer2RemainingTime)
    }
}

export default connect(
    mapStateToProps,
    {}
)(Timer);
