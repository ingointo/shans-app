import React from "react"
import { View,StyleSheet,Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { FAB } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';


export default function Home(){

    return(
        <View>
            <View style={styles.top} >
                
            </View>

            <View style={styles.shans}>
                <Text style={styles.shanstext}>Shan's erp biz</Text>
                <FontAwesome name="bell-o" size={24} color="black" />

            </View>
            <FAB
                style={styles.fab}
                icon={()=><MaterialIcons name="message" size={24} color="white" />}
                onPress={() => console.log('FAB pressed')}
            />
        
                
            
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

    shanstext:{
        fontSize:20,
    },

    shans:{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-around',
        
        
    },

    fab: {
        position: 'absolute',
        left: 25,
        bottom: -600,
        backgroundColor: '#ffa600', // Set the background color for the FAB
        borderRadius: 30, // Set the borderRadius to make the button round (half of the width/height)
        width: 60, // Set the width of the FAB
        height: 60, // Set the height of the FAB
        alignItems: 'center',
        justifyContent: 'center',
        },

});