import { Image, Pressable, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons, Feather, MaterialIcons, AntDesign, Fontisto } from "@expo/vector-icons"
import { Link } from "expo-router"
import { Tweet } from "@/types/tweet";
import url from "@/src/utils/url";
import { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import apiTweet from "@/data/api-tweet";
import { UserContext } from "@/src/contexts/UserContext";

type Props = {
    tweet: Tweet;
}

export const TweetItem = ({ tweet }: Props) => {
    const cover = url.post(tweet);
    const avatar = url.avatar(tweet.user);
    const [like, setLike] = useState(false);
    const { user } = useContext(UserContext);

    useEffect(() => {
        likes();
    }, []);

    const likes = () => {

        tweet.likes.map((item: any) => {
            if (item.userSlug === user.slug) {
                setLike(true);
            }
        });
    }

    const handleClickLike = async () => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            await apiTweet.tweetLike(token, tweet.id);
            setLike(true)
            likes();
        }
    }

    return (
        <SafeAreaView>
            <View className="p-5 z-40">
                <View className="px-4 p-10 flex-row">
                    <Link href={`/user/${tweet.user.slug}`}>
                        <View className=" w-15 h-15 rounded-full overflow-hidden flex justify-center  ">
                            <Image source={{ uri: avatar }}
                                style={{ resizeMode: "cover", width: 50, height: 50 }}
                            />
                        </View>
                    </Link>
                    <View className="px-4">
                        <View className="flex-row gap-4">
                            <Text className="font-bold text-white">{tweet?.user.name}</Text>
                            <Pressable>
                                <Text className="text-gray-500">{tweet?.user.slug}</Text>
                            </Pressable>
                        </View>
                        <Text className="text-white text-1xl">{tweet?.body}</Text>
                    </View>
                </View>
                {tweet.image && (
                    <View className="w-full h-50 flex justify-center overflow-hidden items-center rounded-lg border border-white">
                        <Image source={{ uri: cover }}
                            className="w-full h-56 z-30" style={{ resizeMode: 'cover' }} />
                    </View>
                )}
                <View className="flex-row flex justify-between p-5 z-1">
                    <Link href={`/posts/${tweet.id}`} className="flex-row gap-2">
                        <Feather name="message-circle" size={25} color="gray" />
                        <Text className="text-gray-400">{tweet.answerOf}</Text>
                    </Link>
                    <Pressable>
                        <Ionicons name="repeat" size={25} color="gray" />
                    </Pressable>
                    <Pressable className="flex-row gap-2 items-center" onPress={handleClickLike}>
                        {like ? (
                            <>
                                <MaterialIcons name="favorite-border" size={25} color={'red'} />
                            </>
                        ) : (
                            <>
                                <MaterialIcons name="favorite-border" size={25} color={'gray'} />
                            </>
                        )}
                        <Text className="text-gray-400">{tweet.likes.length}</Text>
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
        </SafeAreaView>
    )
}