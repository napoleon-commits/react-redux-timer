import React from 'react';

import { connect } from 'react-redux'

class Timer extends React.Component {
    render() {
        return (
            <>Timer{this.props.id} {this.props[this.props.timerId]}</>
        )
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    console.log('mapStateToProps')
    console.log(state)
    console.log('mapStateToProps');
    const { timer1RemaindingTime, timer2RemaindingTime } = state.Timer;
    return {
        timer1: timer1RemaindingTime,
        timer2: timer2RemaindingTime,
    }
}

// const mapDispatchToProps = { increment, decrement, reset }

export default connect(
    mapStateToProps,
    {}
)(Timer);
