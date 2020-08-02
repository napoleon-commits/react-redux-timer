import { 
    START_TIMER_1,
    START_TIMER_2,
    INCREMENT_TIMER_1,
    INCREMENT_TIMER_2,
    SET_TIMER_1,
    SET_TIMER_2,
    SET_TIMER1_STATUS,
    SET_TIMER2_STATUS,
    SET_INACTIVE_TIME_STAMP,
 } from "../ActionTypes";

const initialState = {
    timer1RemainingTime: 0,
    timer2RemainingTime: 0,
    isTimer1Running: false,
    isTimer2Running: false,
    inactiveTimeStamp: null,
};

const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INACTIVE_TIME_STAMP: {
            return {
                ...state,
                inactiveTimeStamp: action.payload.inactiveTimeStamp,
            }
        }
        case SET_TIMER1_STATUS: {
            return {
                ...state,
                isTimer1Running: action.payload.isTimer1Running,
            }
        }
        case SET_TIMER2_STATUS: {
            return {
                ...state,
                isTimer2Running: action.payload.isTimer2Running,
            }
        }
        case SET_TIMER_1: {
            return {
                ...state,
                timer1RemainingTime: action.payload.timer1RemainingTime
            }
        }
        case SET_TIMER_2: {
            return {
                ...state,
                timer2RemainingTime: action.payload.timer2RemainingTime
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
