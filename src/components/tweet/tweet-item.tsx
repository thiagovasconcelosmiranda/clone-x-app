import { FlatListComponent, Image, Pressable, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons, Feather, MaterialIcons, AntDesign, Fontisto } from "@expo/vector-icons"
import { Link } from "expo-router"
import { Tweet } from "@/types/tweet";
import url from "@/src/utils/url";
import { useEffect, useState } from "react";
import { TweetAnswer } from "./tweet-answer";

type Props = {
    tweet: Tweet;
    currentClick?: ()=> void;
}

export const TweetItem = ({ tweet }: Props) => {
    const cover = url.post(tweet);
    const avatar = url.avatar(tweet.user);
    const [answer, setAnswer] = useState([]);

    useEffect(() => {
        if(tweet.answer.length > 0){
          setAnswer(tweet.answer);
        }
    },[tweet]);

    return (
        <SafeAreaView>
            <View className="p-5 z-40">
                <View className="px-4 p-10 flex-row">
                    <Link href={`/user/${tweet.user.slug}`}>
                        <View className=" w-15 h-15 rounded-full overflow-hidden flex justify-center bg-blue-400 ">
                            <Image source={{ uri: avatar }}
                                style={{ resizeMode: "cover", width: 50, height: 50 }}
                            />
                        </View>
                    </Link>
                    <View className="px-4">
                        <View className="flex-row gap-4">
                            <Text className="font-bold text-white text-2xl">{tweet?.user.name}</Text>
                            <Pressable>
                                <Text className="text-gray-500 text-2xl">@{tweet?.user.slug}</Text>
                            </Pressable>
                        </View>
                        <Text className="text-white text-1xl top-3">{tweet?.body}</Text>
                    </View>
                </View>
                {tweet.image && (
                    <View className="w-full h-50 flex justify-center overflow-hidden items-center rounded-lg border border-white">
                        <Image source={{ uri: cover }}
                            className="w-full h-56 z-30" style={{ resizeMode: 'cover' }} />
                    </View>
                )}
                <View className="flex-row flex justify-between p-5 z-1">
                    <Link href={`/posts/answer/${tweet.id}`}>
                        <Feather name="message-circle" size={25} color="gray" />
                    </Link>
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
            {tweet.answer.length > 0 && (
                <View>
                    {answer.map((item, k) => (
                        <TweetAnswer
                            key={k}
                            answer={item}
                        />
                    ))}
                </View>
            )}


        </SafeAreaView>
    )
}