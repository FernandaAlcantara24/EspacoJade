import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function Button({  products, tamanhoSelecionado, corSelecionada}) {
    
    
    const enviarParaWhatsapp = () => {
        const mensagem = `Olá!\nGostaria de comprar o produto "${products.productName}",\nno tamanho "${tamanhoSelecionado}",\ne na cor "${corSelecionada}".\nPor favor, me informe como posso proceder com a compra.\nObrigado!.`;
        const numeroWhatsapp = '';
        Linking.openURL(`whatsapp://send?phone=${numeroWhatsapp}&text=${encodeURIComponent(mensagem)}`);

    };
    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnContainer} onPress={enviarParaWhatsapp}>
                <Text style={styles.title}>COMPRAR</Text>
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
