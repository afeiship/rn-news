/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Alert,
  WebView,
  StatusBar,
  Image,
  Share,
  ActivityIndicator,
  Settings,
  View
} from 'react-native';

import {
  Container,
  Content,
  H1,
  H2,
  Header,
  Footer,
  FooterTab,
  Button,
  Left,
  Body,
  Title,
  Icon,
  Card,
  CardItem,
  Grid,
  Col,
  Row,
  CheckBox,
  List,
  ListItem
} from 'native-base';

import {row,col} from 'react-native-styles-flexbox-grid';
import SK from 'react-native-stylekit';
import PTRView from 'react-native-pull-to-refresh';
import Config from 'react-native-config'


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
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#f00'
  },
  h50: {
    height: 50
  },
  tc: {
    textAlign: 'center'
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
  _refresh() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 2000)
    });
  }

  _onPress = e => {
    Alert.alert(
      'Alert Title',
      'sdfsdf'+Config.API_URL,
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  };

  _onPress1 = e => {
    Share.share({
      message: 'A framework for building native apps using React',
      url: 'http://facebook.github.io/react-native/',
      title: 'React Native'
    }, {
      dialogTitle: 'Share React Native website',
      excludedActivityTypes: [
        'com.apple.UIKit.activity.PostToTwitter'
      ],
      tintColor: 'green'
    })
    .then(this._showResult)
    .catch((error) => this.setState({result: 'error: ' + error.message}));
  };

  render() {
    const items = ['Simon Mignolet', 'Nathaniel Clyne', 'Dejan Lovren', 'Mama Sakho', 'Emre Can'];
    return (

      <Container>
        <Header>
          <Body>
          <Title>Native Base</Title>
          </Body>
        </Header>

        <PTRView onRefresh={this._refresh}>

          <Content>
            <Text style={[styles.welcome]}>Hello Native Base!</Text>
            <Button full success onPress={this._onPress1}>
              <Icon name='home'/>
              <Text style={{color: '#fff'}}>Show Toast</Text>
            </Button>
            <Button full>
              <Text style={{color: '#fff'}}>Native Base button</Text>
            </Button>
            <List dataArray={items}
                  renderRow={(item) =>
                    <ListItem>
                      <Text>{item}</Text>
                    </ListItem>
                  }>
            </List>

            <Card>
              <CardItem header>
                <Text>NativeBase</Text>
              </CardItem>
              <CardItem>
                <Body>
                <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                       style={{width: 300, height: 300}}/>
                </Body>
              </CardItem>
              <CardItem footer>
                <Text>GeekyAnts</Text>
              </CardItem>
            </Card>

            <ListItem>
              <CheckBox checked={true}/>
              <Body>
              <Text>Daily Stand Up</Text>
              </Body>
            </ListItem>
            <ListItem>
              <CheckBox checked={false}/>
              <Body>
              <Text>Discussion with Client</Text>
              </Body>
            </ListItem>

            <View style={[{backgroundColor: '#EEE', height: 100}, row.$, row.center]}>
              <Text style={[{backgroundColor: '#635DB7'}, col.$, SK.tc, SK.c_red]}>
                <Icon name='home'/>
              </Text>
              <Text style={[{backgroundColor: '#00CE9F'}, col.span33, SK.tc]}  onPress={this._onPress} >
                <Icon name='ios-menu' style={{ color:'#fff'}}/>
              </Text>
            </View>

          </Content>
        </PTRView>
        <Footer>
          <FooterTab>
            <Text>Footer Here!</Text>
          </FooterTab>
        </Footer>
      </Container>

    );
  }
}


AppRegistry.registerComponent('RnNews', () => RnNews);
