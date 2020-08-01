import { 
    START_TIMER_1,
    // START_TIMER_2,
    // STOP_TIMER_1,
    // STOP_TIMER_2,
    // INCREMENT_TIMER_1,
    // INCREMENT_TIMER_2
 } from "../ActionTypes";

const initialState = {
    timer1RemaindingTime: 180000,
    timer2RemaindingTime: 90000,
    startTimer1: false,
    startTimer2: false,
};

const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_TIMER_1: {
          return {
              ...state,
              timer1RemaindingTime: (state.timer1RemaindingTime -= 1)
          }
        }
        default: {
            return state;
        }
    }
};

export default timerReducer;
