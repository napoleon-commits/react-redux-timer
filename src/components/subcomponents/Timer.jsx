import React from 'react';
import { connect } from 'react-redux'

class Timer extends React.Component {
    render() {
        return (
            <>
                {
                    this.props.remainingTime >= 360000
                        ? (
                            <>
                                {String(Math.floor(this.props.remainingTime / 360000)).padStart(2, '0')}:
                                {String(Math.floor(this.props.remainingTime / 6000)).padStart(2, '0')}
                            </>
                        )
                        : this.props.remainingTime >= 6000
                            ? (
                                <>
                                    {String(Math.floor(this.props.remainingTime / 6000)).padStart(2, '0')}:
                                    {String(Math.floor(((this.props.remainingTime / 6000) - (Math.floor(this.props.remainingTime / 6000))) * 60)).padStart(2, '0')}
                                </>
                            )
                            : (
                                <>
                                    {Math.floor(this.props.remainingTime / 100)}.
                                    {(this.props.remainingTime) - (Math.floor(this.props.remainingTime / 100) * 100)}
                                </>
                            )
                }
            </>
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
