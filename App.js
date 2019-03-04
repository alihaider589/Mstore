/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import {createBottomTabNavigator,createDrawerNavigator,createAppContainer} from 'react-navigation';
import Home from './src/components/Home';
import Categories from './src/components/Categories';
import Search from './src/components/Search';
import Cart from './src/components/Cart';
import Account from './src/components/Account';
import Icon from 'react-native-vector-icons/Ionicons'
import HomeIcon from './src/Assets/Icons/Home.png';
import Menu from './src/Assets/Icons/Menu.png'

// const BottomTab = createBottomTabNavigator({
//   Home:{
//     screen:Home,
//     navigationOptions:{
//       tabBarIcon:<Image source={HomeIcon}/>,
//       tabBarLabel:() => null
//     }
//   },
//   Categories:{
//     screen:Categories,
//     navigationOptions:{
//       tabBarIcon: ({tintColor}) => (
//       <Icon mame="ios-home" color={tintColor} size={24} />
//       ),
//       tabBarLabel:() => null
//     }
//   },
//   Search:{
//     screen:Search,
//     navigationOptions:{
//       tabBarIcon:<Icon name="home" iconStyle={{color:"black"}} />
//     } 
//   },
//   Cart:{
//     screen:Cart,
//     navigationOptions:{
//       tabBarIcon:<Icon name="home" iconStyle={{color:"black"}} />
//     }
//   },
//   Account:{
//     screen:Account,
//     navigationOptions:{
//       tabBarIcon:<Icon name="home" iconStyle={{color:"black"}} />
//     }
//   }
// },
// {
//   activeTintColor:"green"
// }
// )

// const AppStack = createAppContainer(BottomTab);

export default class App extends Component{
  render() {
    return (
      <Home />
    );
  }
}