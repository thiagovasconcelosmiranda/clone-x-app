import apiTweet from "@/data/api-tweet";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { UserContext } from "@/src/contexts/UserContext";
import url from "@/src/utils/url";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, router } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Image, Pressable, Text } from "react-native";
import { View } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { ModalOption } from "@/src/components/ui/modal-option";

export default function post() {
    const [bodyValue, setBodyValue] = useState('');
    const { user } = useContext(UserContext);
    const avatar = url.avatar(user);
    const [image, setImage] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [modalOption, setModalOption] = useState(false);

    useEffect(() => {
        if (bodyValue.length > 0) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [bodyValue]);

    const handleButtonPublic = async () => {
        const token = await AsyncStorage.getItem('token');

        if (token) {
            const res = await apiTweet.addtweetpost(token, bodyValue, image );
            if (res) {
                console.log(res);
                router.replace('/dashboard');
            }
        }
    }

    const handleButtonLocalization = () => {
        alert("Localização");
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
                setImage(result.assets[0]);
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
               aspect: [1,1],
               quality: 1

            });

            if (!result.canceled) {
                setImage(result.assets[0]);
                setModalOption(false);
            }

        } catch (error) {
            setModalOption(false);
        }
    }

    const uploadCancel = () => {
       setModalOption(false);
    }

    return (
        <View className="h-full bg-black">
            <View className="flex-1">
                <View className="flex-row justify-between items-center px-7 p-7">
                    <Link href={'/dashboard'}>
                        <Ionicons name="close" size={30} color="#fff" />
                    </Link>
                    <Button
                        onPress={handleButtonPublic}
                        text="Publicar"
                        size="40"
                        disabled={disabled}
                        disabledStyle={disabled}
                    />
                </View>
                <View className="px-4 flex-row gap-4 flex justify-between">
                    <Link href={`/user/${user.slug}`}>
                        <View className="w-12 h-12 border-2 border-white rounded-full  overflow-hidden flex justify-center items-center">
                            <Image source={{ uri: avatar }}
                                style={{ width: 40, height: 40 }} />
                        </View>
                    </Link>
                </View>
                <View className="p-4 overflow-hidden rounded-md">
                    <Textarea
                        onChangeText={(e) => setBodyValue(e)}
                        value={bodyValue}
                        placeholder="O que está acontecendo?"
                        placeholderTextColor="gray"
                        border
                    />
                </View>
                <View className="px-4 overflow-hidden flex justify-center items-center">
                    {image  && (
                         <View className="w-80 h-80  flex justify-center items-center rounded-xl overflow-hidden">
                         <Image className="w-80 h-80" source={{uri: image.uri}} />
                     </View>
                    )}
                   
                </View>
            </View>

            <View className="px-2 flex-row justify-center gap-4 p-3 bg-gray-900">
                <View className="flex-row  gap-10">
                    <Pressable onPress={()=>setModalOption(true)}>
                        <Entypo name="image" size={30} color="#fff" />
                    </Pressable>
                    <Pressable onPress={handleButtonLocalization}>
                        <AntDesign name="enviromento" size={30} color="#fff" />
                    </Pressable>
                </View>
                  
                {modalOption && (
                   <ModalOption 
                     uploadCamera={uploadCamera}
                     uploadGallery={uploadGallery}
                     uploadCancel={uploadCancel}
                     bottom="16"
                    />
                )}
            </View>
        </View>
    )
}