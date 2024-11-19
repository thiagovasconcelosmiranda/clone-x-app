import { Text, View } from "react-native"
import { TrendingItem } from "./trending-item"

export const TrendingArea = () => {
    return (
        <View className="top-5 flex justify-center items-center">
            <View className="p-8">
               <Text className="text-white text-center text-2xl">Trends</Text>
            </View>
            <View className=" w-96 gap-8 border-2 border-white p-10 rounded-lg ">
                <TrendingItem trend="#bomdia"/>
                <TrendingItem trend="#estudarja" />
                <TrendingItem trend="#boatarde" />
                <TrendingItem  trend="#esporte"/>
            </View>
        </View>
    )
}