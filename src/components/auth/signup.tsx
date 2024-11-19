import { View } from "react-native"
import { ErrorInput } from "../ui/error"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { router } from "expo-router"
import { useState } from "react"

export const SignUp = () => {
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
      <View className="gap-8">
         <View>
            <Input
               placeholder="Digite seu name"
               value={nameValue}
               onChange={(e) => setNameValue(e)}
               icon="user"
               color="#fff"
            />
            {errorName && (
               <ErrorInput text="Campos obrigatório*" />
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
            {errorEmail && (
               <ErrorInput text="Campos obrigatório*" />
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
            {errorPassword && (
               <ErrorInput text="Campos obrigatório*" />
            )}
         </View>
         <Button
            text="Acessar"
            onPress={handleButtonSignup}
         />
      </View>
   )
}