import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { FavoriteContext } from './favoritecontext';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const Favorite = () => {
  const { favoritos, removeFromFavorites } = useContext(FavoriteContext);
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity
        style={styles.itemContent}
        onPress={() => navigation.navigate('Detail', item)}
      >
        <Image source={item.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.productName}>{item.productName}</Text>
          <Text style={styles.productPrice}>R${item.productPrice}</Text>
        </View>
        <TouchableOpacity onPress={() => removeFromFavorites(item.id)}>
        <AntDesign name="delete" size={25} color="red" />
      </TouchableOpacity>
      </TouchableOpacity>
      
    </View>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{ backgroundColor: 'rgba(250,200,200,0.2)', borderRadius: 5, marginLeft: '2%' }}
          onPress={() => navigation.navigate('Home')}
        >
          <AntDesign name="left" size={30} color="#eb248b" />
        </TouchableOpacity>
        <Text style={{ fontSize: 22, marginLeft: '3%', marginTop: '1%' }}>Meus Favoritos</Text>
      </SafeAreaView>
      {favoritos.length === 0 ? (
        <Text style={styles.emptyText}>Nenhum favorito adicionado.</Text>
      ) : (
        <FlatList
          data={favoritos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
  },
  productPrice: {
    fontSize: 14,
    color: 'gray',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
  },
});

export default Favorite;
