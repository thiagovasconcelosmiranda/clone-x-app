import { Header } from "@/src/components/header";
import { RecommendationArea } from "@/src/components/ui/recommendation-area";
import { Text, View } from "react-native";

export default function Recommendation() {
    return (
        <View className="flex-1 bg-black">
            <Header />
            <View className="p-5">
                <Text className="text-white text-2xl text-center">Quem seguir?</Text>
            </View>
            <RecommendationArea />
        </View>
    )
}