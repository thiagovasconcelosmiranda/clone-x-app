import { formatRelativeTime } from "@/src/utils/format-relative";
import url from "@/src/utils/url";
import { Answer } from "@/types/answer"
import { AntDesign, Feather, Fontisto, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

type Props = {
    answer: Answer;
}

export const TweetAnswer = ({ answer }: Props) => {
    const avatar = url.avatar(answer.user);
    const [imagePost, setImagePost] = useState('');

    useEffect(()=>{
        if(answer.image){
            setImagePost(url.postall(answer));
        }
      
    },[answer]);

    return (
        <View className="flex justify-center items-center">
            <View className="px-8 p-4 flex-col w-80">
                <View className="flex-row gap-3">
                    <View className="w-8 h-8 rounded-full border-2 border-white overflow-hidden flex justify-center items-center">
                        <Image source={{ uri: avatar }}
                            className="w-8 h-8"
                        />
                    </View>
                    <View>
                        <Text className="text-white text-1xl">{answer.user.name}</Text>
                        <Text className="text-gray-300">@{answer.user.slug} - {formatRelativeTime(new Date())}</Text>
                    </View>
                </View>
                <View className="p-4">
                    <Text className="text-white">{answer.body}</Text>
                </View>
                {answer.image && (
                    <View className="w-full h-40 border-2 border-white top-3 rounded-2xl">
                        <Image source={{uri: imagePost}}
                        className="w-full h-40"
                        />
                    </View>
                )}
                <View className="flex-row flex justify-between p-5 z-1">
                    <Pressable>
                        <Feather name="message-circle" size={25} color="gray" />
                    </Pressable>
                    <Pressable>
                        <Ionicons name="repeat" size={25} color="gray" />
                    </Pressable>
                    <Pressable>
                        <MaterialIcons name="favorite-border" size={25} color="gray" />
                    </Pressable>
                    <Pressable>
                        <AntDesign name="barschart" size={25} color="gray" />
                    </Pressable>
                    <Pressable>
                        <Ionicons name="menu" size={25} color="gray" />
                    </Pressable>
                    <Pressable>
                        <Fontisto name="favorite" size={20} color="gray" />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}