import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ToastAndroid } from 'react-native';

export default function Button(props) {
    
 return (
   <View style={styles.container}>

    <TouchableOpacity style={styles.btnContainer} onPress={() => {Linking.openURL('https://api.whatsapp.com/send?phone=5521971490546&text=Oi%20')}}>
    <Text style={styles.title}>COMPRAR</Text>
    </TouchableOpacity>

   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnContainer:{
        width: '90%',
        height: 50,
        backgroundColor: '#eb248b',
        borderRadius: 5,
        marginVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 20,
        color: '#FFF'
    }
});