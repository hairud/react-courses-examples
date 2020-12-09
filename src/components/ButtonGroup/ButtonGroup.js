import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "@material-ui/core/Button";
import { ButtonGroup as MuiButtonGroup } from "@material-ui/core";

import ThemeContext from "../../utils/ThemeContext";
import { getActiveButton, getButtons } from "../../store/button/selectors";
import { changeActiveButton } from "../../store/button/actions";

const ButtonGroup = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const buttons = useSelector(getButtons);
  const activeButton = useSelector(getActiveButton);
  const dispatch = useDispatch();

  return (
    <MuiButtonGroup>
      {buttons.map((button) => (
        <Button
          variant={theme === "light" ? "contained" : "outlined"}
          color={activeButton === button ? "secondary" : "primary"}
          onClick={() => dispatch(changeActiveButton(button))}
        >
          {button}
        </Button>
      ))}
      <Button varial="contained" onClick={toggleTheme}>
        Toggle theme
      </Button>
    </MuiButtonGroup>
  );
};

export default ButtonGroup;
