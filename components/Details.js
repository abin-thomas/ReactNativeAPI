import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class Details extends Component {
  render() {
    return (
      <ScrollView style={styles.MasterView}>
        <Text style={styles.TitleText}>Steps in react native API call</Text>
        <Text style={styles.DetailText}>
          API calls are used for the purpose of accessing data from a server. In react native it is mainly carried out with 
          the help of fetch().
        </Text>
        <Text style={styles.TitleText}>
          Basic Structure of fetch()
        </Text>

        <Text style={styles.DetailText}>
          {"fetch('Web URL HERE', { \n"+
            "method: 'GET'\n"+
           " //Request Type \n"+
        "})\n"+
        ".then((response) => response.json())\n"+
        "//If response is in json then in success\n"+
        ".then((responseJson) => {\n"+
            "//Success\n"+ 
           " console.log(responseJson);\n"+
        "})\n"+
        "//If response is not in json then in error\n"+
        ".catch((error) => {\n"+
            "//Error\n"+ 
            "console.error(error);\n"+
        "})"
        }</Text>

        
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