import { 
    START_TIMER_1,
    START_TIMER_2,
    INCREMENT_TIMER_1,
    INCREMENT_TIMER_2,
    SET_TIMER_1,
    SET_TIMER_2
 } from "../ActionTypes";

const initialState = {
    timer1RemainingTime: 0,
    timer2RemainingTime: 0,
};

const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TIMER_1: {
            return {
                ...state,
                timer1RemainingTime: action.payload.remainingTime
            }
        }
        case SET_TIMER_2: {
            return {
                ...state,
                timer2RemainingTime: action.payload.remainingTime
            }
        }
        case START_TIMER_1: {
          return {
              ...state,
              timer1RemainingTime: (state.timer1RemainingTime -= 1)
          }
        }
        case START_TIMER_2: {
            return {
                ...state,
                timer2RemainingTime: (state.timer2RemainingTime -= 1)
            }
        }
        case INCREMENT_TIMER_1: {
            return {
                ...state,
                timer1RemainingTime: (state.timer1RemainingTime + action.payload.centiSeconds)
            }
        }
        case INCREMENT_TIMER_2: {
            return {
                ...state,
                timer2RemainingTime: (state.timer2RemainingTime + action.payload.centiSeconds)
            }
        }
        default: {
            return state;
        }
    }
};

export default timerReducer;
