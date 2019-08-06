import React, { PureComponent } from "react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";

import BedBanks from "./modules/BedBanks/BedBanks";
import { ThemeProvider } from "./static/themes/themes";
import initializeLibraries from "./util/libInitializer";

import "./App.css";

export default class App extends PureComponent {
  componentWillMount() {
    initializeLibraries();
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <ThemeProvider>
          <BedBanks />
        </ThemeProvider>
      </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object
};
