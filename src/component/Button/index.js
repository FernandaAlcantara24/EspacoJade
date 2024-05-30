import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Button() {
    const navigation = useNavigation();

    const irParaFavoritos = () => {
        navigation.navigate('Favorite'); 
    };
    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnContainer} onPress={irParaFavoritos}>
                <Text style={styles.title}>IR PARA CARRINHO</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnContainer: {
        width: '90%',
        height: 50,
        backgroundColor: '#eb248b',
        borderRadius: 5,
        marginVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        color: '#FFF'
    }
});
