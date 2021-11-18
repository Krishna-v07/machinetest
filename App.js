import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen/HomeScreen';
import SplaceScreen from './src/SplaceScreen/SplaceScreen';
import InputOTPScreen from './src/InputOTPScreen/InputOTPScreen';
import AuthenticationScreen from './src/AuthenticationScreen/AuthenticationScreen';
import InputMobileNo from './src/InputMobileNo/InputMobileNo';
import Addtocart from './src/Addtocart/Addtocart';

import { Provider } from "react-redux";
import store from './src/Reducer/store';
import Cart from './src/Cart/Cart';

 

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplaceScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SplaceScreen" component={SplaceScreen} />
        <Stack.Screen name="Addtocart" component={Addtocart} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="InputMobileNo" component={InputMobileNo} /> 
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;
