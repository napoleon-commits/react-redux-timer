import { 
    START_TIMER_1,
    START_TIMER_2,
 } from "../ActionTypes";

const initialState = {
    timer1RemaindingTime: 180000,
    timer2RemaindingTime: 90000,
};

const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_TIMER_1: {
          return {
              ...state,
              timer1RemaindingTime: (state.timer1RemaindingTime -= 1)
          }
        }
        case START_TIMER_2: {
            return {
                ...state,
                timer2RemaindingTime: (state.timer2RemaindingTime -= 1)
            }
          }
        default: {
            return state;
        }
    }
};

export default timerReducer;
