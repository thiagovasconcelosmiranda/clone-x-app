import { SignIn } from "@/src/components/auth/signin";
import { Button } from "@/src/components/ui/button";
import { ErrorInput } from "@/src/components/ui/error";
import { Input } from "@/src/components/ui/input"
import { Logo } from "@/src/components/ui/Logo"
import { Link, router } from "expo-router";
import { useState } from "react"
import { Text, View } from "react-native"

export default function Signin() {
  const [nameValue, setNameValue] = useState('');
  const [errorName, setErrorName] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');
  const [errorPassword, setErrorPassword] = useState(false);

  const handleButtonSignup = () => {
     router.replace('/dashboard');
  }
  return (
    <View className="flex-1 flex justify-center items-center bg-black">
      <View className="w-80 h-auto flex justify-center gap-4">
        <Logo size={60} />
        <Text className="text-white">Entre em sua conta</Text>
        <View className="gap-10">
          <SignIn />
          <View className="flex justify-center items-center flex-row gap-2">
            <Text className="text-gray-300 text-center font-bold"> Ainda não tem uma conta?</Text>
            <Link className=" text-white " href={"/auth//signup"}>Cadastre-se</Link>
          </View>
        </View>
      </View>
    </View>
  )
}