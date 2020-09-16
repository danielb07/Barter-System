import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native'

import firebase from 'firebase'
import database from '../config.js'

export default class WelcomeScreen extends React.Component{
  constructor(){
    super()
    this.state = {
      emailId:'',
      passWord:'',
      comfirmPassword:'',
      phoneNumber:'',
      address:'',
      firstName:'',
      lastName:'',
      isModalVisible:'false'
    }
  }

  ShowModel = () =>{
    <Modal
    transparent={true}
    animationType="fade"
    visible={this.state.isModalVisible}>
      <View>
        <ScrollView style={{width:'100%'}}>
          <Text>Register</Text>
          <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
            <TextInput
            style={styles.formTextInput}
            placeholder="First Name"
            maxLength ={8}
            onChangeText={(text)=>{
            this.setState({
              firstName: text
            })
            }}/>

            <TextInput
            style={styles.formTextInput}
            placeholder="Last Name"
            maxLength={8}
            onChangeText={(text)=>{
              this.setState({
                lastName:text
              })
            }}/>

            <TextInput
            style={styles.formTextInput}
            placeholder="Phone Number"
            keyboardType={'numeric'}
            maxLength={10}
            onChangeText={(text)=>{
              this.setState({
                phoneNumber:text
              })
            }}/>

            <TextInput
            style={styles.formTextInput}
            placeholder="Address"
            multiline={true}
            onChangeText={(text)=>{
              this.setState({
                address:text
              })
            }}/>

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
            }}/>

              <View style={styles.modalBackButton}>
               <TouchableOpacity
                style={styles.registerButton}
                onPress={()=>
                  this.userSignUp(this.state.emailId, this.state.password, this.state.confirmPassword)
                }
              >
                <Text style={styles.registerButtonText}>Register</Text>
                </TouchableOpacity>
              </ View>
              <View style={styles.modalBackButton}>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={()=>this.setState({"isModalVisible":false})}
                >
                <Text style={{color:'#ff5722'}}>Cancel</Text>
                </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </Modal>
  }

  UserLogin = (email,password) =>{
    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
      return Alert.alert("User Login Successful")
      this.props.navigation.navigate(BottomTabNavigation)
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    });
    
  }

  userSignUp = (emailId, password,confirmPassword) =>{
    if(password !== confirmPassword){
        return Alert.alert("password doesn't match, check your password.")
    }else{
      firebase.auth().createUserWithEmailAndPassword(emailId, password)
      .then(()=>{
        database.collection('User').add({
          first_name:this.state.firstName,
          lastName:this.state.lastName,
          contact:this.state.contact,
          address:this.state.address
        })
        return  Alert.aler(
             'User Added Successfully',
             '',
             [
               {text: 'OK', onPress: () => this.setState({"isModalVisible" : false})},
             ]
         );
      })
      .catch((error)=> {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage)
      });
    }
  }

  render(){
    return(
      <View style={styles.container}>
        {
          this.ShowModel()
        }
        <View style={{justifyContent: 'center',alignItems: 'center'}}>
          <Text style={styles.title}>Barter System</Text>
        </View>
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
          style={[styles.button,{marginBottom:20,marginTop:20}]}
          onPress={()=>{this.UserLogin(this.state.emailId,this.state.passWord)}}>
            LogIn
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={()=>this.setState({ isModalVisible:true})}
            >
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>

        </View>
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

  container:{
    flex:1,
    backgroundColor:'#F8BE85',
    alignItems: 'center',
    justifyContent: 'center'
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

    title :{
      fontSize:65,
      fontWeight:'300',
      paddingBottom:30,
      color : '#ff3d00'
    },

    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10
    },

    registerButton:{
      width:200,
      height:40,
      alignItems:'center',
      justifyContent:'center',
      borderWidth:1,
      borderRadius:10,
      marginTop:30
    },
    registerButtonText:{
      color:'#ff5722',
      fontSize:15,
      fontWeight:'bold'
    },
    KeyboardAvoidingView:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
})