import React, { PureComponent } from "react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";

import initializeLibraries from "./util/libInitializer";

import "./App.css";

export default class App extends PureComponent {
  componentWillMount() {
    initializeLibraries();
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <div>hello world</div>
      </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object
};
