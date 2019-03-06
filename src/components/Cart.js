import React, { Component } from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Icon } from 'native-base';
import Shirt from '../Assets/Images/ladies_shirt.jpg'

export default class Cart extends Component {

  state = {
    iconBackground:"white",
    iconBorder:"#42C2BF",
    iconColor:"#42C2BF",
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:"white",}}>
      {/* Delivery icons */}
        <View style={{marginTop:30,width:"100%",alignItems: 'center',}}>
          <View style={{width:"80%",flexDirection:"row",alignItems:"center",justifyContent: 'center',marginTop:10}}>
             <TouchableOpacity>
                <View style={{flexDirection:'row',backgroundColor:"white",width:40,height:40,borderRadius:50,alignItems: 'center',justifyContent: 'center',borderWidth:0.7,borderColor:"silver"}}>
                    <View style={{backgroundColor:this.state.iconBackground,width:30,height:30,borderRadius:50,alignItems: 'center',justifyContent: 'center',borderWidth:2,borderColor: this.state.iconBorder,}}>
                       <Icon name="cart" style={{fontSize: 15,color:this.state.iconColor}} />
                    </View>  
                </View> 
             </TouchableOpacity>
             <View style={{backfaceVisibility:'visible',backgroundColor: 'white',width:60,height:15,borderTopWidth:1,borderBottomWidth:1,borderColor:"silver",marginLeft:-2,marginRight:-2}}>
             </View>
             <TouchableOpacity>
                <View style={{flexDirection:'row',backgroundColor:"white",width:40,height:40,borderRadius:50,alignItems: 'center',justifyContent: 'center',borderWidth:0.7,borderColor:"silver"}}>
                    <View style={{backgroundColor:"silver",width:30,height:30,borderRadius:50,alignItems: 'center',justifyContent: 'center',borderWidth:2,borderColor:"silver",}}>
                       <Icon name="location-on" type="MaterialIcons" style={{fontSize: 15,color:"white"}} />
                    </View>  
                </View> 
             </TouchableOpacity>
             <View style={{backgroundColor: 'white',width:60,height:15,borderTopWidth:1,borderBottomWidth:1,borderColor:"silver",marginLeft:-2,marginRight:-2}}>
             </View>
             <TouchableOpacity>
                <View style={{flexDirection:'row',backgroundColor:"white",width:40,height:40,borderRadius:50,alignItems: 'center',justifyContent: 'center',borderWidth:0.7,borderColor:"silver"}}>
                    <View style={{backgroundColor:"silver",width:30,height:30,borderRadius:50,alignItems: 'center',justifyContent: 'center',borderWidth:2,borderColor:"silver",}}>
                       <Icon name="dollar-sign" type="FontAwesome5" style={{fontSize: 15,color:"white"}} />
                    </View>  
                </View> 
             </TouchableOpacity>
             <View style={{backgroundColor: 'white',width:60,height:15,borderTopWidth:1,borderBottomWidth:1,borderColor:"silver",marginLeft:-2,marginRight:-2}}>
             </View>
             <TouchableOpacity>
                <View style={{flexDirection:'row',backgroundColor:"white",width:40,height:40,borderRadius:50,alignItems: 'center',justifyContent: 'center',borderWidth:0.7,borderColor:"silver"}}>
                    <View style={{backgroundColor:"silver",width:30,height:30,borderRadius:50,alignItems: 'center',justifyContent: 'center',borderWidth:2,borderColor: "silver",}}>
                       <Icon name="flag" style={{fontSize: 15,color:"white"}} />
                    </View>  
                </View> 
             </TouchableOpacity>
          </View>
        </View>

        {/* Delivery Product */}
        <View>
           <View style={{width:"95%",margin:10,marginTop:30,flexDirection:"row"}}>
              <View style={{flexGrow:1,alignItems:"flex-start"}}>
                 <Text style={{fontSize:20,color:"black"}}>Total Price:</Text>
              </View>
              <View style={{flexGrow:1,alignItems:"flex-end",justifyContent:"center"}}>
                  <Text style={{color:"#42C2BF",fontSize:15}}>$176.00</Text>
              </View>
           </View>
           <View style={{flexDirection:"row",width:'100%',borderBottomWidth:0.5,borderTopWidth:0.5,borderColor:"silver",height:150}}>
                  <View style={{marginTop:10,marginLeft:10,width:100,}}>
                     <Image style={{width:100,height:130,borderRadius:10,}} source={Shirt} />
                  </View>
                  <View style={{marginTop:10,marginLeft:10,flexGrow:2,height:130,}}>
                     <Text style={{color:"black",fontSize:15}}>
                        Stitch Detail Tunic Dress
                     </Text>
                     <Text style={{color:"black",fontSize:20,marginTop:10}}>
                        $88.00
                     </Text>
                     <View style={{width:'100%',alignItems:'flex-end',justifyContent:"flex-end",height:65}}>
                        <Icon name="trash-alt" type="FontAwesome5" style={{fontSize:15,}} />
                     </View>
                  </View>
                  <View style={{marginTop:10,marginLeft:10,flexGrow:1,backgroundColor: 'red',}}>

                  </View>
               </View>
        </View>
      </View>
    );
  }
}
