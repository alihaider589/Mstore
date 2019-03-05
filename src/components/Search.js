import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity,StyleSheet,ScrollView } from 'react-native';
import { Icon } from 'native-base';
import Modal from 'react-native-modal';
import { Chip } from 'react-native-paper';
import {Slider} from 'react-native-elements';

export default class Search extends Component {
  state = {
    isModalVisible: false,
    chipBackground1:"#F5F5F5",
    ChipBorderColor1:"#F5F5F5",
    ChipWidth1:1,
    chipBackground2:"#F5F5F5",
    ChipBorderColor2:"#F5F5F5",
    ChipWidth2:1,
    chipBackground3:"#F5F5F5",
    ChipBorderColor3:"#F5F5F5",
    ChipWidth3:1,
    chipBackground4:"#F5F5F5",
    ChipBorderColor4:"#F5F5F5",
    ChipWidth4:1,
    chipBackground5:"#F5F5F5",
    ChipBorderColor5:"#F5F5F5",
    ChipWidth5:1,
    chipBackground6:"#F5F5F5",
    ChipBorderColor6:"#F5F5F5",
    ChipWidth6:1,
    chipBackground7:"#F5F5F5",
    ChipBorderColor7:"#F5F5F5",
    ChipWidth7:1,
    chipBackground8:"#F5F5F5",
    ChipBorderColor8:"#F5F5F5",
    ChipWidth8:1,
    chipBackground9:"#F5F5F5",
    ChipBorderColor9:"#F5F5F5",
    ChipWidth9:1,
    chipBackground10:"#F5F5F5",
    ChipBorderColor10:"#F5F5F5",
    ChipWidth10:1,
    chipBackground11:"#F5F5F5",
    ChipBorderColor11:"#F5F5F5",
    ChipWidth11:1,

    sliderValue:0,
  };

    ChipSelected1 = () =>{
      if (this.state.ChipBorderColor1 == "#F5F5F5")
      {
        this.setState({
          chipBackground1:"white",
          ChipWidth1:1,
          ChipBorderColor1:"#42C2BF"
        })
      }
      if (this.state.ChipBorderColor1 == "#42C2BF")
            {
              this.setState({
                chipBackground1:"#F5F5F5",
                ChipWidth1:0,
                ChipBorderColor1:"#F5F5F5"
              })
            }
    }
      
      ChipSelected2 = () =>{
        if (this.state.ChipBorderColor2 == "#F5F5F5")
        {
          this.setState({
            chipBackground2:"white",
            ChipWidth2:1,
            ChipBorderColor2:"#42C2BF"
          })
        }
        if (this.state.ChipBorderColor2 == "#42C2BF")
      {
        this.setState({
          chipBackground2:"#F5F5F5",
          ChipWidth2:0,
          ChipBorderColor2:"#F5F5F5"
        })
      }
    }
      
        ChipSelected3 = () =>{
          if (this.state.ChipBorderColor3 == "#F5F5F5")
          {
            this.setState({
              chipBackground3:"white",
              ChipWidth3:1,
              ChipBorderColor3:"#42C2BF"
            })
          }
          if (this.state.ChipBorderColor3 == "#42C2BF")
          {
            this.setState({
              chipBackground3:"#F5F5F5",
              ChipWidth3:0,
              ChipBorderColor3:"#F5F5F5"
            })
          }
        }
          ChipSelected4 = () =>{
            if (this.state.ChipBorderColor4 == "#F5F5F5")
            {
              this.setState({
                chipBackground4:"white",
                ChipWidth4:1,
                ChipBorderColor4:"#42C2BF"
              })
            }
            if (this.state.ChipBorderColor4 == "#42C2BF")
            {
              this.setState({
                chipBackground4:"#F5F5F5",
                ChipWidth4:0,
                ChipBorderColor4:"#F5F5F5"
              })
            }
          }
          
            ChipSelected5 = () =>{
              if (this.state.ChipBorderColor5 == "#F5F5F5")
              {
                this.setState({
                  chipBackground5:"white",
                  ChipWidth5:1,
                  ChipBorderColor5:"#42C2BF"
                })
              }
              if (this.state.ChipBorderColor5 == "#42C2BF")
            {
              this.setState({
                chipBackground5:"#F5F5F5",
                ChipWidth5:0,
                ChipBorderColor5:"#F5F5F5"
              })
            }
            }
              ChipSelected6 = () =>{
                if (this.state.ChipBorderColor6 == "#F5F5F5")
                {
                  this.setState({
                    chipBackground6:"white",
                    ChipWidth6:1,
                    ChipBorderColor6:"#42C2BF"
                  })
                }
                if (this.state.ChipBorderColor6 == "#42C2BF")
            {
              this.setState({
                chipBackground6:"#F5F5F5",
                ChipWidth6:0,
                ChipBorderColor6:"#F5F5F5"
              })
            }
              }

