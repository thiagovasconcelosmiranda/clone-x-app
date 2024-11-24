import { Entypo } from "@expo/vector-icons"
import { router } from "expo-router"
import { Pressable, Text, View } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"


export const NavLogout =  () => {

    const handleClickLogout = async () => {
        const token = await AsyncStorage.getItem('token');
        if(token){
            await  AsyncStorage.setItem('token', '');
            router.replace('/auth/signin');
        }
    }
    return (
        <View className="flex-row gap-3">
            <Entypo name="log-out" size={30} color="#fff"/>
            <Pressable onPress={handleClickLogout}>
                 <Text className="font-bold text-2xl text-white">Sair</Text>
            </Pressable>
        </View>
    )
}