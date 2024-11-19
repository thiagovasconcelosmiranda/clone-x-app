import { Image, Pressable, Text, View } from "react-native"
import { Logo } from "./ui/Logo"
import { Ionicons, FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import { Link } from "expo-router";
import { NavItem } from "./nav/nav-item";
import { useState } from "react";

type Props = {
    search?: boolean;
    back?: boolean;
    navItem?: boolean
}

export const Header = ({ search, back, navItem }: Props) => {
    const [activeNav, setActiveNav] = useState(false);
    const [activeTimeline, setActiveTimeline] = useState(false);

    const handleClickNav = () => {
        if (activeNav == false) {
            setActiveNav(true);
        } else {
            setActiveNav(false);
        }
    }

    const handleClickTimeline = () => {
        if (activeTimeline == true) {
            setActiveTimeline(false);
        } else {
            setActiveTimeline(true);
        }
    }

    return (
        <>
            <View className="z-50 p-4">
                <View className=" flex flex-row justify-between items-center px-4 p-3 fixed bg-transparent">
                    <View className="flex-row">
                        {back && (
                            <Link href={'/dashboard'}>
                                <View className="px-4">
                                    <Ionicons name="arrow-back" size={30} color="#fff" />
                                </View>
                            </Link>
                        )}

                        <View className="w-10 h-10 rounded-full flex justify-center items-center  bg-transparent">
                            <Pressable onPress={handleClickNav}>
                                <Image
                                    source={require('../../assets/images/default.png')}
                                    style={{ width: 35, height: 35, resizeMode: 'cover' }}
                                />
                            </Pressable>
                        </View>
                    </View>

                    <View className="flex flex-row items-center gap-4">
                        {!search ? (
                            <>
                                <Pressable onPress={handleClickNav}>
                                    <Logo size={30} />
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
                        <Pressable onPress={handleClickTimeline}>
                            <View className=" w-8 h-8  rounded-full justify-center items-center">
                               <FontAwesome6 name="ellipsis-vertical" size={20} color="#fff" />
                            </View>
                        </Pressable>
                    </View>
                </View>
            </View>
            {navItem && (
                <NavItem
                    active={activeNav}
                    onPress={handleClickNav}
                />
            )}
            {activeTimeline && (
                <View className="w-52 bg-white flex justify-center absolute p-2 right-7 top-20">
                    <Link href={'/dashboard/'}>
                        <Text>Configurações de timeline</Text>
                    </Link>
                </View>
            )}
        </>
    )
}