import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';

const winWidth = Dimensions.get('window').width;

class Header extends Component {
  constructor() {
    super();
    this.state = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height
    };
  }


  render() {

    Dimensions.addEventListener("change", (e) => {
      this.setState({width: e.window.width});
    });

    this.width = this.state.width;

    styles = StyleSheet.create({
      headerContainer: {
        position: 'absolute',
        alignSelf: 'stretch',
        top: 0,
        height: 75,
        width: this.width,
        paddingTop: 20,
        paddingLeft: 5,
        paddingRight: 5,
        flexDirection: 'row',
        backgroundColor: 'white'
      }
    
    })

    return (
      <View style={styles.headerContainer}>
        <Image 
        style={{flex:1, height: 50, width: 100,resizeMode: 'contain'}}
        source={require('../img/CampMinder_logo.png')}
        />
      </View>
    )
  }
}

export default Header;
