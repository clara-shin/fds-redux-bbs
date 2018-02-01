import React, { Component } from 'react';
import LoginScreen from '../component/LoginScreen';
import * as firebase from 'firebase';
import { Redirect } from 'react-router-dom';
// 구글로그인버튼 누르면 구글로그인 실행


export default class LoginScreenContainer extends Component {
  state = {
    redirectToList: false,

  }
  handleGooleLogin = async () => {
  // 로그인이 완료되면 리다이렉트컴포넌트 실행(선택적실행)
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
    this.setState({
      redirectToList: true,
    });
  }


  render() {
    if (this.state.redirectToList) {
      return (
        <Redirect to="/list" />
      );
    }
    return (
      <LoginScreen onGoogleLogin={this.handleGooleLogin} />
    );
  }
}
