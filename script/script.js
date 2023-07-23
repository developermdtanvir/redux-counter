// select dom element
const incrimentEl = document.querySelector("#incriment");
const decrimentEl = document.querySelector("#decriment");
const counterEl = document.querySelector("#counter");
const itestEl = document.querySelector("#item");

// action identifer
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ITEST = "ITEST";

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

const itest = (value) => {
  return {
    type: ITEST,
    value: value,
  };
};

// initial state
const initialState = {
  value: 0,
  properties: {
    a: 5,
    b: 6,
  },
};

console.log(initialState);
// create reducer function

const counterReducer = (state = initialState, action) => {
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
  } else if (action.type === ITEST) {
    return {
      ...state,
      properties: {
        ...state.properties,
        b: state.properties.b + action.value,
      },
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
// this is created example purposes

itestEl.addEventListener("click", () => {
  store.dispatch(itest(5));
});
