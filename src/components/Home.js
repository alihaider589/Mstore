import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableOpacity,ScrollView,Image,ImageBackground,Alert } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
// import {Icon} from 'react-native-vector-icons/FontAwesome'
import Logo from '../Assets/Images/logo.png';
import Short from '../Assets/Images/short.png'
import Shirt from '../Assets/Images/shirt.png'
import Underwear from '../Assets/Images/underwear.png'
import GirlDress from '../Assets/Images/girldress.png'
import Socks from '../Assets/Images/socks.png'
import Shoes from '../Assets/Images/shoes.png'
import Music from '../Assets/Images/music.png'
import Girl1 from '../Assets/Images/girl1.jpg'
import Girl2 from '../Assets/Images/girl2.jpg'
import Girl3 from '../Assets/Images/girl4.jpg'
import MenBanner from '../Assets/Images/men.jpg'
import WomenBanner from '../Assets/Images/women.jpg'
import ShirtImage from '../Assets/Images/shirt.jpg';
import Tshirt from '../Assets/Images/black_shirt.jpg';
import Green from '../Assets/Images/green_shirt.jpg';
import Ladies from '../Assets/Images/ladies_shirt.jpg';
import White from '../Assets/Images/white_shirt.jpg';
import WhiteSecond from '../Assets/Images/white_shirt_second.jpg';

export default class Home extends Component {

  state={
    HeartColor1:"silver",
    HeartColor2:"silver",
    HeartColor3:"silver",
  }

  HeartColor1 = () =>{
    if(this.state.HeartColor1 == "silver")
    {
      this.setState({
        HeartColor1:"red"
      })
    }
    else{
      this.setState({
        HeartColor1:"silver"
      })
    }
  }

  HeartColor2= () =>{
    if(this.state.HeartColor2 == "silver")
    {
      this.setState({
        HeartColor2:"red"
      })
    }
    else{
      this.setState({
        HeartColor2:"silver"
      })
    }
  }

  HeartColor3 = () =>{
    if(this.state.HeartColor3 == "silver")
    {
      this.setState({
        HeartColor3:"red"
      })
    }
    else{
      this.setState({
        HeartColor3:"silver"
      })
    }
  }

