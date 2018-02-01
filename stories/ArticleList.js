import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import ArticleList from '../src/component/ArticleList';
// import LoginScreen from '../src/component/LoginScreen';

const articles = [
  {
    id: 'article0',
    title: '게시글 제목',
    createdAt: 1517453812176,
    nickName: '김승하',
  },
  {
    id: 'article1',
    title: '게시글 제목 2',
    createdAt: 1517453812176,
    nickName: '김승하',
  },
];

const articlesWithLink = articles.map(article => ({
  ...article,
  itemProps: {
    as: 'a',
    href: 'https://google.com',
  },
}), // 객체
);

storiesOf('ArticleList', module)
  .add('default', () => (
    <ArticleList articles={articles} />
  ))
  .add('link', () => (
    <ArticleList articles={articlesWithLink} />
  ));
