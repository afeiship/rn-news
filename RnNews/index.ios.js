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
  Toast,
  List,
  ListItem
} from 'native-base';

import {Row as row, Col as col} from 'react-native-styles-flexbox-grid';

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
  render() {
    const items = ['Simon Mignolet', 'Nathaniel Clyne', 'Dejan Lovren', 'Mama Sakho', 'Emre Can'];
    return (
      <Container>
        <Header>
          <Body>
          <Title>Native Base</Title>
          </Body>
        </Header>

        <Content>
          <Text style={[styles.welcome]}>Hello Native Base!</Text>
          <Button full success onPress={()=> Toast.show({
            text: 'Wrong password!',
            position: 'bottom',
            buttonText: 'Okay'
          })}>
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
                     style={{width: 300, height: 300}} />
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>

          <ListItem>
            <CheckBox checked={true} />
            <Body>
            <Text>Daily Stand Up</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} />
            <Body>
            <Text>Discussion with Client</Text>
            </Body>
          </ListItem>

          <View style={[{backgroundColor: '#EEE', height: 100}, row.$, row.center]}>
            <View style={[{backgroundColor: '#635DB7'}, col.$, col.span30]}>
              <Icon name='home'/>
            </View>
            <View style={[{backgroundColor: '#00CE9F'}, col.$, col.span20]}>
              <Icon name='ios-menu'/>
            </View>
          </View>

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
