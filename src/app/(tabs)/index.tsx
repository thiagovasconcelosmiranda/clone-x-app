import { Header } from "@/src/componentes/header";
import { TweetItem } from "@/src/componentes/tweet/tweet-item";
import { Logo } from "@/src/componentes/ui/Logo";
import { router} from "expo-router";
import { useEffect } from "react";
import { Text, View , ScrollView} from "react-native";

export default function HomeScreen() {

  useEffect(()=>{
       verify();
  },[]);

  const verify = async () => {
    setTimeout(()=>{
      router.replace('/auth/signin');
    }, 1000)
  }

  return (
    <View className="flex-1 flex flex-col justify-center items-center bg-black">
      <Logo size={80}/>
   </View>
  );
}

