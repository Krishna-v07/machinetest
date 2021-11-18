import React, { useEffect, useState } from 'react';
import {
  Button, View, FlatList, Text, SafeAreaView, StatusBar, ScrollView, Image, TextInput,
  TouchableOpacity
} from 'react-native';

import Quntity from 'react-native-vector-icons/FontAwesome';
import Repeate from 'react-native-vector-icons/Feather';
import Calendar from 'react-native-vector-icons/Entypo';
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/Ionicons';

import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CartIcon from '../CartIcon/CartIcon';





const Cart = ({ navigation }) => {


  const Header = () => {
    return (
      <View style={{ height: 90, backgroundColor: "#1273de", flexDirection: "row" }}>
                <View style={{ width: "15%", justifyContent: "center", alignItems: "center" }}>
                    <Icon
                        onPress={
                            () => {navigation.goBack() }
                        }
                        name="ios-arrow-back" size={25} style={{ color: "#FFFFFF" }} />
    
                </View>
                <View style={{ width: "70%", justifyContent: "center", alignItems: "center" }}>
                    <Text numberOfLines={1}
                        style={{ fontSize: 18, fontWeight: "bold", color: "#FFFFFF" }}
                    >CART LIST</Text>
                </View>
    
                <View style={{ width: "15%", justifyContent: "center", }}>
                    <CartIcon onPress={()=>{navigation.navigate("Cart")}}/>
                </View>
            </View>
    )
  }
  


  const [datas, setdata] = useState(null)
  const addtocart = useSelector((state) => state.Addtocart);

  useEffect(() => {
    _Getasydata();

  }, [addtocart])

  const _Getasydata = async () => {
    const count = await getMyObject();
    console.log(datas)
    if (count != null) {
      setdata(count)
    } else {
      setdata(null)
    }
  }


  const getMyObject = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('key')
      return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch (e) {
      // read error
    }
  }




  const renderItem = ({ item }) => {
    return (
      <Ripple
        // onPress={()=>{navigation.navigate("Addtocart",{data:item})}}
        style={{
          height: 100,
          marginTop: 2,
          flexDirection: "row",
          backgroundColor: "#FFFFFF"
        }}>
        <View style={{ width: "40%", justifyContent: "center", alignItems: "center", }}>
          <Image
            style={{ height: 50, width: 50, resizeMode: "contain" }}
            source={{
              uri: item.images,
            }}
          />
        </View>
        <View style={{ width: "60%", flexDirection: "column" }}>
          <View style={{ height: "50%", justifyContent: "center", }}>
            <Text>
              {item.title}
            </Text>
          </View>
          <View style={{ height: "50%", }}>
            <Text style={{ fontWeight: "bold", color: "black" }}>
              Rs. {item.price}
            </Text>
          </View>
        </View>
      </Ripple>
    )
  }



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E6EDEF" }}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <View>
        <Header />
      </View>
      {/* HEADER */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{}}>
          {
            datas != null ? 
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={datas}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={false}
              />
              : null
          }

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default Cart;

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Happilo 100 Natural Premium Whole Nuts Cashews ( 200 g Pouch )',
    price: 236,
    images: 'https://rukminim1.flixcart.com/image/300/300/ji4vmvk0-1/nut-dry-fruit/j/e/c/200-100-natural-premium-whole-nuts-pouch-happilo-original-imaf6y7hqpuxey8m.jpeg?q=90',
  },


  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Happilo 100% Natural Premium Californian Inshell Walnuts',
    price: 173,
    images: 'https://rukminim1.flixcart.com/image/300/300/ji4vmvk0/nut-dry-fruit/q/g/d/200-100-natural-premium-californian-inshell-pouch-happilo-original-imaf5zsgfmxfzwfa.jpeg?q=90',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Happilo Premium Dried Afghani Figs',
    price: 273,
    images: 'https://rukminim1.flixcart.com/image/300/300/jiulk7k0/nut-dry-fruit/e/g/s/200-premium-dried-afghani-anjeer-pouch-happilo-original-imaf6k2ajg2nfsfm.jpeg?q=90',
  },

  {
    id: '586942a120f-3da1-471f-bd96-145571e29d72',
    title: 'Happilo Premium International Healthy Assorted Nuts',
    price: 273,
    images: 'https://rukminim1.flixcart.com/image/300/300/jim0x3k0/nut-dry-fruit/u/c/t/200-premium-international-healthy-pouch-happilo-original-imaf6dmguzjegyke.jpeg?q=90',
  },

  {
    id: '586942a234540f-3da1-471f-bd96-145571e29d72',
    title: 'Happilo Premium Seedless Green Raisins',
    price: 236,
    images: 'https://rukminim1.flixcart.com/image/300/300/ji4vmvk0-1/nut-dry-fruit/j/e/c/200-100-natural-premium-whole-nuts-pouch-happilo-original-imaf6y7hqpuxey8m.jpeg?q=90',
  },
  {
    id: '586943452a0f-3da1-471f-bd96-145571e29d72',
    title: 'Happilo Premium Seedless Green Raisins',
    price: 123,
    images: 'https://rukminim1.flixcart.com/image/300/300/ji4vmvk0-1/nut-dry-fruit/g/p/a/250-premium-seedless-green-pouch-happilo-original-imaf6y7zpedtzhwg.jpeg?q=90',
  },


];