  render() {
    return (
     <View style={{flex:1}}>
       {/* Header Start */}
        <View style={style.Header}>
          <View style={{
            alignItems:"flex-start",
            margin:10,
            width:'50%'
          }}>
          <TouchableOpacity>
            <Icon name="align-left" type="FontAwesome" />
          </TouchableOpacity>
          </View>
          <View style={{
            alignItems:"flex-end",
            margin:10,
            width:'40%'
          }}>
          <TouchableOpacity>
            <Icon name="th-large" type="FontAwesome" />
          </TouchableOpacity>
          </View>
        </View>
        {/* header End */}

        {/* Body start */}
          <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{marginLeft:10,marginTop:30}}>
                <Image source={Logo} style={{height:45,width:120}} />
                <Text style={{color:"black",marginTop:5}}>MONDAY 04 MAR</Text>
              </View>
              <ScrollView horizontal={true} style={{marginLeft:10,marginTop:20}} showsHorizontalScrollIndicator={false}>
                  <View>
                    <TouchableOpacity style={{alignItems: 'center',}} activeOpacity={0.8}>
                      <Image source={Short} style={{width:50,height:50}} />
                      <Text style={{fontSize:10,color:'black'}}>Men</Text>
                    </TouchableOpacity>  
                  </View>
                  <View style={{marginLeft:20}}>
                    <TouchableOpacity style={{alignItems: 'center',}} activeOpacity={0.8}>
                      <Image source={Shirt} style={{width:50,height:50}} />
                      <Text style={{fontSize:10,color:'black'}}>T-Shirts</Text>
                    </TouchableOpacity>  
                  </View>
                  <View style={{marginLeft:20}}>
                    <TouchableOpacity style={{alignItems: 'center',}} activeOpacity={0.8}>
                      <Image source={Underwear} style={{width:50,height:50}} />
                      <Text style={{fontSize:10,color:'black'}}>Clothing</Text>
                    </TouchableOpacity>  
                  </View>
                  <View style={{marginLeft:20}}>
                    <TouchableOpacity style={{alignItems: 'center',}} activeOpacity={0.8}>
                      <Image source={GirlDress} style={{width:50,height:50}} />
                      <Text style={{fontSize:10,color:'black'}}>Dresses</Text>
                    </TouchableOpacity>  
                  </View>
                  <View style={{marginLeft:20}}>
                    <TouchableOpacity style={{alignItems: 'center',}} activeOpacity={0.8}>
                      <Image source={Socks} style={{width:50,height:50}} />
                      <Text style={{fontSize:10,color:'black'}}>Posters</Text>
                    </TouchableOpacity>  
                  </View>
                  <View style={{marginLeft:20}}>
                    <TouchableOpacity style={{alignItems: 'center',}} activeOpacity={0.8}>
                      <Image source={Shoes} style={{width:50,height:50}} />
                      <Text style={{fontSize:10,color:'black'}}>Singles</Text>
                    </TouchableOpacity>  
                  </View>
                  <View style={{marginLeft:20}}>
                    <TouchableOpacity style={{alignItems: 'center',}} activeOpacity={0.8}>
                      <Image source={Music} style={{width:50,height:50}} />
                      <Text style={{fontSize:10,color:'black'}}>Music</Text>
                    </TouchableOpacity>  
                  </View>
              </ScrollView>

                {/* after icons */}

              <ScrollView horizontal={true} style={{marginLeft:10,marginTop:30}} showsHorizontalScrollIndicator={false}>
                  <View>
                    <TouchableOpacity style={{alignItems: 'center',}} activeOpacity={0.8}>
                      <ImageBackground source={Girl1} style={{width:250,height:250,alignItems:"flex-start"}}>
                        <View style={{alignItems:"flex-end",width:"100%"}}>
                          <TouchableOpacity onPress={this.HeartColor1}>
                            <Icon name='favorite-border' type="MaterialIcons" style={{fontSize:20,color:this.state.HeartColor1}} />
                          </TouchableOpacity>
                        </View>
                        <View style={{justifyContent: 'flex-end',height:"90%"}}>
                          <Text style={{fontSize:20,color:'black',fontWeight:"bold",marginLeft:5}}>Slitch Detail Tunic {"\n"}Dress</Text>
                          <Text style={{fontSize:15,color:'black',marginLeft:5,marginBottom:5}}>$88.0</Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>  
                  </View>
                  <View style={{marginLeft:10}}>
                    <TouchableOpacity style={{alignItems: 'center',}} activeOpacity={0.8}>
                      <ImageBackground source={Girl2} style={{width:250,height:250,alignItems:"flex-start"}}>
                        <View style={{alignItems:"flex-end",width:"100%"}}>
                          <TouchableOpacity onPress={this.HeartColor2}>
                            <Icon name='favorite-border' type="MaterialIcons" style={{fontSize:20,color:this.state.HeartColor2}} />
                          </TouchableOpacity>
                        </View>
                        <View style={{justifyContent: 'flex-end',height:"90%"}}>
                          <Text style={{fontSize:20,color:'black',fontWeight:"bold",marginLeft:5}}>Slitch Detail Tunic {"\n"}Dress</Text>
                          <Text style={{fontSize:15,color:'black',marginLeft:5,marginBottom:5}}>$88.0</Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>  
                  </View>
                  <View style={{marginLeft:10}}>
                    <TouchableOpacity style={{alignItems: 'center',}} activeOpacity={0.8}>
                      <ImageBackground source={Girl3} style={{width:250,height:250,alignItems:"flex-start"}}>
                        <View style={{alignItems:"flex-end",width:"100%"}}>
                          <TouchableOpacity onPress={this.HeartColor3}>
                            <Icon name='favorite-border' type="MaterialIcons" style={{fontSize:20,color:this.state.HeartColor3}} />
                          </TouchableOpacity>
                        </View>
                        <View style={{justifyContent: 'flex-end',height:"90%"}}>
                          <Text style={{fontSize:20,color:'black',fontWeight:"bold",marginLeft:5}}>Slitch Detail Tunic {"\n"}Dress</Text>
                          <Text style={{fontSize:15,color:'black',marginLeft:5,marginBottom:5}}>$88.0</Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>  
                  </View>
              </ScrollView>

          {/* after three images slider */}

              <View style={{marginTop:50}}>
                  <View>
                      <TouchableOpacity style={{width:'100%',alignItems:"center"}} activeOpacity={0.8}>
                        <Image source={MenBanner} style={{width:"90%", height:100,borderRadius:10}} />
                      </TouchableOpacity>
                  </View>
                  <View style={{marginTop:20}}>
                      <TouchableOpacity style={{width:'100%',alignItems:"center"}} activeOpacity={0.8}>
                        <Image source={WomenBanner} style={{width:"90%", height:100,borderRadius:10}} />
                      </TouchableOpacity>
                  </View>
              </View>

              {/* after 2 banners */}
              <View style={{flexDirection:'row',width:'100%',margin:10}}>
              <View style={{width:"70%",alignItems:"flex-start"}}>
                <Text style={{fontSize:20,color:"black"}}>Feature Products</Text>
              </View>
              <View style={{width:"20%",alignItems:"flex-end",justifyContent: 'center',}}>
                <Text style={{fontSize:10,color:"black",justifyContent: 'center'}}>Show all <Icon name="keyboard-arrow-right" type="MaterialIcons" style={{fontSize:20}} /></Text>
              </View>
              </View>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{marginLeft:10,marginTop:10}}>
                    <Image source={ShirtImage} style={{width:150, height:200}} />
                    <View style={{width:150}}>
                      <Text style={{color:"black",fontSize:12}}>Bermuda shorts by</Text>
                      <Text style={{color:"black",fontSize:12}}>Armani</Text>
                      <Text style={{color:"black",fontSize:10}}>$35.00</Text>
                    </View>
                </View>
                <View style={{marginLeft:10,marginTop:10}}>
                    <Image source={Green} style={{width:150, height:200}} />
                    <View style={{width:150}}>
                      <Text style={{color:"black",fontSize:12}}>Bermuda shorts by</Text>
                      <Text style={{color:"black",fontSize:12}}>Armani</Text>
                      <Text style={{color:"black",fontSize:10}}>$35.00</Text>
                    </View>
                </View>
                <View style={{marginLeft:10,marginTop:10}}>
                    <Image source={White} style={{width:150, height:200}} />
                    <View style={{width:150}}>
                      <Text style={{color:"black",fontSize:12}}>Bermuda shorts by</Text>
                      <Text style={{color:"black",fontSize:12}}>Armani</Text>
                      <Text style={{color:"black",fontSize:10}}>$35.00</Text>
                    </View>
                </View>
                <View style={{marginLeft:10,marginTop:10}}>
                    <Image source={WhiteSecond} style={{width:150, height:200}} />
                    <View style={{width:150}}>
                      <Text style={{color:"black",fontSize:12}}>Bermuda shorts by</Text>
                      <Text style={{color:"black",fontSize:12}}>Armani</Text>
                      <Text style={{color:"black",fontSize:10}}>$35.00</Text>
                    </View>
                </View>
                <View style={{marginLeft:10,marginTop:10}}>
                    <Image source={Tshirt} style={{width:150, height:200}} />
                    <View style={{width:150}}>
                      <Text style={{color:"black",fontSize:12}}>Bermuda shorts by</Text>
                      <Text style={{color:"black",fontSize:12}}>Armani</Text>
                      <Text style={{color:"black",fontSize:10}}>$35.00</Text>
                    </View>
                </View>
                <View style={{marginLeft:10,marginTop:10}}>
                    <Image source={Ladies} style={{width:150, height:200}} />
                    <View style={{width:150}}>
                      <Text style={{color:"black",fontSize:12}}>Bermuda shorts by</Text>
                      <Text style={{color:"black",fontSize:12}}>Armani</Text>
                      <Text style={{color:"black",fontSize:10}}>$35.00</Text>
                    </View>
                </View>
              </ScrollView>

          </ScrollView>
        {/* Body end */}
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