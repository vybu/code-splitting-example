import React, { Component } from 'react';

const loadable = (loadComponent) => {
  class Loadable extends Component {
    state = {
      component: null,
    };

    componentDidMount() {
      loadComponent().then(module => this.setState({ component: module.default }));
    }

    render() {
      const LoadedComponent = this.state.component;
      return LoadedComponent ? <LoadedComponent /> : null;
    }
  }

  return Loadable;
};

export default loadable;
