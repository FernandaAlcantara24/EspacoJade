import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Detail from './pages/Detail';
import LoginApp from './pages/Login';
import NewUser from './pages/Login/newUser';
import ReplacePass from './pages/Login/replacePass';

const Stack = createStackNavigator();

function Routes(){
    return(
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
    );
}

export default  Routes;