import { ScrollView, View } from "react-native";
import { RecommendationItem } from "./recomendation-item";

export const RecommendationArea = () => {
    return (
        <View className="">
            <ScrollView>
                <View className="gap-4">
                    <RecommendationItem />
                    <RecommendationItem />
                </View>
            </ScrollView>
        </View>
    )
}