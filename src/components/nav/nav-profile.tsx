import { Image, Pressable, Text, View } from "react-native"

export const NavProfile = () => {
    return (
        <View>
            <View>
                <Image
                    source={require('../../../assets/images/default.png')}
                    style={{ width: 35, height: 35, resizeMode: 'cover' }}
                />
            </View>
            <View className="top-2">
                <Text className="font-bold">Thiago Vasconcelos</Text>
                <Text>@desenvolvedor</Text>
            </View>
            <View className="flex-row top-4">
                <Pressable>
                    <Text> 55 Seguindo</Text>
                </Pressable>
                <Pressable>
                    <Text> 55 Seguidores</Text>
                </Pressable>
            </View>
        </View>
    )
}