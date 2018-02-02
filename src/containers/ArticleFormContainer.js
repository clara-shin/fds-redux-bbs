import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import ArticleForm from '../component/ArticleForm';
import { createArticle } from '../ducks/article';

class ArticleFormContrainer extends Component {
  render() {
    const { success, ...rest } = this.props;
    if (success) {
      return (
        <Redirect to="/list" />
      );
    }
    return (
      <ArticleForm {...rest} />
    );
  }
}


export default connect(
  // mapStateToProps
  state => ({
    creating: state.article.creating,
    success: state.article.success,
    errorMessage: state.article.errorMessage,
  }),
  // mapDispatchToProps
  dispatch => ({
    onSubmit: ({ title, content }) => {
      dispatch(createArticle({ title, content }));
    },
  }),
)(ArticleFormContrainer);
