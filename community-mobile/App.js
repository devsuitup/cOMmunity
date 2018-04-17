import React from 'react';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import  Root from './src/Root';

import Colors from './constants/Colors';
import { LoadingScreen }  from './src/commons';
import { CachedFonts } from './helpers';
import store from './src/redux/store'

EStyleSheet.build(Colors);

export default class App extends React.Component {

  state = {
    assetsLoaded:false,
  }
  
  async _loadAssetAsync() {

    const fontAssets = CachedFonts([
      {montserrat: require('./assets/fonts/Montserrat-Regular.ttf')},
      {montserratBold: require('./assets/fonts/Montserrat-Bold.ttf')},
      {montserratLight: require('./assets/fonts/Montserrat-Light.ttf')},
      {montserratMedium: require('./assets/fonts/Montserrat-Medium.ttf')},
    ]);

    await Promise.all(fontAssets);

    // console.log('before timeout');
    // await new Promise(function(resolve, reject) { 
    //   setTimeout(() => {
    //       console.log('inside timeout');
    //       resolve();
    //   }, 10000)
    // });

    this.setState({ assetsLoaded: true });
  }

  componentDidMount() {
    this._loadAssetAsync();
  }

  render() {

    if (!this.state.assetsLoaded) 
      // return <AppLoading style={{ flex: 1 }}
      //     startAsync={this._loadAssetAsync}
      //     onFinish={() => this.setState({ assetsLoaded: true })}
      //     onError={console.warn}
      //   />
      return <LoadingScreen/>;
    
    return (
      <Provider store={store}>
        <Root />
      </Provider>);
  }

}
