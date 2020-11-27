import React from "react";

import Grid from "@material-ui/core/Grid";

import Clock1 from "./components/Clock1";
import Clock2 from "./components/Clock2";
import ButtonGroup from "./components/ButtonGroup";

const App = () => (
  <Grid container direction="column" alignItems="center">
    <Grid
      container
      direction="row"
      wrap="nowrap"
      justify="space-around"
      alignItems="center"
    >
      <Clock1 />
      <Clock2 />
    </Grid>

    <ButtonGroup />
  </Grid>
);

export default App;
