import React from 'react';
import { connect } from 'react-redux'

class Timer extends React.Component {
    render() {
        const { remainingTime } = this.props;
        const hours = Math.floor(remainingTime / 360000);
        const minutes = Math.floor(
            (
                remainingTime
                - (hours * 360000)
            ) / 6000
        );
        const seconds = Math.floor(
            (
                remainingTime
                - (hours * 360000)
                - (minutes * 6000)
            ) / 100
        )
        const remainder = (
            remainingTime
            - (hours * 360000)
            - (minutes * 6000)
            - (seconds * 100)
        );
        return (
            <>
                {
                    this.props.remainingTime >= 360000
                        ? (
                            <>
                                {String(hours).padStart(2, '0')}:
                                {String(minutes).padStart(2, '0')}.
                                {String(seconds).padStart(2, '0')}
                            </>
                        )
                        : this.props.remainingTime >= 6000
                            ? (
                                <>
                                    {String(hours).padStart(2, '0')}:
                                    {String(minutes).padStart(2, '0')}.
                                    {String(seconds).padStart(2, '0')}
                                </>
                            )
                            : (
                                <>
                                    {String(minutes).padStart(2, '0')}:
                                    {String(seconds).padStart(2, '0')}.
                                    {String(remainder).padStart(2, '0')}
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
