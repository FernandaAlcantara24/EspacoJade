import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Platform, Dimensions, ScrollView } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function Clothes({ products }) { // Products fornece os dados do produto necessários para renderizar a interface 
    const navigation = useNavigation();
    return (
        
        
        <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('Detail', { ...products })}>
            <Image
                source={products.image}
                style={styles.productImg}
            />

            <View style={styles.textContainer}>
                <Text>{products.productName}</Text>
                <Text>R${products.productPrice}</Text>
            </View>
        </TouchableOpacity>
        
        
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        width: (windowWidth - 30) / 2, // Dividir a largura da tela em duas colunas
        marginBottom: 20,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
            },
            android: {
                elevation: 2,
            },
        }),
    },
    textContainer: {
        alignItems: 'center',
        marginTop: '2%',
        fontFamily: 'Poppins_400Regular'
    },
    productImg: {
        width: '100%',
        height: 180,
        borderRadius: 4
    },
});
