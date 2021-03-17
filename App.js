import React, { Component } from 'react';
import Routes from './app/routes/Routes';
import { Provider } from 'react-native-paper';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import {theme} from './app/core/theme';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: true,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ loading: false });
  }

  render() {
    if(this.state.loading){
      return (
        <AppLoading />
      );
    }
    return(
      <Provider theme={theme}>
        <Routes />
      </Provider>
    );
  }
};