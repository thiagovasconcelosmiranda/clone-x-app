import { Header } from "@/src/components/header";
import { OptionPublic } from "@/src/components/home/option-public";
import { TweetFeed } from "@/src/components/tweet/tweet-feed";
import { Loading } from "@/src/components/ui/loading";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View, ScrollView, Pressable } from "react-native";

export default function HomeScreen() {
  const [optionPage, setOptionPage] = useState(true);
  const [page, setPage] = useState(0);
  const [optionPublic, setOptionPublic] = useState(false);
  const [icon, setIcon] = useState(false);

  return (
    <View className=" flex-1 bg-black">
      <Header navItem />
      <View className="flex-row justify-center gap-20 top-5 p-5 z-30 border-b-2 border-gray-200 bg-black ">
        <Pressable className={` p-2 border-b-4 ${optionPage && 'border-blue-400 text-white'} `} onPress={() => setOptionPage(true)}>
          <Text className={`text-gray-300 text-2xl border-b-4 `}>Pra você</Text>
        </Pressable>
        <Pressable className={`p-2 border-b-4 ${!optionPage && 'border-blue-400 text-white'}`} onPress={() => setOptionPage(false)}>
          <Text className={`text-gray-400 text-2xl `}> Seguindo</Text>
        </Pressable>
      </View>
      {optionPage ? (
        <View>
          <ScrollView className="h-96">
            <TweetFeed page={page} />
          </ScrollView>
        </View>
      ) : (
        <View>
           <ScrollView>

           </ScrollView>
        </View>
      )}
      <OptionPublic />
    </View>
  );
}

