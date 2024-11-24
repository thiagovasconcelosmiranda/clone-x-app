import { Entypo, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export const OptionPublic = () => {
    const [optionPublic, setOptionPublic] = useState(false);
    const [icon, setIcon] = useState(false);

    const handleClickPublic = () => {
        if (optionPublic) {
            setOptionPublic(false);
            setIcon(false);
        } else {
            setOptionPublic(true);
            setIcon(true);
        }
    }

    return (
        <View className="flex-1">
            <Pressable className=" w-16 h-16 rounded-full z-50 flex-row justify-center items-center absolute bottom-10 right-10  bg-blue-500"
                onPress={handleClickPublic}>
                {icon ? (
                    <Ionicons name="close" size={25} color="#fff" />
                ) : (
                    <Ionicons name="add" size={30} color="#fff" />
                )}

            </Pressable>

            {optionPublic && (
                <View className=" w-auto h-60 bg-black border-2 border-white rounded-lg flex justify-center items-end absolute bottom-0 right-28">
                    <View className="gap-5 p-10">
                        <View className="flex-row justify-between items-center gap-4">
                            <Text className="text-2xl text-white font-bold">Entrar ao vivo</Text>
                            <Pressable>
                                <View className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center ">
                                    <Ionicons name="camera" size={18} color="#fff" />
                                </View>
                            </Pressable>
                        </View>
                        <View className="flex-row justify-between items-center gap-4">
                            <Text className="text-2xl text-white font-bold">Galeria</Text>
                            <Pressable>
                                <View className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center ">
                                    <Entypo name="image" size={18} color="#fff" />
                                </View>
                            </Pressable>
                        </View>
                        <View className="flex-row justify-between items-center gap-4">
                            <Text className="text-2xl text-white font-bold">Publicar</Text>
                            <Link href={'/post'}>
                                <View className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                                    <Entypo name="leaf" size={20} color="#fff" />
                                </View>
                            </Link>
                        </View>
                    </View>
                </View>
            )}
        </View>
    )
}