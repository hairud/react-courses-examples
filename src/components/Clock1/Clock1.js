import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { padNumber } from "../../helpers/pad";

const Clock1 = () => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const clockInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(clockInterval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const paddedHours = padNumber(hours);
  const paddedMinutes = padNumber(minutes);
  const paddedSeconds = padNumber(seconds);

  return (
    <Grid container direction="column" alignItems="center">
      <Typography>Функциональный компонент</Typography>
      <Typography>
        {paddedHours}:{paddedMinutes}:{paddedSeconds}
      </Typography>
    </Grid>
  );
};

export default Clock1;
