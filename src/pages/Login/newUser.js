import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Text, View,TextInput, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { auth } from "../../firebase.config";
import { useNavigation } from "@react-navigation/native";

export default function NewUser(){
    const [userMail, setUserMail] = useState('');
    const [userPass, setUserPass] = useState('');
    const [userRePass, setUserRePass] = useState('');
    const navigation = useNavigation();
    
    function newUser(){
        if(userMail =='' || userPass == '' || userRePass == ''){
            alert('Todos os campos devem ser preenchido');
            return;
        }
        if(userPass !== userRePass){
            alert('As senhas não são iguais');
            return;
        }
        else{
            createUserWithEmailAndPassword(auth,userMail,userPass)
            .then ((UserCredential)=> {
                const user = UserCredential.user;
                alert('O Usuário ' + userMail + ' foi criado. Faça o login');
                navigation.goBack();
            })
            .catch((error)=> {
                const errorMessage = error.message;
                alert(errorMessage);
                navigation.goBack();
            });
        }
    }

    return(
        <View style={styles.form}>
            <Text style={styles.formTitle}>Novo Usuario</Text>
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
           <TextInput
            style={styles.input}
            placeholder="Repita Senha"
            placeholderTextColor="black"
            autoCapitalize='none'
            secureTextEntry
            value={userRePass}
            onChangeText={setUserRePass}
          />
          <Pressable
          style={styles.button}
          onPress={newUser}
          >
            <Text style={styles.buttonText}>
                Cadastrar
            </Text>

          </Pressable>
          <Pressable
          style={{marginTop: 15}}
          onPress={() => navigation.goBack()}>
          
          
            <Text>
                Voltar
            </Text>

          </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    form: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
  
  },
  input: {
    width: '100%',
    paddingVertical: 18,
    paddingHorizontal: 18,
    marginVertical: -40,
    borderRadius: 100,
    backgroundColor: 'rgba(250,200,200,0.2)',
    color: 'black',
    marginTop: 70
  },
  formTitle:{
    fontFamily: 'Parisienne_400Regular',
    color: '#eb248b',
    fontSize: 40,
    marginTop: 40,
    margin: 10,
    fontWeight: 'bold',
  },
  button: {
    width: '100%',
    paddingVertical: 13,
    borderRadius: 100,
    backgroundColor: '#eb248b',
    marginVertical: 10,
    alignItems: 'center',
    marginTop: 80,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Poppins_400Regular',
    fontSize: 18
  },
});