import React from "react"
import { View,StyleSheet,Text,StatusBar } from "react-native";


export default function ProfileScreen(){

    return(
        <View>


            <StatusBar backgroundColor="#ffa600"/>
        
                
            
        </View>
    );
}

const styles=StyleSheet.create({
    container:{

        flex:1,
        
    },

    top:{
        backgroundColor:"#ffa600",
        padding:15,
    },

    Text:{
        padding:25,
    },

});