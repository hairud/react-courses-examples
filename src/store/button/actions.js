import { CHANGE_ACTIVE_BUTTON } from "./types";

const changeActiveButton = (buttonName) => ({
  type: CHANGE_ACTIVE_BUTTON,
  buttonName,
});

export { changeActiveButton };
