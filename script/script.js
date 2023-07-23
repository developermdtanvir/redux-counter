// select dom element
const incrimentEl = document.querySelector("#incriment");
const decrimentEl = document.querySelector("#decriment");
const counterEl = document.querySelector("#counter");

// initial state
const initialState = {
  value: 0,
};

console.log(initialState);
// create reducer function

const counterReducer = (state = initialState, action) => {
  console.log(action);
  if (action.type === "INCRIMENT") {
    return {
      ...state,
      value: state.value + 1,
    };
  } else if (action.type === "DECRIMENT") {
    if (state.value === 0) {
      return;
    }
    return {
      ...state,
      value: state.value - 1,
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
  store.dispatch({
    type: "INCRIMENT",
  });
});
decrimentEl.addEventListener("click", () => {
  store.dispatch({
    type: "DECRIMENT",
  });
});
