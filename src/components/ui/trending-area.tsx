import { Text, View } from "react-native"
import { TrendingItem } from "./trending-item"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import apiTrending from "@/data/api-trending"

export const TrendingArea = () => {
   const [trending, setTrending] = useState([]);

    useEffect(()=>{
       getTrending();
    },[]);

    const getTrending = async () => {
       const token = await AsyncStorage.getItem('token');
       if(token){
        const res = await apiTrending.trend(token);
        if(res.trends.length > 0){
            setTrending(res.trends);
            console.log(res.trends);
        }
       }
    }

    return (
        <View className="top-5 flex justify-center items-center">
            <View className="p-8">
               <Text className="text-white text-center text-2xl">Trends</Text>
            </View>
            <View className=" w-96 gap-8 border-2 border-white p-10 rounded-lg ">
                {trending.map((item, k) => (
                    <TrendingItem key={k} trend={item}/>
                ))}   
            </View>
        </View>
    )
}