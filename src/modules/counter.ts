import {
  createStandardAction,
  ActionType,
  createReducer,
} from "typesafe-actions";

export const increase = createStandardAction("counter/INCREASE")();
export const decrease = createStandardAction("counter/DECREASE")();
export const increaseBy = createStandardAction("counter/INCREASE_BY")<number>();

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

const actions = { increase, decrease, increaseBy };
type CounterAction = ActionType<typeof actions>;

const counter = createReducer<CounterState, CounterAction>(initialState)
  .handleAction(increase, (state) => ({ count: state.count + 1 }))
  .handleAction(decrease, (state) => ({ count: state.count - 1 }))
  .handleAction(increaseBy, (state, action) => ({
    count: state.count + action.payload,
  }));

// , {
//   [INCREASE]: state => ({ count: state.count + 1 }),
//   [DECREASE]: state => ({ count: state.count - 1 }),
//   [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload}),
// });

// function counter(
//   state: CounterState = initialState,
//   action: CounterAction
// ): CounterState {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         count: state.count + 1,
//       };
//     case DECREASE:
//       return {
//         count: state.count - 1,
//       };
//     case INCREASE_BY:
//       return {
//         count: state.count + action.payload,
//       };
//     default:
//       return state;
//   }
// }

export default counter;
