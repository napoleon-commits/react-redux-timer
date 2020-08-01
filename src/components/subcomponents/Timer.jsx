import React from 'react';
import { connect } from 'react-redux'

class Timer extends React.Component {
    render() {
        return (
            <>{this.props.id}-----{this.props.remaindingTime}</>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { timer1RemaindingTime, timer2RemaindingTime } = state.Timer;
    return {
        remaindingTime: (ownProps.id === "timer1" ? timer1RemaindingTime : timer2RemaindingTime)
    }
}

export default connect(
    mapStateToProps,
    {}
)(Timer);
