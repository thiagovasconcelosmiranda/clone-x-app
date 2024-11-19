import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Header } from "@/src/components/header";
import { TweetItem } from "@/src/components/tweet/tweet-item";
import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { useState } from "react";
import { ErrorInput } from "@/src/components/ui/error";


export default function UserEdit() {
    const { id } = useLocalSearchParams();
    const [nameField, setNameField] = useState('');
    const [errorName, setErrorName] = useState('');
    const [emailField, setEmailField] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [bodyField, setBodyField] = useState('');
    const [errorBody, setErrorBody] = useState('');
    const handleButtonUpdate = () => {
        alert(id);
    }

    const handleUpdateCover = () => {
        alert("Cover");
    }

    const handleUpdateAvatar = () => {
        alert("Avatar");
    }
    const handleCloseCover = () => {
        alert('Deleter Cover');
    }

    return (
        <View className="flex-1 bg-black">
            <Header back />
            <ScrollView>
                <View className="w-full h-44 border bg-gray-400 relative">
                    <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_c9PlH0OpgpcH9LfY9EP3J6xYpExQCO2EfA&s' }}
                        className="w-full h-44"
                    />
                    <Pressable className="w-14 h-14  absolute top-10 right-32 rounded-full bg-black flex justify-center items-center"
                        onPress={handleCloseCover}>
                        <Ionicons name="close" size={30} color="#fff" />
                    </Pressable>
                    <Pressable className="w-14 h-14  absolute top-10 left-32 rounded-full bg-black flex justify-center items-center"
                        onPress={handleUpdateCover}>
                        <Ionicons name="camera" size={30} color="#fff" />
                    </Pressable>
                </View>
                <View className=" w-24 h-24 rounded-full flex justify-center  items-center overflow-hidden bg-black bg-transparent absolute top-32 left-10">
                    <Image
                        source={require('../../../../../assets/images/default.png')}
                        className="w-24 h-24"
                        style={{ resizeMode: 'cover' }}
                    />
                    <Pressable className="w-14 h-14  absolute top-50 rounded-full bg-black flex justify-center items-center"
                        onPress={handleUpdateAvatar}>
                        <Ionicons name="camera" size={30} color="#fff" />
                    </Pressable>
                </View>
                <View className=" flex-row justify-end px-4 p-4">
                </View>
                <View className=" px-8 p-10">
                    <View className="">
                        <Text className="text-white font-bold">Thiago Vascoconcelos</Text>
                        <Text className="text-gray-400 font-bold">@{'Testador'}</Text>
                    </View>

                    <View className=" px-2 p-4 top-10 gap-5">
                        <Input
                            placeholder="Digite seu nome"
                            value={nameField}
                            color="#fff"
                            size="80"
                            onChange={e => setNameField(e.target.value)}
                        />
                         {errorName && (
                          <ErrorInput text="Campos Obrigatório*" />
                        )}
                        <Input
                            placeholder="Digite seu email"
                            value=""
                            color="#fff"
                            size="80"
                            onChange={e => setNameField(e.target.value)}
                        />
                        {errorEmail && (
                          <ErrorInput text="Campos Obrigatório*" />
                        )}

                        <Input
                            placeholder="Digite o post"
                            value={bodyField}
                            color="#fff"
                            size="80"
                            password
                            onChange={e => setBodyField(e.target.value)}
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