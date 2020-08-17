
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Details from './components/Details';
import Intro from './components/Intro';
import TrialApp from './components/TrialApp';



const Tabs = createBottomTabNavigator();
import { Ionicons } from '@expo/vector-icons';


export default function App() {
  return (
    <NavigationContainer>
      <AppTabs />
    </NavigationContainer>
  );
}

function AppTabs() {
  return (
    <Tabs.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'md-home';
        } else if(route.name === 'Intro') {
          iconName = 'md-color-wand';
        } else if(route.name === 'Details') {
          iconName = 'md-book';
        }else {
          iconName = 'md-attach';
        }

        return <Ionicons name={ iconName } size={ 26 } color={ '#000000' }/>
      },
    })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
    }} >
        <Tabs.Screen name="Home" component={ Home } />
        <Tabs.Screen name="Intro" component={ Intro } />
        <Tabs.Screen name="Details" component={ Details } />
        <Tabs.Screen name="TrialApp" component={ TrialApp } />
      </Tabs.Navigator>
  )
}
function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.HomeText}>
        Hello, This is a simple tutorial about how to successfully implement a API fetch using react
         native. You can see the various sections of this tutorial by clicking on the button below.
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  HomeText: {
    fontSize: 24,
    color: '#1666DB',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  }
});