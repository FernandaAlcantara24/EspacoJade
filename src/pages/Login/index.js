import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { auth } from '../../firebase.config'; // Importe 'auth' diretamente do firebase.config

import { signInWithEmailAndPassword } from 'firebase/auth'; // Importe 'signInWithEmailAndPassword' da forma correta

const LoginApp = () => {
  const navigation = useNavigation();
  const [userMail, setUserMail] = useState('');
  const [userPass, setUserPass] = useState('');

  function userLogin(){
    signInWithEmailAndPassword(auth, userMail, userPass)
      .then((userCredential) =>{
        const user = userCredential.user;
        navigation.navigate('Home'); {/* Já transferi para react-navigation, pórem não sei se vai funcionar */}
      })
      .catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      })
  }

  return (
    <View style={{flex:1}}>

    <ImageBackground
    
    source={require('../../assets/background.png')}
      style={styles.background}>

      <View>
      <Image
          style={styles.logo}
          source={require('../../assets/logo-removebg-preview.png')}
          resizeMode="contain"
        />
      </View>

      <View style={styles.form}>
        <View style={styles.inputs}>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="black"
            keyboardType='email-address'
            autoCapitalize='none'
            autoComplete='email'
            value={userMail}
            onChangeText={setUserMail}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="black"
            autoCapitalize='none'
            secureTextEntry
            value={userPass}
            onChangeText={setUserPass}
          />
          <TouchableOpacity 
          onPress={() => navigation.navigate('ReplacePass')}>
          <Text 
          style={styles.light}
          
          ><Text style={styles.link3}>Esqueceu sua senha?</Text></Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity 
        style={styles.button}
        onPress={userLogin}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={() => navigation.navigate('NewUser')}>
        <Text style={styles.link}>Não tem uma conta? <Text style={styles.link2}>Inscrever-se</Text></Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
      
    </View>
    
  );
};

const styles = StyleSheet.create({
  form: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
    marginTop: '60%'
  },
  logo: {
    top: -100,
    width: 100,
    height: 100,
    marginVertical: 20,
  },
  inputs: {
    marginTop: -40,
    width: '100%',
    
  },
  input: {
    width: '100%',
    top:-50,
    paddingVertical: 18,
    paddingHorizontal: 18,
    marginVertical: 7,
    borderRadius: 100,
    backgroundColor: 'rgba(250,200,200,0.2)',
    color: 'black',
  },
  light: {
    textAlign: 'right',
    color: '#fff',
    top: -40
    
  },
  link: {
    color: 'black',
    textDecorationLine: 'none',
    top:-180,  
  },
  link2: {
      color: '#eb248b',
      textDecorationLine: 'underline',
      top: -180,
  },
  link3: {
    color: 'black',
    textDecorationLine: 'underline',
    top:-180,
   
  },
  footer: {
    position: 'absolute',
    bottom: -100,
    left: 0,
    right: 0,
    padding: 20,
    alignItems: 'center',
  },
  button: {
    width: '100%',
    top: -195,
    paddingVertical: 13,
    borderRadius: 100,
    backgroundColor: '#eb248b',
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Poppins_400Regular',
    fontSize: 18
  },
  background:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',

  },
});

export default LoginApp;
