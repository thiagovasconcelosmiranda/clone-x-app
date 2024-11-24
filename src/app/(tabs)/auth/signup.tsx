import { SignUp } from "@/src/components/auth/signup";
import { Logo } from "@/src/components/ui/Logo";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Signup() {
   
   return (
      <View className="flex-1 flex justify-center items-center bg-black">
         <View className="w-80 h-auto flex justify-center gap-4">
            <Logo size={60} />
            <Text className="text-white font-bold">Faça seu cadastro</Text>
            <View className=" gap-10">
                <SignUp/>
               <View className="flex justify-center items-center flex-row gap-2">
                  <Text className="text-gray-400 text-center">já tem um conta?</Text>
                  <Link className="text-white font-bold" href={"/auth/signin"}> Faça o login</Link>
               </View>
            </View>
         </View>
      </View>
   )
}