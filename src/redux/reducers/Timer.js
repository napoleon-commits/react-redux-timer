// import { 
//     START_TIMER_1,
//     START_TIMER_2,
//     STOP_TIMER_1,
//     STOP_TIMER_2,
//     INCREMENT_TIMER_1,
//     INCREMENT_TIMER_2
//  } from "../ActionTypes";

const initialState = {
    timer1RemaindingTime: 1800,
    timer2RemaindingTime: 900,
};

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    // case START_TIMER_1: {
    //   return action.payload.filter;
    // }
    default: {
      return state;
    }
  }
};

export default timerReducer;
