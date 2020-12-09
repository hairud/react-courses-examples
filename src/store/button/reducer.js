import { CHANGE_ACTIVE_BUTTON } from "./types";

const initialState = {
  buttons: ["first", "second", "third"],
  activeButton: "first",
};

const handlers = {
  [CHANGE_ACTIVE_BUTTON]: (state, action) => ({
    ...state,
    activeButton: action.buttonName,
  }),
};

const button = (state = initialState, action) => {
  if (handlers[action.type]) {
    return handlers[action.type](state, action);
  }

  return state;
};

export default button;
