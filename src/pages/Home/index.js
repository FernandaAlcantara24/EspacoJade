import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Platform, Dimensions, Pressable, Modal } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { Items } from '../../component/Clothes/Database';
import Clothes from '../../component/Clothes';
import { auth } from '../../firebase.config';
import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import { FontAwesome } from '@expo/vector-icons';


const windowWidth = Dimensions.get('window').width;

export default function Home() {
    const navigation = useNavigation();
    const currentUser = auth.currentUser;
    const [modalVisible, setModalVisible] = useState(false);
    const [filter, setFilter] = useState('all'); // Estado do filtro, inicializado como 'all'

    if (currentUser != null) {

    } else {
        alert('É necessario estar logado para utilizar este recurso!')
        navigation.goBack()
    }

    function logout() {
        signOut(auth)
            .then(() => {
                alert('Você desconectou-se do sistema!');
                navigation.navigate('Login');
            })
    }


    // Função para filtrar os produtos com base no tipo selecionado
    function handleFilter(type) {
        setFilter(type);
        setModalVisible(false); // Fechar o modal após selecionar um filtro
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

            </View>

            <View style={styles.textContainer}>
                <Text style={[styles.text, filter === 'all']}>{filter === 'all' ? 'TODOS' : filter.toUpperCase()}</Text>
                <Text style={[styles.text, { color: '#cececf' }]}>-</Text>
                <Text style={[styles.text, { color: '#cececf' }, filter === 'feminino' && styles.selectedText]}>FEMININO</Text>
                <TouchableOpacity style={{ position: 'absolute', right: '-2%', 
                     alignSelf: 'center',backgroundColor: 'rgba(250,200,200,0.2)',
                    padding: '2%',borderRadius: '12%', }}>
                    <MaterialIcons
                        name='filter-list'
                        size={25}
                        color= '#eb248b'
                        onPress={() => setModalVisible(true)}
                    />
                </TouchableOpacity>

                {/* Favoritos */}
                <TouchableOpacity 
                    style={{ position: 'absolute', right: '15%', 
                     alignSelf: 'center',backgroundColor: 'rgba(250,200,200,0.2)',
                    padding: '2%',borderRadius: '12%', }}
                    onPress={() => navigation.navigate('Favorite')}
                >
                    <FontAwesome name="shopping-cart" size={25} color="#eb248b" />
                </TouchableOpacity>
            </View>

            {/* Chamando os produtos */}
            <View style={styles.line} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.productsContainer}>
                    {Items.filter(item => filter === 'all' || item.type === filter).map((products, index) =>
                        <Clothes products={products} key={index} />
                    )}
                </View>
            </ScrollView>
            {/* Modal para filtro */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                            <AntDesign name="close" size={24} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.modalText}>Filtrar por:</Text>
                        <TouchableOpacity onPress={() => handleFilter('all')} style={styles.filterButton}>
                            <Text style={styles.filterButtonText}>Todos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleFilter('vestido')} style={styles.filterButton}>
                            <Text style={styles.filterButtonText}>Vestido</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleFilter('macacão')} style={styles.filterButton}>
                            <Text style={styles.filterButtonText}>Macacão</Text>
                        </TouchableOpacity><TouchableOpacity onPress={() => handleFilter('conjunto')} style={styles.filterButton}>
                            <Text style={styles.filterButtonText}>Conjunto</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
        marginHorizontal: '5%',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 18,
        marginHorizontal: '1%',
    },
    selectedText: {
        color: '#eb248b', 
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
        top: '-3%',
        paddingVertical: '2%',
        borderRadius: '10%',
        backgroundColor: 'rgba(250,200,200,0.2)',
        marginVertical: 10,
        marginLeft: -70
    },
    buttonText: {
        color: '#eb248b',
        fontFamily: 'Poppins_400Regular',
        fontSize: 15,
        textAlign: 'center',
    },
    logo: {
        fontFamily: 'Parisienne_400Regular',
        color: '#eb248b',
        fontSize: 40,
        paddingLeft: 5,
        textAlign: 'center',
        marginLeft: -150
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        minWidth: 300,
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    modalText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    filterButton: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#eb248b',
        marginBottom: 10,
    },
    filterButtonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    logoutButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        backgroundColor: '#eb248b',
        padding: 10,
        borderRadius: 5,
    },
    logoutButtonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
});