import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ArticleForm from '../src/component/ArticleForm';

storiesOf('ArticleForm', module)
  .add('default', () => (
    <ArticleForm onSubmit={action('onSubmit')} />
  ))// action의 호출결과는 함수다
  .add('error message', () => (
    <ArticleForm errorMessage="필드는 모두 채워야 합니다." />
  ))
  .add('creating', () => (
    <ArticleForm creating />
  ));
