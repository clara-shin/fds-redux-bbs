import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import LoginScreen from '../src/component/LoginScreen';

storiesOf('LoginScreen', module)
  .add('default', () => (
    <LoginScreen onGoogleLogin={action('onGoogleLogin')} />
  ));
