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
  ActivityIndicator,
  Settings,
  View
} from 'react-native';

import {
  Container,
  Content,
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
  List,
  ListItem
} from 'native-base';


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
  state = {
    animating: false,
    value: 'test'
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

    this.setState({animating: !this.state.animating})
  };

  _set_set = e => {
    console.log('set cache.!');
    Settings.set({
      value: 'tes12t-fei'
    })
  };
  _set_get = e => {
    this.setState({
      value: Settings.get('value')
    })
  };

  render() {
    var items = ['Simon Mignolet', 'Nathaniel Clyne', 'Dejan Lovren', 'Mama Sakho', 'Emre Can'];

    return (
      <Container>
        <Header>
          <Body>
          <Title>Native Base</Title>
          </Body>
        </Header>

        <Content>
          <Text style={[styles.welcome]}>Hello Native Base!</Text>
          <Button full success>
            <Icon name='home'/>
            <Text style={{color: '#fff'}}>Native Base button</Text>
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
          <Grid>
            <Col style={{backgroundColor: '#635DB7', height: 200}}>
              <Icon name='home'/>
            </Col>
            <Col style={{backgroundColor: '#00CE9F', height: 200}}>
              <Icon name='ios-menu'/>
            </Col>
          </Grid>

        </Content>
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
