import React, { useState, useEffect, useCallback } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    TouchableOpacity,
    View,
    ImageBackground,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Rs from 'react-native-vector-icons/FontAwesome';
import Ripple from 'react-native-material-ripple';
import {useDispatch,useSelector} from 'react-redux';
import {Add_ToCart} from '../Reducer/Action/AddToCartAction'
import CartIcon from '../CartIcon/CartIcon'





const Addtocart = ({ navigation, route }) => {
    const { data } = route.params;  
    const usedipatch=useDispatch(); 

    const CotegoriesHeader = (props) => {
        return (
            <View style={{ height: 90, backgroundColor: "#1273de", flexDirection: "row" }}>
                <View style={{ width: "15%", justifyContent: "center", alignItems: "center" }}>
                    <Icon
                        onPress={
                            () => { props.onPress() }
                        }
                        name="ios-arrow-back" size={25} style={{ color: "#FFFFFF" }} />
    
                </View>
                <View style={{ width: "70%", justifyContent: "center", alignItems: "center" }}>
                    <Text numberOfLines={1}
                        style={{ fontSize: 18, fontWeight: "bold", color: "#FFFFFF" }}
                    >Product Details</Text>
                </View>
    
                <View style={{ width: "15%", justifyContent: "center", }}>
                    <CartIcon onPress={()=>{navigation.navigate("Cart")}}/>
                </View>
            </View>
        )
    }

    

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
            {/* Header */}
            <CotegoriesHeader onPress={(e) => { navigation.goBack() }} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ height: 300, paddingVertical: 20, paddingHorizontal: 40 }}>
                    <Image
                        style={{ height: "100%", width: "100%", resizeMode: "contain" }}
                        source={{ uri: data.images }} />
                </View>
                <View style={{ paddingHorizontal: 15, marginTop: 10, justifyContent: "center" }}>
                    <Text>
                        {data.title}
                    </Text>
                </View>

                <View style={{ paddingHorizontal: 15, marginTop: 10, justifyContent: "center" }}>
                    <Text style={{ fontWeight: "bold", color: "black" }}>
                        <Rs name="rupee" size={16} /> {data.price}
                    </Text>
                </View>
            </ScrollView>



            {/* BOTTOM FOOTER */}
            <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, backgroundColor: "red", height: 50, flexDirection: "row" }}>
                <Ripple
                  
                  onPress={()=>{usedipatch(Add_ToCart(data))}}

                    style={{ width: "50%", backgroundColor: "#d9e3f0", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>
                        GO TO CART
                    </Text>
                </Ripple>
                <Ripple style={{ width: "50%", backgroundColor: "#1273de", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 16 }}>
                        BUY NOW
                    </Text>
                </Ripple>
            </View>
        </SafeAreaView>

    )
}

export default Addtocart;

