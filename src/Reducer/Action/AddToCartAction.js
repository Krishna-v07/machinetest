import { ErrorAddtocart, SuccessAddtocart, RequestAddtocart } from '../Type/AddtocartType';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const _ErrorAddtocart = () => {
    return {
        type: ErrorAddtocart
    }
}
export const _SuccessAddtocart = (data) => {
    return {
        type: SuccessAddtocart,
        payload: data
    }
}
export const _RequestAddtocart = (err) => {
    return {
        type: RequestAddtocart,
        payload: err,
    }
}



const setObjectValue = async (value) => {
    try {
        clearAll();
        const da = await getMyObject();
        if (da == null) {
            const alldata = [];
            alldata.push(value)
            const jsonValue = JSON.stringify(alldata);
            await AsyncStorage.setItem('key', jsonValue)
        } else {
            const alldata1 = [];
            da.forEach(element => {
                alldata1.push(element)
            });
            alldata1.push(value)
            const _jsonValue = JSON.stringify(alldata1);
            await AsyncStorage.setItem('key', _jsonValue)
        }
    } catch (e) {
        console.log(e)
    }
}

const clearAll = async () => {
    try {
        await AsyncStorage.clear()
    } catch (e) {
        // clear error
    }

    console.log('Done.')
}

const getMyObject = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('key')
        return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch (e) {
        // read error
    }
}

export const Add_ToCart = (data) => {
    return async (dispatch) => {
        _RequestAddtocart()
        setObjectValue(data)
        dispatch(_SuccessAddtocart(data))
    }
}

export default Add_ToCart;