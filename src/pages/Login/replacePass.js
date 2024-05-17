import { useState } from "react";
import { Text, View,TextInput, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { auth } from "../../firebase.config";
import { useNavigation } from "@react-navigation/native";
import { sendPasswordResetEmail } from "firebase/auth";

export default function ReplacePass(){
    const [userMail, setUserMail] = useState('');
    const navigation = useNavigation();
    

    function replacePass(){
        if (userMail !==''){
            sendPasswordResetEmail(auth, userMail)
            .then(()=>{
                alert("Foi enviado um email para "+ userMail + ". Verifique sua caixa de email.");
                navigation.navigate('Login');
            })
            .catch((error)=>{
                const errorMessage = error.message;
                alert("Ops! Alguma coisa não deu certo " +errorMessage+". Tente novamente ou pressione voltar.");
                return;
            });
        } else {
            alert("É preciso informar um e-mail válido para efetuar a redefinição de senha");
            return;
        }
    }

    return(
        <View style={styles.form}>
            <Text style={styles.formTitle}>
            Redefinição de senha
            </Text>
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
          <Pressable
          style={styles.button}
          onPress={replacePass}
          >
            <Text style={styles.buttonText}>
                Redefinir
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
    )
}

const styles = StyleSheet.create({
    form: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
    },
    formTitle:{
        fontFamily: 'Parisienne_400Regular',
        color: '#eb248b',
        fontSize: 40,
        marginTop: 40,
        margin: 10,
        fontWeight: 'bold',
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