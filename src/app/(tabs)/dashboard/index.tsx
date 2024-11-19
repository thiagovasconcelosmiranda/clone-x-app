import { Header } from "@/src/components/header";
import { TweetItem } from "@/src/components/tweet/tweet-item";
import { Loading } from "@/src/components/ui/loading";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { Text, View, ScrollView, Pressable } from "react-native";

export default function HomeScreen() {
  const [optionPage, setOptionPage] = useState(true);
  const [is_loading, setIs_loading] = useState(true);

  const handleClickOption = () => {
    alert();
  }

  return (
    <View className=" flex-1 bg-black">
      <Header navItem />
      <View className="flex-row justify-center gap-20 top-5 p-5">
        <Pressable className="p-2" onPress={() => setOptionPage(true)}>
          <Text className={`text-gray-300 text-2xl border-b-4 ${optionPage && 'border-blue-400 text-white'}`}>Pra você</Text>
        </Pressable>
        <Pressable className="p-2" onPress={() => setOptionPage(false)}>
          <Text className={`text-gray-400 text-2xl border-b-4 ${!optionPage && 'border-blue-400 text-white'}`}> Seguindo</Text>
        </Pressable>
      </View>
      {optionPage ? (
        <>
          {is_loading ? (
            <ScrollView>
              <TweetItem />
              <TweetItem />
              <TweetItem />
            </ScrollView>
          ) : (
            <View className="top-44">
              <Loading
                size={'large'}
                color="#fff" />
            </View>
          )}

        </>

      ) : (
        <>
          {is_loading ? (
            <ScrollView>
            </ScrollView>
          ) : (
            <View className="top-44">
              <Loading size={'large'} color="#fff" />
            </View>
          )}

        </>
      )}

      <Pressable className=" w-16 h-16 rounded-full flex-row justify-center items-center absolute bottom-10 right-10  bg-blue-500">
        <Link href={'/post'}>
          <Ionicons name="add" size={40} color="#fff" />
        </Link>
      </Pressable>
    </View>
  );
}

