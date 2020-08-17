import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class Intro extends Component {
  render() {
    return (
      <ScrollView style={styles.MasterView}>
        <Text style={styles.TitleText}>What is API?</Text>
        <Text style={styles.DetailText}>
          An application programming interface (API) is a computing interface which defines
           interactions between multiple software intermediaries. It defines the kinds of calls 
           or requests that can be made, how to make them, the data formats that should be used, 
           the conventions to follow, etc. It can also provide extension mechanisms so that users 
           can extend existing functionality in various ways and to varying degrees. An API can 
           be entirely custom, specific to a component, or it can be designed based on an industry 
           standard to ensure interoperability. Through information hiding, APIs enable modular 
           programming, which allows users to use the interface independently of the implementation.         
        </Text>
          
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  MasterView: {
    flex: 1,
    padding: 10,
    margin: 25,
    paddingVertical: 20
  },
  TitleText:{
    fontSize: 30,
    fontWeight: "bold",
    color: '#1666DB',
    textDecorationLine: 'underline',
    marginBottom: 10
  },
  DetailText:{
    fontSize: 20,
    fontWeight: "normal",
    justifyContent: "center"
  }
});