import { ScrollView, View } from "react-native";
import { RecommendationItem } from "./recomendation-item";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import apiSuggestion from "@/data/api-suggestion";

export const RecommendationArea = () => {
    const [suggestion, setSuggestion] = useState([]);

    useEffect(() => {
        getSuggestion();
    }, []);

    const getSuggestion = async () => {
        const token = await AsyncStorage.getItem('token');

        if (token) {
            const res = await apiSuggestion.suggestion(token);
            if (res.users.length > 0) {
                setSuggestion(res.users);
            }
        }
    }

    return (
            <View className="w-96 p-4 border-2 border-gray-100">
                <ScrollView>
                    <View className="gap-4">
                        {suggestion.map((item, k) => (
                            <RecommendationItem key={k} user={item} />
                        ))}
                    </View>
                </ScrollView>
            </View>
    )
}