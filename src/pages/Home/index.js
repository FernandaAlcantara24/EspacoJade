import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Platform, Dimensions, Pressable } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { Items } from '../../component/Clothes/Database';
import Clothes from '../../component/Clothes';
import { auth } from '../../firebase.config';
import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';

const windowWidth = Dimensions.get('window').width;

export default function Home() {
    const navigation = useNavigation();
    const currentUser = auth.currentUser;
    if(currentUser != null){
       
    } else {
        alert('É necessario estar logado para utilizar este recurso!')
        navigation.goBack()
    }

    function logout(){
        signOut(auth)
        .then(()=>{
            alert('Você desconectou-se do sistema!');
            navigation.navigate('Login');
        })
    }

    return (
        
        <View style={styles.container}>    

            <View style={styles.header}>

                <View style={styles.button}>
                <Pressable onPress={logout}>
                    <Text style={styles.buttonText}>Sair</Text>
                </Pressable>
                </View>


                <Text style={styles.logo}>
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
            <ScrollView showsVerticalScrollIndicator={false}>
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
    button: {
        width: 50,
        top:-30,
        paddingVertical: 10,
        borderRadius: 100,
        backgroundColor: '#eb248b',
        marginVertical: 10,
        marginLeft:-70
        
      },
      buttonText: {
        color: '#fff',
        fontFamily: 'Poppins_400Regular',
        fontSize: 10,
        textAlign: 'center',

      },
      logo:{
        fontFamily: 'Parisienne_400Regular',
         color: '#eb248b',
         fontSize: 40,
         paddingLeft: 5,
         textAlign:'center',
         marginLeft:-150

      },
});
