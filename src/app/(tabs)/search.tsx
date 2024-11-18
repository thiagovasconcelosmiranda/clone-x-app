import { TweetItem } from "@/src/componentes/tweet/tweet-item";
import { Input } from "@/src/componentes/ui/input";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";

export default function Search() {
    const [searchValue, setSearchValue] = useState('');
    return (
        <View className="bg-black flex-1 p-4">
            <View className="flex-row gap-4 px-7 justify-between items-center">
                <Link href={'/usuario'}>
                    <View className="px-4">
                        <Ionicons name="arrow-back" size={30} color="#fff" />
                    </View>
                </Link>
                <Input
                    placeholder="Pesquisar posts de @testador"
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                    color="#fff"
                    icon="search"
                    size="56"
                />
            </View>
            <ScrollView>
                <TweetItem />
                <TweetItem />
                <TweetItem />
            </ScrollView>
        </View>
    )

}