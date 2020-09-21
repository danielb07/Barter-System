import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';

import firebase from 'firebase'

export default class CustomSideBar extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <DrawerItems {...this.props}/>
            
                <View style={{flex:1, justifyContent:'flex-end',paddingBottom:30}}>
                    <TouchableOpacity
                    style={{justifyContent:'center', padding:10, height:30, width:'100%'}}
                    onPress={()=>{
                        this.props.navigation.navigate('Welcome')
                        firebase.auth().signOut()
                    }}>
                        <Text>LogOut</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
} 
