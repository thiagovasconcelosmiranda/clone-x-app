import { Button } from "@/src/componentes/ui/button"
import { ErrorInput } from "@/src/componentes/ui/error"
import { Input } from "@/src/componentes/ui/input"
import { Logo } from "@/src/componentes/ui/Logo"
import { Link, router } from "expo-router"
import { useState } from "react"
import { Text, View } from "react-native"

export default function Signup() {
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
            <Text className="text-white">Faça seu cadastro</Text>

            <View className=" gap-10">
               <View>
                  <Input
                     placeholder="Digite seu name"
                     value={nameValue}
                     onChange={(e) => setNameValue(e)}
                     icon="user"
                     color="#fff"
                  />
                   { errorName && (
                     <ErrorInput text="Campos obrigatório*"/>
                  )}
               </View>
               <View>
                  <Input
                     placeholder="Digite seu email"
                     value={emailValue}
                     onChange={(e) => setEmailValue(e)}
                     icon="envelope"
                     color="#fff"
                  />
                  { errorEmail && (
                     <ErrorInput text="Campos obrigatório*"/>
                  )}
               </View>
               <View>
                  <Input
                     placeholder="Digite sua senha"
                     value={passwordValue}
                     onChange={(e) => setPasswordValue(e)}
                     password
                     icon="password"
                     color="#fff"
                  />
                   { errorPassword && (
                     <ErrorInput text="Campos obrigatório*"/>
                  )}
               </View>
               <Button
                  text="Acessar"
                  onPress={handleButtonSignup}
               />
               <View className="flex justify-center items-center flex-row gap-2">
                  <Text className="text-gray-300 text-center font-bold">já tem um conta?</Text>
                  <Link className="text-white font-bold" href={"/auth/signin"}> Faça o login</Link>
               </View>
            </View>
         </View>
      </View>
   )
}