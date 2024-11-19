import { Header } from "@/src/components/header";
import { Logo } from "@/src/components/ui/Logo";
import { router} from "expo-router";
import { useEffect } from "react";
import { View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Loading } from "@/src/components/ui/loading";


export default function HomeScreen() {
  useEffect(()=>{
       verify();
  },[]);

  const verify = async () => {
    const token = await AsyncStorage.getItem('token');

    if(token){
      router.replace('/dashboard');
    }else{
      router.replace('/auth/signin');
    }
  }

  return (
    <View className="flex-1 flex flex-col justify-center items-center bg-black">
      <Logo size={80}/>
   </View>
  );
}

