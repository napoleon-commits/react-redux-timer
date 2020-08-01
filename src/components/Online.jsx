import React from 'react';

import LiveBoard from './subcomponents/LiveBoard';
import Timer from './subcomponents/Timer'

const Online = () => (
    <>
        <Timer id="timer1" />
        <LiveBoard />
        <Timer id="timer2" />
    </>
);

export default Online;