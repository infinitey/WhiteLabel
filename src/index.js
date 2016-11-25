import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, Picker, AppState } from 'react-native';
import Styles from './Styles.js';

export default class App extends Component {

  /*constructor(props) {
    super(props);

    this.state = {
      //attrName: value,
    }
  }*/

  render() {
    return (
      <View style={Styles.mainLayout}>
        <View style={Styles.header}>
          <Text style={Styles.headerText}>
            HAHAHAH
          </Text>
        </View>
        <View style={Styles.content}>
          <Image style={Styles.brandCard} source={require('./images/brandIMG.jpg')}>
             <Text style={Styles.brandCardText}>Inside</Text>
          </Image>
          <Image style={Styles.brandCard} source={require('./images/brandIMG.jpg')} />        
        </View>
      </View>
    );
  }

}
