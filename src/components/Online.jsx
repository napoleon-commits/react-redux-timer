import React from 'react';

import LiveBoard from './subcomponents/LiveBoard';
import Timer from './subcomponents/Timer'

const Online = () => (
    <>
        <Timer id="1" />
        <LiveBoard />
        <Timer id="2" />
    </>
);

export default Online;