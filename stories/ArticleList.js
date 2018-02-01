import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ArticleList from '../src/component/ArticleList';
// import LoginScreen from '../src/component/LoginScreen';

storiesOf('ArticleList', module)
  .add('default', () => (
    <ArticleList />
  ));
