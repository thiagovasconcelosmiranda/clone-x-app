import { View } from "react-native";
import { ErrorInput } from "../ui/error";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { router } from "expo-router";
import { useState, useContext } from "react";
import apiAuth from "../../../data/api-auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "@/src/contexts/UserContext";
import { Loading } from "../ui/loading";

export const SignUp = () => {
   const [nameValue, setNameValue] = useState('');
   const [errorName, setErrorName] = useState(false);
   const [emailValue, setEmailValue] = useState('');
   const [errorEmail, setErrorEmail] = useState(false);
   const [passwordValue, setPasswordValue] = useState('');
   const [errorPassword, setErrorPassword] = useState(false);
   const { setUser } = useContext(UserContext);
   const [is_loading, setIs_loading] = useState(false);
   const [access, setAccess] = useState(null);

   const handleButtonSignup = async () => {
      setIs_loading(true);
      const res = await apiAuth.signup(nameValue, emailValue, passwordValue);
      if (res.token) {
         await AsyncStorage.setItem('token', res.token);
         setUser(res.user);
         router.replace('/dashboard');
      }
      if (res.error) {

         setIs_loading(false);
         errorResponse(res.error);
      }
   }

   const errorResponse = (error: any) => {
      setErrorName(error.name ? error.name : null);
      setErrorEmail(error.email ? error.email : null);
      setErrorPassword(error.password ? error.password : null);
      console.log(error);
      setAccess(error === 'Acesso negado' ? error : null);
      console.log(error);
   }

   return (
      <View className="gap-8">
         {access && (
            <View>
               <ErrorInput text={access} />
            </View>
         )}

         <View>
            <Input
               placeholder="Digite seu name"
               value={nameValue}
               onChangeText={(e) => setNameValue(e)}
               icon="user"
               color="#fff"
               border
            />
            {errorName && (
               <ErrorInput text={errorName} />
            )}
         </View>
         <View>
            <Input
               placeholder="Digite seu email"
               value={emailValue}
               onChangeText={(e) => setEmailValue(e)}
               icon="envelope"
               color="#fff"
               border
            />
            {errorEmail && (
               <ErrorInput text={errorEmail} />
            )}
         </View>
         <View>
            <Input
               placeholder="Digite sua senha"
               value={passwordValue}
               onChangeText={(e) => setPasswordValue(e)}
               password
               icon="password"
               color="#fff"
               border
            />
            {errorPassword && (
               <ErrorInput text={errorPassword} />
            )}
         </View>
         <Button
            text={is_loading ? <Loading size={'large'} color="black" /> : 'Cadastrar'}
            onPress={handleButtonSignup}
         />
      </View>
   )
}