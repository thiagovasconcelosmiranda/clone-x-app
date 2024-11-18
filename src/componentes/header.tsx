import { Image, Pressable, Text, View } from "react-native"
import { Logo } from "./ui/Logo"
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Menu } from "./ui/menu";

type Props = {
    search?: boolean;
}

export const Header = ({ search }: Props) => {
    return (
        <SafeAreaView >
            <View className=" flex flex-row justify-between items-center px-4 p-3 fixed bg-transparent">
                <View className="flex-row">
                    <Link href={'/dashboard'}>
                        <View className="px-4">
                            <Ionicons name="arrow-back" size={30} color="#fff" />
                        </View>
                    </Link>
                        <View className="w-10 h-10 rounded-full flex justify-center items-center overflow-hidden bg-transparent">
                            <Image
                                source={require('../../assets/images/default.png')}
                                style={{ width: 35, height: 35, resizeMode: 'cover' }}
                            />
                        </View>
                </View>

                <View className="flex flex-row items-center gap-4">
                    {!search ? (
                        <>
                            <Pressable>
                                <Logo size={35} />
                            </Pressable>
                            <Pressable>
                                <Text className="text-white">Fazer um update</Text>
                            </Pressable>
                        </>
                    ) : (
                        <>
                            <Link href={'/search'}>
                                <Ionicons name="search" size={30} color="#fff" />
                            </Link>
                        </>
                    )}

                    <Pressable>
                        <FontAwesome6 name="ellipsis-vertical" size={20} color="#fff" />
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}