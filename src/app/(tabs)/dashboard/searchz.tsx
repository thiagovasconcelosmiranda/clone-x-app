import { TweetItem } from "@/src/components/tweet/tweet-item";
import { Input } from "@/src/components/ui/input";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";


export default function SearchZ(){
    const [searchValue, setSearchValue] = useState('');
    return (
        <View className="bg-black flex-1 p-2">
        <View className="flex-row gap-4 px-4 justify-between items-center">
            <Link href={'/user/desenvolvedor'}>
                <View>
                    <Ionicons name="arrow-back" size={30} color="#fff" />
                </View>
            </Link>
            <Input
                placeholder="Pesquisar posts de @testador"
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                color="#fff"
                icon="search"
                size="w-64"
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