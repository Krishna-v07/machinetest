import React,{useEffect} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    ImageBackground
} from 'react-native';
const image = { uri: "https://i.pinimg.com/564x/37/15/25/371525583b091156be6c975d86d42066.jpg" }; 
const SplaceScreen = ({ navigation }) => {

     useEffect(()=>{
        setTimeout(() => {
            navigation.replace("HomeScreen")
        }, 1500);
      },[])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
            <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}  >
                
            </ImageBackground>
        </SafeAreaView>
    );

}

export default SplaceScreen;