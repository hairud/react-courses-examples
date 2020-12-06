import React, { Component } from "react";

import ThemeContext from "../../utils/ThemeContext";

const withTheme = (WrappedComponent) =>
  class extends Component {
    render() {
      return (
        <ThemeContext.Consumer>
          {({ theme, toggleTheme }) => (
            <WrappedComponent
              theme={theme}
              toggleTheme={toggleTheme}
              {...this.props}
            />
          )}
        </ThemeContext.Consumer>
      );
    }
  };

export default withTheme;
