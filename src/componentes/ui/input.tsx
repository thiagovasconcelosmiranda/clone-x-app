import { Text, TextInput, View } from "react-native";
import { Ionicons, Entypo, EvilIcons } from '@expo/vector-icons';

type Props = {
    value: string;
    onChange?: (newValue: any) => void;
    placeholder: string;
    color?: string;
    password?: boolean;
    filled?: boolean;
    icon?: string;
    size?: string;
}

export const Input = ({ value, onChange, placeholder, color, password, filled, icon, size }: Props) => {
    return (
        <View
            className={`has-[:focus]:border-white flex flex-row items-center px-4 w-${size} h-14 rounded-3xl border-2 border-gray-300 ${filled && 'bg-gray-700'}`}>
            <TextInput
                className=":place flex-1 outline-none bg-transparent h-full px-4 text-white"
                placeholder={placeholder}
                placeholderTextColor={color}
                onChange={onChange}
                value={value}
                secureTextEntry={password}
            />
            {icon === "user" && (<EvilIcons name="user" size={25} color={color} />)}
            {icon === "envelope" && (<EvilIcons name="envelope" size={25} color={color} />)}
            {icon === "password" && (<Entypo name="eye" size={25} color={color} />)}
            {icon === "search" && (<Ionicons name="search" size={25} color={color} />)}
        </View>
    )
}