import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import ThemeContext from "../../utils/ThemeContext";
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
      <ThemeContext.Consumer>
        {({ theme }) => (
          <Typography variant={theme === "light" ? "h1" : "h4"}>
            {paddedHours}:{paddedMinutes}:{paddedSeconds}
          </Typography>
        )}
      </ThemeContext.Consumer>
    </Grid>
  );
};

export default Clock1;
