import { View, Text } from "react-native"
import { ErrorInput } from "../ui/error"
import { Input } from "../ui/input"
import { useState, useContext, useEffect } from "react";
import { router } from "expo-router";
import { Button } from "../ui/button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from '../../../data/api-auth';
import { UserContext } from "@/src/contexts/UserContext";
import { Loading } from "../ui/loading";
import {Checkbox} from 'expo-checkbox';

export const SignIn = () => {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [errorEmail, setErrorEmail] = useState(null);
    const [errorPassword, setErrorPassword] = useState(null);
    const [access, setAccess] = useState(null);
    const { setUser } = useContext(UserContext);
    const [is_loading, setIs_loading] = useState(false);
    const [disabled, setDisable] = useState(false);
    const [isCheck, setIsCheck] = useState(false);

    useEffect(()=>{
        verifyAccess();
    },[]);

    const verifyAccess = async () => {
     const email = await AsyncStorage.getItem('email');
     const password = await AsyncStorage.getItem('password');

     if(email && password){
        setIsCheck(true);
        setEmailValue(email);
        setPasswordValue(password);
     }
    }


    const handleButtonSignin = async () => {
        setIs_loading(true);
        setDisable(true);
        const res = await api.signin(emailValue, passwordValue);
        if (res.token) {
            await AsyncStorage.setItem('token', res.token);
            setUser(res.user);
            registerUser();
            router.replace('/dashboard');
        }
        if (res.error) {
            setIs_loading(false);
            setDisable(false);
            errorInput(res.error);

        }
    }


    
    const registerUser = async () => {
       if(isCheck){
          await AsyncStorage.setItem('email', emailValue);
          await AsyncStorage.setItem('password', passwordValue);
      }else{
        await AsyncStorage.setItem('email', '');
          await AsyncStorage.setItem('password', '');
      }
    }

    const errorInput = (error: any) => {
        setErrorEmail(error.email ? error.email : null);
        setErrorPassword(error.password ? error.password : null);
        console.log(error);
         setAccess(error === 'Acesso negado' ? error : null);
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
                <View className="flex-row gap-3 px-4 top-3">
                    <Checkbox
                     value={isCheck}
                     onValueChange={setIsCheck}
                    />
                   <Text className="text-white">Manter logado</Text>
                </View>
            </View>
            <Button
                text={is_loading ? <Loading size={'large'} color="black" /> : 'Acessar'}
                onPress={handleButtonSignin}
                disabled={disabled}
                disabledStyle={disabled}
            />
        </View>
    )
}