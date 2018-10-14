import React, { Component } from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  WebView,
  ScrollView,
  Button
} from 'react-native';

class WebViewPages extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentIndex: 0
    }

    this.incrementPage = this.incrementPage.bind(this);
    this.decrementPage = this.decrementPage.bind(this);
  }

    incrementPage = () => {
      let prev = this.state.currentIndex;
      let curr = prev + 1;

      this.setState({ currentIndex: curr});
    }

    decrementPage = () => {
      let prev = this.state.currentIndex;
      let curr = prev - 1;

      this.setState({ currentIndex: curr});
    }

    pageQueue = ['https://campminder.com/', 'https://campminder.com/case-study/online-registration/', 'https://campminder.com/case-study/directors-mobile-app/'];
  

    render() {
      const pageWidth = Dimensions.get('window').width;
      const pageHeight = pageWidth * 2;
  
      const styles = StyleSheet.create({
        pageContainer: {
          width: pageWidth,
          height: pageHeight,
          backgroundColor: 'rgb(255,255,255)',
          paddingTop: 0
        },
        button: {
          backgroundColor: 'white',
        },
        buttonContainer: {
          margin: 20,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }
      })
  
      return (
        <ScrollView>
          <WebView
            source={{ uri: this.pageQueue[this.state.currentIndex] }}
            style={styles.pageContainer}
          />
          <View style={styles.buttonContainer}>
            <Button style={styles.button}
            title="Previous Page"
            color="white"
            onPress={this.decrementPage}/>
            <Button style={styles.button}
            title="Next Page"
            color="white"
            onPress={this.incrementPage} />
          </View>
        </ScrollView>
      )
    }

  }



export default class PageView extends Component {

  render() {
    const pageWidth = Dimensions.get('window').width;
    const pageHeight = pageWidth * (9 / 16);

    const styles = StyleSheet.create({
      pageContainer: {
        width: pageWidth,
        height: pageHeight,
        backgroundColor: 'rgb(255,255,255)',
        paddingTop: 0
      }
    })

    return (
      <View>
        <WebViewPages />
      </View>
    )
  }

}
