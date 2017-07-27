/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Alert,
  WebView,
  StatusBar,
  ActivityIndicator,
  Settings,
  View
} from 'react-native';

import { Row, Col, Box } from 'react-native-styles-flexbox-grid';
import stylesBase from 'react-native-styles-base';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 50,
  },
  bd1: {
    borderWidth:2,
    borderStyle:'solid',
    borderColor:'#f00'
  },
  h50:{
    height: 50
  },
  tc: {
    textAlign:'center'
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});




export default class RnNews extends Component {
  state = {
    animating: false,
    value:'test'
  };

  _click1 = e => {
    // ActivityIndicator.show();
    // Alert.alert(
    //   'Alert Title',
    //   'My Alert Msg',
    //   [
    //     {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
    //     {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    //     {text: 'OK', onPress: () => console.log('OK Pressed')},
    //   ],
    //   { cancelable: false }
    // )

    this.setState({ animating: !this.state.animating })
  };

  _set_set = e => {
    Settings.set({
      value:'tes12t'
    })
  };
  _set_get = e => {
    this.setState({
      value: Settings.get('value')
    })
  };
  render() {
    return (
      <View>
        <Text style={[styles.welcome]}>Hello RN!</Text>
        <View style={[Row.$,styles.h50, styles.bd1,Row.center]}>
          <View style={[Col.$]}>
            <Text style={[stylesBase.tl, stylesBase.c_3]}>Col1-value: {this.state.value}</Text>
          </View>
          <View style={[Col.$]} >
            <Text onPress={this._click1} style={[styles.tc, stylesBase.c_6]}>Toggle</Text>
          </View>
          <View style={[Col.$]}>
            <Text style={[stylesBase.tr, stylesBase.c_9]} onPress={this._set_set}>Set-set</Text>
          </View>

          <View style={[Col.$]}>
            <Text style={[stylesBase.tr, stylesBase.c_9]} onPress={this._set_get}>Set-get</Text>
          </View>

          <ActivityIndicator 
                style={[styles.centering]} 
                size="large"
                color="#0000ff"
                animating={this.state.animating} />
        </View>
      </View>
    );
  }
}


AppRegistry.registerComponent('RnNews', () => RnNews);
