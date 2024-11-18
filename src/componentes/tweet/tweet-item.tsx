import { Image, Pressable, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons, Feather, MaterialIcons, AntDesign, Fontisto } from "@expo/vector-icons"
import { Link } from "expo-router"

export const TweetItem = () => {
    return (
        <SafeAreaView>
            <View className="p-5 z-40" >
                <View className="px-4 p-10 flex-row">
                    <Link href={'/user/testador'}>
                        <View className=" w-15 h-15 rounded-full overflow-hidden flex justify-center  ">
                            <Image source={require('../../../assets/images/default.png')}
                                style={{ resizeMode: "cover", width: 50, height: 50 }}
                            />
                        </View>
                    </Link>
                    <View className="px-4">
                        <View className="flex-row gap-4">
                            <Text className="font-bold text-white">Testador12</Text>
                            <Pressable>
                                <Text className="text-gray-500">@testador</Text>
                            </Pressable>
                        </View>
                        <Text className="text-white text-1xl">Estou estudando programação</Text>
                    </View>
                </View>
                <View className="w-full h-50 flex justify-center overflow-hidden items-center rounded-lg border border-white">
                    <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_c9PlH0OpgpcH9LfY9EP3J6xYpExQCO2EfA&s' }}
                        className="w-full h-56 z-30" style={{ resizeMode: 'cover' }} />
                </View>
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
        </SafeAreaView>
    )
}