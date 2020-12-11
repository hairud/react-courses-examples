import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Provider as StoreProvider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import Grid from "@material-ui/core/Grid";

import rootReducer from "./store";
import Clock1 from "./components/Clock1";
import Clock2 from "./components/Clock2";
import ButtonGroup from "./components/ButtonGroup";
import ThemeContext from "./utils/ThemeContext";

const logger = (store) => (next) => (action) => {
  const { type, ...restPayload } = action;
  console.log({ type, payload: restPayload });
  return next(action);
};

const logger2 = (store) => (next) => (action) => {
  console.log("logger2");
  return next(action);
};

const store = createStore(
  rootReducer,
  applyMiddleware(logger, logger2)
);

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
      <StoreProvider store={store}>
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
      </StoreProvider>
    </BrowserRouter>
  );
};

export default App;
