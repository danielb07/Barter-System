import React from 'react'
import {Text, View, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity} from 'react-native'
import {Header} from 'react-native-elements'
import firebase from 'firebase'
import db from '../config'
export default class ExchangeScreen extends Component{
    constructor(){
        super();
        this.state = ({
            
            itemName:'',
            Description:''
        })
    }
    

    AddItemRequest = (item, description) =>{
        db.collection('item_request').add({
            "itemName":item,
            "decription":description,
        })
    }
    render(){
        return(
            <View>
                <Header
                centerComponent={{text:"Exchange Properties", style:{color:'#90A5A9',fontSize:20,fontWeight:"bold"}}}
                backgroundColor="#eaf8fe"/>
               <KeyboardAvoidingView style={styles.keyBoardStyle}>
                    <TextInput
                        style={styles.formTextInput}
                        placeholder="Item Name"
                        onChangeText={(text)=>{
                            this.setState({
                                itemName:text
                            })
                        }}
                    />

                    <TextInput
                        style={styles.formTextInput}
                        placeholder="Description"
                        onChangeText={(text)=>{
                            this.setState({
                                Description:text
                            })
                        }}
                    />

                    <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{
                        this.AddItemRequest(this.state.itemName,this.state.Description)
                    }}>
                        <Text>
                            Request
                        </Text>
                    </TouchableOpacity>

               </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create9({
    formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10,
      },
      keyBoardStyle : {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
      },
      button:{
          width:'75%',
          height:50,
          justifyContent:'center',
          alignItems:'center',
          borderRadius:10,
          shadowColor:'#000',
          shadowOffset:{
              width:0,
              height:8,
          },
          shadowOpacity:0.44,
          shadowRadius:10.32,
          elevation:16,
          marginTop:20
      },
})