import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableOpacity,Image,ScrollView,ImageBackground } from 'react-native';
import {Icon} from 'native-base';
import Logo from '../Assets/Images/logo.png';
import Man from '../Assets/Images/Category_man_banner.jpg';
import Man2 from '../Assets/Images/Category_man_banner2.jpg';
import Cloth from '../Assets/Images/Category_cloth_banner.jpg';
import Woman from '../Assets/Images/Category_woman_banner.jpg';
import Poster from '../Assets/Images/Category_Poster_banner.jpg';

export default class Categories extends Component {

  render() {
    return (
      <View style={{flex:1,width:"100%"}}>
        {/* Header */}
        <View style={style.Header}>
          <View style={{
            alignItems:"flex-start",
            margin:10,
            flexGrow: 1,
          }}>
            <TouchableOpacity>
              <Icon name="align-left" type="FontAwesome" />
            </TouchableOpacity>
          </View>
          <View style={{
            alignItems:"flex-start",
            margin:10,
            flexGrow: 1,
            justifyContent: 'center',
          }}>
            <TouchableOpacity>
              <Image source={Logo} style={{height:40,width:110}} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Header ends here */}

        <ScrollView style={{width:"100%"}}>
              <View style={{marginTop:20,width:"100%",alignItems:"center"}}>
                  <View style={{alignItems:"center",width:"100%"}}>
                      <TouchableOpacity style={{width:'100%',alignItems:"center"}} activeOpacity={0.8}>
                        <ImageBackground source={Man} imageStyle={{borderRadius:10}} style={{width:"97%", height:120,justifyContent: 'center',marginLeft:10,alignItems: 'center',}}>
                        <View style={{width:"90%",alignItems:"flex-start"}}>
                            <Text style={{color:"white",fontSize:25,marginRight:30}}>Men</Text>
                            <Text style={{color:"white",fontSize:10,marginRight:30}}>45 Products</Text>
                           </View>
                        </ImageBackground>
                      </TouchableOpacity>
                  </View>
                  <View style={{alignItems:"center",width:"100%",marginTop:20}}>
                      <TouchableOpacity style={{width:'100%',alignItems:"center"}} activeOpacity={0.8}>
                        <ImageBackground source={Woman} imageStyle={{borderRadius:10}} style={{width:"97%", height:120,justifyContent: 'center',marginLeft:10,alignItems:"center"}}>
                            <View style={{width:"90%",alignItems:"flex-end"}}>
                              <Text style={{color:"white",fontSize:25,marginRight:30}}>Women</Text>
                              <Text style={{color:"white",fontSize:10,marginRight:30}}>35 Products</Text>
                            </View>
                        </ImageBackground>
                      </TouchableOpacity>
                  </View>
                  <View style={{alignItems:"center",width:"100%",marginTop:20}}>
                      <TouchableOpacity style={{width:'100%',alignItems:"center"}} activeOpacity={0.8}>
                        <ImageBackground source={Man2} imageStyle={{borderRadius:10}} style={{width:"97%", height:120,justifyContent: 'center',marginLeft:10,alignItems:"center"}}>
                          <View style={{width:"90%",alignItems:"flex-start"}}>
                              <Text style={{color:"white",fontSize:25,marginRight:30}}>Music</Text>
                              <Text style={{color:"white",fontSize:10,marginRight:30}}>13 Products</Text>
                          </View>
                        </ImageBackground>
                      </TouchableOpacity>
                  </View>
                  <View style={{alignItems:"center",width:"100%",marginTop:20}}>
                      <TouchableOpacity style={{width:'100%',alignItems:"center"}} activeOpacity={0.8}>
                        <ImageBackground source={Poster} imageStyle={{borderRadius:10}} style={{width:"97%", height:120,justifyContent: 'center',marginLeft:10,alignItems:"center"}}>
                          <View style={{width:"90%",alignItems:"flex-end"}}>
                              <Text style={{color:"white",fontSize:25,marginRight:30}}>Poster</Text>
                              <Text style={{color:"white",fontSize:10,marginRight:30}}>78 Products</Text>
                          </View>
                        </ImageBackground>
                      </TouchableOpacity>
                  </View>
                  <View style={{alignItems:"center",width:"100%",marginTop:20}}>
                      <TouchableOpacity style={{width:'100%',alignItems:"center"}} activeOpacity={0.8}>
                        <ImageBackground source={Cloth} imageStyle={{borderRadius:10}} style={{width:"97%", height:120,justifyContent: 'center',marginLeft:10,alignItems: 'center',}}>
                          <View style={{width:"90%",alignItems:"flex-start"}}>
                              <Text style={{color:"white",fontSize:25,marginRight:30}}>Clothing</Text>
                              <Text style={{color:"white",fontSize:10,marginRight:30}}>12 Products</Text>
                          </View>
                        </ImageBackground>
                      </TouchableOpacity>
                  </View>
              </View>
        </ScrollView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  Header:{
    width:"100%",
    height:50,
    backgroundColor: 'white',
    flexDirection: 'row',
  }
})