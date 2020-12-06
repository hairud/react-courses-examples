import React from "react";

import Button from "@material-ui/core/Button";
import { ButtonGroup as MuiButtonGroup } from "@material-ui/core";

import ThemeContext from "../../utils/ThemeContext";

const buttons = ["First", "Second", "Third"];

const ButtonGroup = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext)
  const [activeButton, setActiveButton] = React.useState("First");

  return (
    <MuiButtonGroup>
      {buttons.map((button) => (
        <Button
          variant={theme === "light" ? "contained" : "outlined"}
          color={activeButton === button ? "secondary" : "primary"}
          onClick={() => setActiveButton(button)}
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
