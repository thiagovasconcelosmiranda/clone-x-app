import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Header } from "@/src/components/header";
import { TweetItem } from "@/src/components/tweet/tweet-item";
import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { useState, useContext, useEffect } from "react";
import { ErrorInput } from "@/src/components/ui/error";
import { UserContext } from "@/src/contexts/UserContext";
import url from "@/src/utils/url";
import apiUser from "@/data/api-user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from 'expo-image-picker';
import { ModalOption } from "@/src/components/ui/modal-option";


export default function User() {
    const { user } = useContext(UserContext);
    const [nameField, setNameField] = useState('');
    const [errorName, setErrorName] = useState('');
    const [linkField, setLinkField] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [bioField, setBioField] = useState('');
    const [errorBody, setErrorBody] = useState('');
    const [fileAvatar, setFileAvatar] = useState(null);
    const [fileCover, setFileCover] = useState(null);
    const [upModalAvatar, setUpModalAvatar] = useState(false);
    const [upModalCover, setUpModalCover] = useState(false);
    const avatar = url.avatar(user);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            const res = await apiUser.getUser(token, user.slug);
            if (res.user.slug) {
                setNameField(res.user.name);
                setLinkField(res.user.link);
                setBioField(res.user.bio);
            }
        }
    }

    const handleButtonUpdate = async () => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            console.log(token);
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
                if (upModalAvatar) {
                    setFileAvatar(result.assets[0]);
                    apiUserAvatar(result.assets[0]);

                } else if (upModalCover) {
                    setFileCover(result.assets[0]);
                    apiUserCover(result.assets[0]);
                }
            }
        } catch (error) {

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
                if (upModalAvatar) {
                    console.log(result.assets[0]);
                    setFileAvatar(result.assets[0]);
                    apiUserAvatar(result.assets[0]);
                } else if (upModalCover) {
                    setFileCover(result.assets[0]);
                    apiUserCover(result.assets[0]);
                }
            }
        } catch (error) { }
    }

    const apiUserAvatar = async (file: any) => {
        const token = await AsyncStorage.getItem('token');

        if (token) {
            const res = await apiUser.addAvatar(token, user.slug, file);
            console.log(res)
        }
    }
    const apiUserCover = async (file: any) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            const res = await apiUser.addCover(token, user.slug, file);
            console.log(res)
        }
    }

    return (
        <View className="flex-1 bg-black">
            <Header back />
            <ScrollView>
                <View className="w-full h-44 border bg-gray-400 relative">
                    <Image source={{ uri: `${fileCover ? fileCover.uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_c9PlH0OpgpcH9LfY9EP3J6xYpExQCO2EfA&s'}` }}
                        className="w-full h-44"
                    />
                    <Pressable className="w-14 h-14  absolute top-10 right-32 rounded-full bg-black flex justify-center items-center"
                        onPress={() => setFileCover(null)}>
                        <Ionicons name="close" size={30} color="#fff" />
                    </Pressable>
                    <Pressable className="w-14 h-14  absolute top-10 left-32 rounded-full bg-black flex justify-center items-center"
                        onPress={() => setUpModalCover(true)}>
                        <Ionicons name="camera" size={30} color="#fff" />
                    </Pressable>
                </View>
                {upModalCover && (
                    <ModalOption
                        uploadCamera={uploadCamera}
                        uploadGallery={uploadGallery}
                        uploadCancel={() => setUpModalCover(false)}
                        top="20"
                        left="12"
                    />
                )}


                <View className=" w-24 h-24 rounded-full flex justify-center  items-center overflow-hidden border-2 border-white  bg-blue-500 absolute top-32 left-10">
                    <Image
                        source={{ uri: `${fileAvatar ? fileAvatar.uri : avatar}` }}
                        className="w-24 h-24"
                        style={{ resizeMode: 'cover' }}
                    />
                    <Pressable className="w-14 h-14  absolute top-50 rounded-full bg-black flex justify-center items-center"
                        onPress={() => setUpModalAvatar(true)}>
                        <Ionicons name="camera" size={30} color="#fff" />
                    </Pressable>
                </View>
                {upModalAvatar && (
                    <ModalOption
                        uploadCamera={uploadCamera}
                        uploadGallery={uploadGallery}
                        uploadCancel={() => setUpModalAvatar(false)}
                        bottom="96"
                    />
                )}

                <View className=" flex-row justify-end px-4 p-4">
                </View>
                <View className=" px-8 p-10">
                    <View className="">
                        <Text className="text-white font-bold text-2xl">{user.name}</Text>
                        <Text className="text-gray-400 font-bold text-2xl">@{user.slug}</Text>
                    </View>

                    <View className=" px-2 p-4 top-10 gap-8">
                        <Input
                            placeholder="Digite seu nome"
                            value={nameField}
                            color="#fff"
                            size="80"
                            onChangeText={(e) => setNameField(e)}
                            border
                        />
                        {errorName && (
                            <ErrorInput text="Campos Obrigatório*" />
                        )}
                        <Input
                            placeholder="Digite um Link"
                            value={linkField}
                            color="#fff"
                            size="80"
                            onChangeText={(e) => setLinkField(e)}
                            border
                        />
                        {errorEmail && (
                            <ErrorInput text="Campos Obrigatório*" />
                        )}

                        <Input
                            placeholder="Digite sua bio"
                            value={bioField}
                            color="#fff"
                            size="80"
                            onChangeText={(e) => setBioField(e)}
                            border
                        />
                        {errorBody && (
                            <ErrorInput text="Campos Obrigatório*" />
                        )}

                        <Button text="Alterar" onPress={handleButtonUpdate} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}