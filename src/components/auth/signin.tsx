import { View } from "react-native"
import { ErrorInput } from "../ui/error"
import { Input } from "../ui/input"
import { useState, useContext } from "react";
import { router } from "expo-router";
import { Button } from "../ui/button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from '../../../data/api-auth';
import { UserContext } from "@/src/contexts/UserContext";
import { Loading } from "../ui/loading";

export const SignIn = () => {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const {setUser} = useContext(UserContext);
    const [is_loading, setIs_loading] = useState(false);
    const [disabled, setDisable] = useState(false);

    const handleButtonSignin = async () => {
        setIs_loading(true);
        setDisable(true);
        const res = await api.signin(emailValue, passwordValue);
         if(res.token){
            await AsyncStorage.setItem('token', res.token);
            setUser(res.user);
            router.replace('/dashboard');
         }
         if(res.error){
             console.log(res.error);
             setIs_loading(false);
             setDisable(false);
         }
    }
    return (
        <View className="gap-8">
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
                    <ErrorInput text="Campos obrigatório*" />
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
                    <ErrorInput text="Campos obrigatório*" />
                )}
            </View>
            <Button
                 text={is_loading ?<Loading size={'large'} color="black"/> : 'Acessar'}
                onPress={handleButtonSignin}
                disabled={disabled}
                disabledStyle={disabled}
            />
        </View>
    )
}