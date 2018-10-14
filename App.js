import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import Header from './components/Header';
import PageView from './components/Pages';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height
    };
    Dimensions.addEventListener("change", (e) => {
      this.setState(e.window);
    });
  }
  

  render () {

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'rgb(4,4,4)',
        alignItems: 'center',
        justifyContent: 'center',
        height: this.state.height
      },
      bodyContainer: {
        flex: 1,
        top: 70,
        paddingTop: 5,
      },
      headerContainer: {
        position: 'absolute',
        flex: 1,
        top: 0,
        height: 72,
        alignSelf: 'stretch',
        paddingTop: 20,
        paddingLeft: 12,
        paddingRight: 12,
        flexDirection: 'row',
        backgroundColor: 'white'
      },
      scrollContainer: {
        flexGrow: 1,
        backgroundColor: 'rgb(4,4,4)',
        height: this.state.height
      },
      textContainer: {
        textAlign: 'center',
        color: 'white'
      },
      videoContainer: {
        flex: 0,
        backgroundColor: 'rgb(4,4,4)',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 0
      }
    });

    return (
        <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Header />
        </View>
          <ScrollView style={styles.bodyContainer}>
            <View style={styles.videoContainer}>
                 <PageView />
            </View>
              <Text style={styles.textContainer}>Welcome to CampMinder! {"\n"}This is a test of applying WebView components in a React Native application. </Text>
          </ScrollView>
        </View>
    )
  }
}
