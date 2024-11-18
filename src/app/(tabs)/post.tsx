import { Button } from "@/src/componentes/ui/button";
import { Input } from "@/src/componentes/ui/input";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { Pressable, Text } from "react-native";
import { View } from "react-native";

export default function post() {
    const [bodyValue, setBodyValue] = useState('');

    const handleButtonPublic = () => {
        alert('publicar');
    }
    
    const handleButtonUpload = () => {
        alert('Upload');
    }
    const handleButtonLocalization = () => {
        alert("Localização");
    }

    return (
        <View className="h-full bg-black">
            <View className="flex-1">
                <View className="flex-row justify-between place-items-center px-7 p-7">
                    <Link href={'/dashboard'}>
                        <Ionicons name="close" size={30} color="#fff" />
                    </Link>
                    <Button onPress={handleButtonPublic} text="Publicar" size="40" />
                </View>
                <View className="px-4">
                    <Input
                        value={bodyValue}
                        color="#fff"
                        placeholder="O que está acontecendo?"
                        onChange={e => setBodyValue(e.target.value)}
                        icon="search"
                    />
                </View>
            </View>
            <View className="px-2 flex-row justify-center gap-4 p- bg-gray-900">
                <View className="flex-row  gap-10">
                    <Pressable onPress={handleButtonUpload}>
                        <Entypo name="image" size={30} color="gray" />
                    </Pressable>
                    <Pressable onPress={handleButtonLocalization}>
                        <AntDesign name="enviromento" size={30} color="gray" />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}