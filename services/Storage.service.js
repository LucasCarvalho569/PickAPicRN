import { AsyncStorage } from 'react-native';

export const setItem = async (chave, valor) => {
    try {
        await AsyncStorage.setItem(chave, JSON.stringify(valor));
    } catch (error) {
        
    }
}

export const getItem = async (item) => {
    try {
        return await AsyncStorage.getItem(JSON.stringify(item)) | undefined;
    } catch (error) {

    }
}