import React, { Component } from 'react';
import {
  Button,
  Icon,
  Grid,
  Segment,
  Header
} from 'semantic-ui-react';
import styled from 'styled-components';

const FullHeightGrid = styled(Grid)`
  height:100vh;
`;


export default class LoginScreen extends Component {
  render() {
    return (
      <FullHeightGrid centered verticalAlign="middle">
        <Grid.Column style={{ width:'280px' }}>

          <Segment stacked textAlign='center'>
            <Header as='h1'>로그인</Header>
            <Button color='google plus' fluid>
              <Icon name='google plus' /> 구글로 로그인
            </Button>
            <Button color='twitter' fluid>
              <Icon name='twitter' /> Twitter
            </Button>
          </Segment>
        </Grid.Column>
      </FullHeightGrid>
    )
  }
}