                ChipSelected7 = () =>{
                  if (this.state.ChipBorderColor7 == "#F5F5F5")
                  {
                    this.setState({
                      chipBackground7:"white",
                      ChipWidth7:1,
                      ChipBorderColor7:"#42C2BF"
                    })
                  }
                  if (this.state.ChipBorderColor7 == "#42C2BF")
                  {
                    this.setState({
                      chipBackground7:"#F5F5F5",
                      ChipWidth7:0,
                      ChipBorderColor7:"#F5F5F5"
                    })
                  }
                }   
 
                ChipSelected8 = () =>{
                  if (this.state.ChipBorderColor8 == "#F5F5F5")
                  {
                    this.setState({
                      chipBackground8:"white",
                      ChipWidth8:1,
                      ChipBorderColor8:"#42C2BF"
                    })
                  }
                  if (this.state.ChipBorderColor8 == "#42C2BF")
                  {
                    this.setState({
                      chipBackground8:"#F5F5F5",
                      ChipWidth8:0,
                      ChipBorderColor8:"#F5F5F5"
                    })
                  }
                }   

                ChipSelected9 = () =>{
                  if (this.state.ChipBorderColor9 == "#F5F5F5")
                  {
                    this.setState({
                      chipBackground9:"white",
                      ChipWidth9:1,
                      ChipBorderColor9:"#42C2BF"
                    })
                  }
                  if (this.state.ChipBorderColor9 == "#42C2BF")
                  {
                    this.setState({
                      chipBackground9:"#F5F5F5",
                      ChipWidth9:0,
                      ChipBorderColor9:"#F5F5F5"
                    })
                  }
                }   

                ChipSelected10 = () =>{
                  if (this.state.ChipBorderColor10 == "#F5F5F5")
                  {
                    this.setState({
                      chipBackground10:"white",
                      ChipWidth10:1,
                      ChipBorderColor10:"#42C2BF"
                    })
                  }
                  if (this.state.ChipBorderColor10 == "#42C2BF")
                  {
                    this.setState({
                      chipBackground10:"#F5F5F5",
                      ChipWidth10:0,
                      ChipBorderColor10:"#F5F5F5"
                    })
                  }
                }   

                ChipSelected11 = () =>{
                  if (this.state.ChipBorderColor11 == "#F5F5F5")
                  {
                    this.setState({
                      chipBackground11:"white",
                      ChipWidth11:1,
                      ChipBorderColor11:"#42C2BF"
                    })
                  }
                  if (this.state.ChipBorderColor11 == "#42C2BF")
                  {
                    this.setState({
                      chipBackground11:"#F5F5F5",
                      ChipWidth11:0,
                      ChipBorderColor11:"#F5F5F5"
                    })
                  }
                }   
  

  _toggleModal = () =>{
    this.setState({ isModalVisible: !this.state.isModalVisible });
    }

