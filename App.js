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
import HomeComponent from './src/components/Home';
import CategoriesComponent from './src/components/Categories';
import SearchComponent from './src/components/Search';
import CartComponent from './src/components/Cart';
import AccountComponent from './src/components/Account';
import Icon from 'react-native-vector-icons/Ionicons'
import HomeIcon from './src/Assets/Icons/Home.png';
import Menu from './src/Assets/Icons/Menu.png';
import {BottomNavigation} from 'react-native-paper';


const Home = () => <HomeComponent />;

const Categories = () => <CategoriesComponent />;

const Search = () => <SearchComponent />;

const Cart = ()=><CartComponent />;

const Account = ()=><AccountComponent />;


export default class App extends React.Component {

  state = {
    index: 0,
    routes: [
      { key: 'Home', icon: 'home',color:'white',},
      { key: 'Categories', icon: 'grid-on',color:'white',},
      { key: 'Search', icon: "search",color:'white'},
      { key: 'Cart', icon:'shopping-cart', color:'white',},
      { key: 'Account', icon: 'person-outline',color:'white'},
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    Home: Home,
    Categories: Categories,
    Search: Search,
    Cart: Cart,
    Account: Account,
  },
 );

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
        activeColor='#42C2BF'
        inactiveColor="silver"
        shifting={false}
        barStyle={{backgroundColor: "white",}}
      >
      </BottomNavigation>
    );
  }
}