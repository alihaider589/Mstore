import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Icon } from 'native-base';

export default class Cart extends Component {

  state = {
    iconBackground:"white",
    iconBorder:"#42C2BF",
    iconColor:"#42C2BF",
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:"white",}}>
        <View style={{marginTop:20,width:"100%",alignItems: 'center',}}>
          <View style={{width:"80%",flexDirection:"row",alignItems:"center",justifyContent: 'center',}}>
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
      </View>
    );
  }
}
