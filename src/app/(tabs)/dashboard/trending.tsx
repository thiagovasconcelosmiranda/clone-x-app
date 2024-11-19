import { Header } from "@/src/components/header";
import { TrendingArea } from "@/src/components/ui/trending-area";
import { View } from "react-native";

export default function Trending(){
    return (
        <View className="flex-1 bg-black">
           <Header/>
           <TrendingArea/>
        </View>
    )
}