// select dom element
const incrimentEl = document.querySelector("#incriment");
const decrimentEl = document.querySelector("#decriment");
const counterEl = document.querySelector("#counter");

// action identifer
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// action creation function
const increment = (value) => {
  return {
    type: INCREMENT,
    value: value || 5,
  };
};
const decrement = (value) => {
  return {
    type: DECREMENT,
    value: value || 2,
  };
};

// initial state
const initialState = {
  value: 0,
};

console.log(initialState);
// create reducer function

const counterReducer = (state = initialState, action) => {
  console.log(action);
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.value,
    };
  } else if (action.type === DECREMENT) {
    if (state.value === 0) {
      return;
    }
    return {
      ...state,
      value: state.value - action.value,
    };
  } else {
    return state;
  }
};

// create store
const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  counterEl.innerText = state.value.toString();
};

// update UI initaly
render();

store.subscribe(render);

// event handlers

incrimentEl.addEventListener("click", () => {
  store.dispatch(increment(10));
});
decrimentEl.addEventListener("click", () => {
  store.dispatch(decrement(5));
});
