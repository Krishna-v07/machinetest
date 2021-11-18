import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar, Badge, withBadge } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartIcon = (props) => { 
  console.log(props) 
  const [datas, setdata] = useState(0)
  const addtocart = useSelector((state) => state.Addtocart);

  useEffect(() => {
    _Getasydata();
  }, [addtocart])

  const _Getasydata = async () => {
    const count = await getMyObject();
    if (count != null) {
      console.log(count.length)
      setdata(count.length)
    } else {
      setdata(0)
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

  return (
    <View style={{paddingTop:25}}>
      <Icon 
       onPress={()=>{props.onPress()}}
      name="ios-cart-sharp" size={25} style={{ color: "#FFFFFF" }} />
      {
        datas != 0 ?
          <Badge value={datas} status="error"
            containerStyle={{ position: 'relative', top: -30, right: 5 }}
          /> : null
      }

    </View>
  )
}

export default CartIcon;