import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Platform, Dimensions } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { Items } from '../../component/Clothes/Database';
import Clothes from '../../component/Clothes';

const windowWidth = Dimensions.get('window').width;

export default function Home() {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ fontFamily: 'Parisienne_400Regular', color: '#eb248b', fontSize: 40, paddingLeft: 8 }}>
                    <Image
                        source={require('../../assets/logo.png')}
                        style={{ width: 55, height: 55 }}
                        resizeMode="contain"
                    />
                    Espaço Jade
                </Text>
                <TouchableOpacity style={{ position: 'absolute', right: 20, bottom: 30, alignSelf: 'center' }}>
                    <AntDesign name="hearto" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>TODOS</Text>
                <Text style={[styles.text, { color: '#cececf' }]}>-</Text>
                <Text style={[styles.text, { color: '#cececf' }]}>FEMININO</Text>
                <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: 'center' }}>
                    <MaterialIcons
                        name='filter-list'
                        size={24}
                        color='#eb248b'
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.line} />
            <ScrollView showsVerticalScrollIndicator='false'>
            <View style={styles.productsContainer}>
                {Items.map((products, index) =>
                    <Clothes products={products} key={index} />
                )}
            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
    header: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: 10,
        paddingTop: 45,

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
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%'
    },
    text: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 18,
        marginHorizontal: '1%'
    },
    line: {
        borderBottomColor: '#d8d8d8',
        borderBottomWidth: 1,
    },
    productsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 10,
    },
});
