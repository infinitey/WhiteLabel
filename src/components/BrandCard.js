import React, { Component } from 'react';
import {Image, Text, View} from 'react-native';

import Styles from '../Styles.js';

export default class BrandCard extends Component {

  render() {
    return(
      <Image style={Styles.brandCard} source={require('../images/brandIMG.jpg')}>
        <View style={{flex: 5}}>
        </View>
        <View style={{flex: 1, flexDirection:'row'}}>
          <View style= {{flex: 4, padding: 8, backgroundColor: '#000000'}}>
            <Text style={Styles.brandCardText}>Inside</Text>
          </View>
          <View style= {{flex: 6}}></View>
        </View>
      </Image>
    );
  }
}
