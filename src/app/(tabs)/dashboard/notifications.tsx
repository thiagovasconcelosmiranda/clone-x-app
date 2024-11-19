import { Header } from "@/src/components/header";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Notifications() {
    const [nofification, setNofification] = useState(false);
    return (
        <View className="flex-1 bg-black flex  items-center ">
            <Header/>
            {!nofification && (
                <View className="w-80  p-10 flex-row justify-center items-center gap-5 ">
                    <Text className="text-white text-center">Nenhuma notificação</Text>
                    <AntDesign name="exclamationcircleo" size={20} color="#fff" />
                </View>
            )}

            <ScrollView></ScrollView>
        </View>
    )
}