import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";

import Clock1 from "./components/Clock1";
import Clock2 from "./components/Clock2";
import ButtonGroup from "./components/ButtonGroup";
import ThemeContext from "./utils/ThemeContext";

const App = () => {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      return;
    }

    setTheme("light");
  };

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
          <Link to="/buttons">Кнопки</Link>
          <Link to="/">Главная</Link>
          <Switch>
            <Route exact path="/">
              <div>Main</div>
            </Route>
            <Route path="/buttons">
              <ButtonGroup />
            </Route>
          </Switch>
        </Grid>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
};

export default App;