  render() {
    return (
      <View style={{flex:1,backgroundColor: "white",width:"100%",alignItems:"center"}}>
        <View style={{width:"80%",borderRadius:20,marginTop: 50,height:40,backgroundColor:"rgba(220,220,220,0.4)",flexDirection:"row",justifyContent: 'center', elevation:5}}>
          <View style={{width:"10%",height:40,justifyContent: 'center',alignItems:"flex-end"}}>
          <Icon name="search" type="FontAwesome" style={{fontSize: 20,color:"black"}} />
          </View>  
          <TextInput style={{width:"70%",justifyContent: 'center',}} placeholder="Search Product By Name" placeholderTextColor="rgba(0,0,0,0.7)" selectionColor="#42C2BF">
          </TextInput>
          <View style={{width:"20%",height:40,justifyContent: 'center',alignItems:"center",}}>
            <View style={{height:20,borderLeftWidth:0.6,borderColor: 'silver',}}>
              <TouchableOpacity onPress={this._toggleModal}>
                <Icon name="tune" type="MaterialIcons" style={{fontSize: 20,marginLeft: 5,color:"silver"}} />
              </TouchableOpacity>
            </View>
          </View> 
        </View>

        <Modal animationInTiming={700} animationOutTiming={300} backdropOpacity={0} isVisible={this.state.isModalVisible} style={style.BottomModal}>
              <ScrollView>
                <View style={{backgroundColor: "white",margin:10}}>
                     <View style={{alignItems:"flex-start",marginTop:10}}>
                          <TouchableOpacity onPress={this._toggleModal}>
                              <Icon name="arrow-back" type="MaterialIcons" style={{marginRight: 20,}}/>
                          </TouchableOpacity>
                     </View>
                     <Text style={{fontSize:25,color:"black",marginLeft:10,marginTop:20}}>
                       Filters
                     </Text>
                     <Text style={{ marginLeft: 10,marginTop:20}}>
                        <Text style={{color:"black",}}>Product Catalog</Text>
                     </Text>
                     <View style={{flexDirection:"row"}}>
                      <Chip onPress={this.ChipSelected1} style={{margin:5,backgroundColor: this.state.chipBackground1, borderWidth: this.state.ChipWidth1, borderColor:this.state.ChipBorderColor1,}}><Text style={{color:"#42C2BF"}}>Men</Text></Chip>
                      <Chip onPress={this.ChipSelected2} style={{margin:5,backgroundColor: this.state.chipBackground2, borderWidth: this.state.ChipWidth2, borderColor:this.state.ChipBorderColor2,color:"#42C2BF"}}><Text style={{color:"#42C2BF"}}>Shirt</Text></Chip>
                      <Chip onPress={this.ChipSelected3} style={{margin:5,backgroundColor: this.state.chipBackground3, borderWidth: this.state.ChipWidth3, borderColor:this.state.ChipBorderColor3,color:"#42C2BF"}}><Text style={{color:"#42C2BF"}}>T-Shirt</Text></Chip>
                     </View>
                     <View style={{flexDirection:"row"}}>
                      <Chip onPress={this.ChipSelected4} style={{margin:5,backgroundColor: this.state.chipBackground4, borderWidth: this.state.ChipWidth4, borderColor:this.state.ChipBorderColor4,color:"#42C2BF"}}><Text style={{color:"#42C2BF"}}>Bags</Text></Chip>
                      <Chip onPress={this.ChipSelected5} style={{margin:5,backgroundColor: this.state.chipBackground5, borderWidth: this.state.ChipWidth5, borderColor:this.state.ChipBorderColor5,color:"#42C2BF"}}><Text style={{color:"#42C2BF"}}>Hoodies</Text></Chip>
                      <Chip onPress={this.ChipSelected6} style={{margin:5,backgroundColor: this.state.chipBackground6, borderWidth: this.state.ChipWidth6, borderColor:this.state.ChipBorderColor6,color:"#42C2BF"}}><Text style={{color:"#42C2BF"}}>Music</Text></Chip>
                      <Chip onPress={this.ChipSelected7} style={{margin:5,backgroundColor: this.state.chipBackground7, borderWidth: this.state.ChipWidth7, borderColor:this.state.ChipBorderColor7,color:"#42C2BF"}}><Text style={{color:"#42C2BF"}}>Shoes</Text></Chip>
                     </View>
                     <Text style={{ marginLeft: 10,marginTop:20}}>
                        <Text style={{color:"black",}}>Product Tags</Text>
                     </Text>
                     <View style={{flexDirection:"row"}}>
                      <Chip onPress={this.ChipSelected8} style={{margin:5,backgroundColor: this.state.chipBackground8, borderWidth: this.state.ChipWidth8, borderColor:this.state.ChipBorderColor8}}><Text style={{color:"#42C2BF"}}>White</Text></Chip>
                      <Chip onPress={this.ChipSelected9} style={{margin:5,backgroundColor: this.state.chipBackground9, borderWidth: this.state.ChipWidth9, borderColor:this.state.ChipBorderColor9}}><Text style={{color:"#42C2BF"}}>Feature</Text></Chip>
                      <Chip onPress={this.ChipSelected10} style={{margin:5,backgroundColor: this.state.chipBackground10, borderWidth: this.state.ChipWidth10, borderColor:this.state.ChipBorderColor10}}><Text style={{color:"#42C2BF"}}>Hunk</Text></Chip>
                      <Chip onPress={this.ChipSelected11} style={{margin:5,backgroundColor: this.state.chipBackground11, borderWidth: this.state.ChipWidth11, borderColor:this.state.ChipBorderColor11}}><Text style={{color:"#42C2BF"}}>Grey</Text></Chip>
                     </View>
                     <View style={{width:"100%",alignItems:"center",marginTop:20}}>
                       <View style={{flexDirection:"row",width:"100%"}}>
                          <View style={{width:"80%",alignItems:"center"}}>
                            <Text style={{color:"#42C2BF",fontSize:20,}}>${this.state.sliderValue.toFixed(2)}</Text>
                          </View>
                          <Text style={{fontSize:15,width:"20%"}}>$4000</Text>
                       </View>
                       <Slider style={{width:"80%",}} value={this.state.sliderValue} onValueChange={value => this.setState({ sliderValue:value })} maximumValue={4000} minimumTrackTintColor="#42C2BF" thumbTintColor="#42C2BF" minimumValue={0} />
                     </View>
                     <View style={{alignItems:'center',marginTop:10,width:"100%"}}>
                       <TouchableOpacity style={style.Button} activeOpacity = {0.8} >
                         <Text style={{color:"white",fontSize:17}}>Filter</Text>
                       </TouchableOpacity>
                       <TouchableOpacity activeOpacity = {0.8} >
                         <Text style={{color:"#42C2BF",marginTop:10}}>Clear Filter</Text>
                       </TouchableOpacity>
                     </View>
                </View>
              </ScrollView>  
        </Modal>
      </View>
    );
  }
}

const style = StyleSheet.create({
  BottomModal: {
    justifyContent: "flex-start",
    height:"100%",
    margin: 0,
  },
  Button:{
    borderRadius:20,
    backgroundColor: '#42C2BF',
    alignItems:"center",
    justifyContent: 'center',
    height:40,
    width:"90%",
    marginTop:10,
    borderRadius:20
}
})
