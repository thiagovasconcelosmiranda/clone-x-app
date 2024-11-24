import apiTweet from "@/data/api-tweet";
import { TweetItem } from "@/src/components/tweet/tweet-item";
import { Input } from "@/src/components/ui/input";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

export default function Search() {
    const [searchValue, setSearchValue] = useState('');


    return (
        <View className="bg-black flex-1 p-2">
            <View className="flex-row gap-4 px-4 p-2 justify-between items-center">
                <Link href={'/user/desenvolvedor'}>
                    <View>
                        <Ionicons name="arrow-back" size={30} color="#fff" />
                    </View>
                </Link>
                <Input
                    placeholder="Posts de @testador"
                    value={searchValue}
                    onChangeText={(e) => setSearchValue(e)}
                    color="#fff"
                    icon="search"
                    size="w-64"
                    border
                />
                
            </View>
            <ScrollView>
                
               
            </ScrollView>
        </View>
    )

}