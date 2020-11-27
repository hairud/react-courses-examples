import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { padNumber } from "../../helpers/pad";

class Clock2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.clockInterval = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockInterval);
  }

  render() {
    const { time } = this.state;
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const paddedHours = padNumber(hours);
    const paddedMinutes = padNumber(minutes);
    const paddedSeconds = padNumber(seconds);

    return (
      <Grid container direction="column" alignItems="center">
        <Typography>Классовый компонент</Typography>
        <Typography>
          {paddedHours}:{paddedMinutes}:{paddedSeconds}
        </Typography>
      </Grid>
    );
  }
}

export default Clock2;
