import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native'

import firebase from 'firebase'
import database from 'config.js'

export default class SignupLoginScreen extends React.Component{
  constructor(){
    super()
    this.state = {
      emailId:'',
      passWord:''
    }
  }

  UserLogin = (email,password) =>{
    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
      return Alert.alert("User Login Successful")
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    });
    
  }

  userSignUp = (email, password) =>{
    firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{
      return Alert.alert(" User successfully signedUp")
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    });
  }

  render(){
    return(
      <View>
        <TextInput
        style={styles.loginBox}
        placeholder="abc@example.com"
        keyboardType="email-address"
        onTextInput={(text)=>{
          this.setState({
            emailId:text
          })
        }}/>

        <TextInput
        style={styles.loginBox}
        placeholder="Password"
        secureTextEntry={true}
        onTextInput={(text)=>{
          this.setState({
            passWord:text
          })
        }}
        />

        <TouchableOpacity
        style={styles.button}
        onPress={()=>{this.UserLogin(this.state.emailId,this.state.passWord)}}>
          LogIn
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.button}
        onPress={()=>{this.userSignUp(this.state.emailId,this.state.passWord)}}>
          SignUp
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  loginBox:{
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor : '#ff8a65',
    fontSize: 20,
    margin:10,
    paddingLeft:10
  },
  button:{
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#ff9800",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    marginBottom:20,
    marginTop:20
    },
})