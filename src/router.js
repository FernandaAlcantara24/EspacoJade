import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Favorite from './pages/Favorite';
import Home from './pages/Home';
import Detail from './pages/Detail';
import LoginApp from './pages/Login';
import NewUser from './pages/Login/newUser';
import ReplacePass from './pages/Login/replacePass';
import { FavoriteProvider } from './pages/Favorite/favoritecontext';


const Stack = createStackNavigator();

function Routes(){
    return(
        <FavoriteProvider>
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen
                    name='Login'
                    component={LoginApp}
                    options={{ headerShown: false}}
                />
                <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{ headerShown: false}}
                />
                <Stack.Screen
                    name='Favorite'
                    component={Favorite}
                    options={{ headerShown: false}}
                />
                <Stack.Screen
                    name = "Detail"
                    component ={Detail}
                    options={{ headerShown: false}}
                />
                <Stack.Screen
                    name='NewUser'
                    component={NewUser}
                    options={{ headerShown: false}}
                />
                 <Stack.Screen
                    name='ReplacePass'
                    component={ReplacePass}
                    options={{ headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
        </FavoriteProvider>
    );
}

export default  Routes;