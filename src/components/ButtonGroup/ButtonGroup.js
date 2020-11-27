import React from "react";

import Button from "@material-ui/core/Button";
import { ButtonGroup as MuiButtonGroup } from "@material-ui/core";

const buttons = ["First", "Second", "Third"];

const ButtonGroup = () => {
  const [activeButton, setActiveButton] = React.useState("First");

  return (
    <MuiButtonGroup>
      {buttons.map((button) => (
        <Button
          variant="contained"
          color={activeButton === button ? "secondary" : "primary"}
          onClick={() => setActiveButton(button)}
        >
          {button}
        </Button>
      ))}
    </MuiButtonGroup>
  );
};

export default ButtonGroup;
