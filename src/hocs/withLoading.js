import React, { Component } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import { LOADING } from '../ducks/articleList';

export default function withLoading(WrappedComponent) {
  return class extends Component {
    render() {
      if(this.props.loading) {
        return(
          <Dimmer active>
            <Loader />
          </Dimmer>
        )
      }else {
        return(
          <WrappedComponent {...this.props} />
        )
      }
    }
  }
}