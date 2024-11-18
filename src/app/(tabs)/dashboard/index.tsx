import { Header } from "@/src/componentes/header";
import { TweetItem } from "@/src/componentes/tweet/tweet-item";
import { Menu } from "@/src/componentes/ui/menu";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, View, ScrollView, Pressable } from "react-native";

export default function HomeScreen() {
  return (
    <View className=" flex-1 bg-black">
      <Header />
      <ScrollView>
        <TweetItem />
        <TweetItem />
        <TweetItem />
      </ScrollView>

      <Pressable className=" w-16 h-16 rounded-full flex-row justify-center items-center absolute bottom-10 right-10  bg-blue-500">
        <Link href={'/post'}>
          <Ionicons name="add" size={40} color="#fff" />
        </Link>
      </Pressable>
    </View>
  );
}

