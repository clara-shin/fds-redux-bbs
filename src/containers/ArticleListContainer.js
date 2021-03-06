import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchArticleList } from '../ducks/articleList';
import withLoading from '../hocs/withLoading';

import ArticleList from '../component/ArticleList';


const ArticleListWithLoading = withLoading(ArticleList);

class ArticleListContainer extends Component {
  static defaultProps = {
    onMount: () => { },
  }

  componentDidMount() {
    this.props.onMount();
  }

  render() {
    const { onMount, ...rest } = this.props;
    return (
      <ArticleListWithLoading {...rest} />
    );
  }
}

export default connect(
  // mapStateToProps
  state => ({
    articles: state.articleList.articles,
    loading: state.articleList.loading,
  }),
  // mapDispatchToProps
  dispatch => ({
    onMount: () => {
      dispatch(fetchArticleList());
    },
  }),
)(ArticleListContainer);
