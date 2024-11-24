import { UserContext } from "@/src/contexts/UserContext"
import url from "@/src/utils/url";
import { useContext, useEffect } from "react"
import { Image, Pressable, Text, View } from "react-native"

export const NavProfile = () => {
    const {user} = useContext(UserContext);
    const avatar = url.avatar(user);

    return (
        <View>
            <View className="w-10 h-10 rounded-full overflow-hidden border-2 border-white bg-blue-500">
                <Image
                    source={{uri:`${avatar}`}}
                    style={{ width: 35, height: 35, resizeMode: 'cover' }}
                />
            </View>
            <View className="top-2">
                <Text className="font-bold text-white text-2xl">{user.name}</Text>
                <Text className="text-white">@{user.slug}</Text>
            </View>
            <View className="flex-row top-8 gap-4">
                <Pressable>
                    <Text className="text-white"> 2 Seguindo</Text>
                </Pressable>
                <Pressable>
                    <Text className="text-white"> 2 Seguidores</Text>
                </Pressable>
            </View>
        </View>
    )
}