import { View } from "react-native"
import { ErrorInput } from "../ui/error"
import { Input } from "../ui/input"
import { useState } from "react";
import { router } from "expo-router";
import { Button } from "../ui/button";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const SignIn = () => {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);

    const handleButtonSignin = async () => {
    
        const token = await AsyncStorage.setItem('token','12541487777744wnasahsjabasb');
        router.replace('/dashboard');
    }
    return (
        <View className="gap-8">
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
            <Button text="Acessar"
                onPress={handleButtonSignin}
            />
        </View>
    )
}