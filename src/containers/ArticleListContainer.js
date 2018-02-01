import { connect } from 'react-redux';

import ArticleList from '../component/ArticleList';
import { fecthArticleList } from '../ducks/articleList';

import withLoading from '../hocs/withLoading';

export default connect(
  // mapStateProps
  state => ({
    articles: state.articleList.articles,
  }),
  // mapDispatchToProps
  dispatch => ({
    onMount: () => {
      dispatch(fecthArticleList())
    },
  }),
)(ArticleList);
