import React, { Component } from 'react';
import {View,Text,StyleSheet, ListItem, FlatList, TouchableOpacity} from 'react-native'
import firebase from 'firebase';
import db from '../config'

export default class HomeScreen extends Component{
    constructor(){
        super()
        this.state = {
            Request:[]
        }
        this.requestRef = null;
    }
    
    KeyExtractor =(item,index) => item.toString()

    RenderItem =({item, i})=>{
        return(
            <ListItem
            key={i}
            title={item.itemName}
            subtitile={item.description}
            titleStyle={{color:'black', fontWeight:'bold'}}
            rightElement={
                <TouchableOpacity style={styles.button}>
                    <Text style={{color:'#ffff'}}>View</Text>
                </TouchableOpacity>
            }
            bottomDivider
            />
        )
    }
    
    AllRequest = () =>{
        this.requestRef = db.collection("bookRequests")
        .onSnapshot ((snapshot)=>{
            var allRequest = snapshot.docs.map(document => document => document());
            this.setState({
                Request:allRequest
            })
        })
    }
    render(){
        return(
            <View>
                {
                    this.state.Request.length === 0
                    ?(
                        <View style={{flex:1, fontSize:20, justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontSize:20}}>List of all Request</Text>
                        </View>
                    )
                    
                    :(
                        <FlatList
                        keyExtractor={this.KeyExtractor}
                        renderItem={this.RenderItem}
                        data={this.state.allRequest}/>
                    )
                }
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button:{
        width:100,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#ff5722",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8
         }
      }
})