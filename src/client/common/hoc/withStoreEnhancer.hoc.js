import React, { Component } from 'react';
import { object } from 'prop-types';

const withStoreEnhancer = ({ reducerName, reducer, middleware }) => (WrappedComponent) => {
  class Extended extends Component {
    componentDidMount() {
      if (reducerName && reducer) {
        this.context.store.injectReducer(reducerName, reducer);
      }
      if (middleware) {
        this.context.store.injectMiddleware(middleware);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  Extended.contextTypes = {
    store: object,
  };

  return Extended;
};

export default withStoreEnhancer;
