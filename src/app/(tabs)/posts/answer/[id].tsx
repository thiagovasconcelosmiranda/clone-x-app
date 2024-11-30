import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { Link, router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Tweet } from "@/types/tweet";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { Loading } from "@/src/components/ui/loading";
import { Textarea } from "@/src/components/ui/textarea";
import apiTweet from "@/data/api-tweet";
import { Button } from "@/src/components/ui/button";
import { TweetItem } from "@/src/components/tweet/tweet-item";
import url from "@/src/utils/url";
import { ModalOption } from "@/src/components/ui/modal-option";
import * as ImagePicker from 'expo-image-picker';


export default function PostAnswer() {
    const { id } = useLocalSearchParams();
    const [tweet, setTweet] = useState<Tweet>();
    const [is_loading, setIs_loading] = useState(true);
    const [is_loading_button, setIs_loading_button] = useState(false);
    const [avatar, setAvatar] = useState('');
    const [post, setPost] = useState('');
    const [image, setImage] = useState(false);
    const [body, setBody] = useState('');
    const [token, setToken] = useState('');
    const [modalOption, setModalOption] = useState(false);
    const [imagePhone, setImagePhone] = useState(null);
    const [slug, setSlug] = useState('');

    useEffect(() => {
        getTweet();

    }, [id]);

    const getTweet = async () => {
        const token = await AsyncStorage.getItem('token');

        if (token) {
            setToken(token)
            const res = await apiTweet.tweetid(token, id);

            if (res.tweet.id) {
                setSlug(res.tweet.user.slug);
                setTweet(res.tweet);
                setAvatar(url.avatar(res.tweet?.user));
                if (res.tweet.image) {
                    setPost(url.post(res.tweet));
                    setImage(true);
                }
            }
        }
    }

    const handleClickAnswer = async () => {
        setIs_loading_button(true);
        if (token) {
          

            const res = await apiTweet.postanswer(
                token,
                parseInt(id),
                body,
                slug,
                imagePhone
            );
            if(res){
                router.replace('/dashboard');
            }
        }
    }

    const uploadCamera = async () => {
        try {
            await ImagePicker
                .requestCameraPermissionsAsync();
            let result = await ImagePicker.launchCameraAsync({
                cameraType: ImagePicker.CameraType.front,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });

            if (!result.canceled) {
                console.log(result.assets[0]);
                setImagePhone(result.assets[0]);
                setModalOption(false);

            }

        } catch (error) {
            setModalOption(false);
        }
    }


    const uploadGallery = async () => {
        try {
            await ImagePicker
                .requestCameraPermissionsAsync();
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.
                    Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1

            });

            if (!result.canceled) {
                setImagePhone(result.assets[0]);
                setModalOption(false);
            }

        } catch (error) {
            setModalOption(false);
        }
    }

    return (
        <View className="h-full bg-black">
            <View className="flex-1">
                <View className="flex-row justify-between items-center px-7 p-7">
                    <Link href={'/dashboard'}>
                        <Ionicons name="close" size={30} color="#fff" />
                    </Link>
                    <Button
                        onPress={handleClickAnswer}
                        text={is_loading_button ? (
                            <Loading size="large" color="#000" />
                        ) : 'Responder'}
                        size="40"
                    />
                </View>
                {is_loading ? (
                    <ScrollView>
                        <View className="p-4">
                            <View className="flex-row gap-2 justify-between">
                                <View className="flex-row gap-4">
                                    <View className="w-10 h-10 rounded-full border-2 border-white overflow-hidden flex justify-center items-center">
                                        <Image source={{ uri: avatar }}
                                            className="w-10 h-10"
                                        />
                                    </View>
                                    <View>
                                        <Text className="text-white">{tweet?.user.name}</Text>
                                        <Text className="text-gray-400">@{tweet?.user.slug}</Text>
                                        <Text className="text-white top-2 w-44">{tweet?.body}</Text>
                                    </View>
                                </View>
                                {image && (
                                    <View className="w-36 h-32  border-2 border-white rounded-2xl flex justify-center items-center">
                                        <Image
                                            source={{ uri: post }}
                                            className="w-36 h-32"
                                        />
                                    </View>
                                )}
                            </View>
                        </View>
                    </ScrollView>

                ) : (
                    <View className="h-96 flex justify-center  items-center">
                        <Loading size={'large'} color="#fff" />
                    </View>
                )}
            </View>
            {imagePhone && (
                <View className="flex justify-center items-center">
                    <View className="w-80 h-60 border-2 border-white rounded-2xl overflow-hidden">
                        <Image source={{ uri: imagePhone.uri }}
                            className="w-80 h-60"
                        />
                    </View>
                </View>
            )}

            <View>
                <View className="p-4 overflow-hidden rounded-md">
                    <Textarea
                        value={body}
                        placeholder="Poste sua resposta"
                        placeholderTextColor="gray"
                        onChangeText={(e) => setBody(e)}
                    />
                </View>
            </View>

            <View className="px-2 p-7 flex-row justify-center gap-4  bg-gray-900">
                <View className="flex-row  gap-10">
                    <Pressable onPress={() => setModalOption(true)}>
                        <Entypo name="image" size={30} color="#fff" />
                    </Pressable>
                    <Pressable >
                        <AntDesign name="enviromento" size={30} color="#fff" />
                    </Pressable>
                </View>
            </View>
            {modalOption && (
                <View className="flex justify-center items-center">
                    <ModalOption
                        uploadCamera={uploadCamera}
                        uploadGallery={uploadGallery}
                        uploadCancel={() => setModalOption(false)}
                        bottom="0"
                    />
                </View>
            )}
        </View>


    )
}