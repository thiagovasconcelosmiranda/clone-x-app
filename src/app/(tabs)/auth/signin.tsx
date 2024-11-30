import { SignIn } from "@/src/components/auth/signin";
import { Logo } from "@/src/components/ui/Logo";
import { Link} from "expo-router";
import { Text, View } from "react-native";

export default function Signin() {
  return (
    <View className="flex-1 flex justify-center items-center bg-black">
      <View className="w-80 h-auto flex justify-center gap-4">
        <Logo size={60} />
        <Text className="text-white font-bold">Entre em sua conta</Text>
        <View className="gap-10">
          <SignIn />
          <View className="flex justify-center items-center flex-row gap-2">
            <Text className="text-gray-400 text-center font-bold"> Ainda não tem uma conta?</Text>
            <Link className=" text-white font-bold" href={"/auth//signup"}>Cadastre-se</Link>
          </View>
        </View>
      </View>
    </View>
  )
}