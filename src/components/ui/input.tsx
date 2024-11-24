import { Text, TextInput, View } from "react-native";
import { Ionicons, Entypo, EvilIcons } from '@expo/vector-icons';

type Props = {
    value: string;
    onChangeText?: (newValue: any) => void;
    placeholder: string;
    color?: string;
    password?: boolean;
    filled?: boolean;
    icon?: string;
    size?: string;
    onEnter?: () => void;
    border?: boolean;
    numberOfLines?: boolean
}

export const Input = ({ value,
    onChangeText,
    placeholder,
    color,
    password,
    filled,
    icon,
    size,
    onEnter,
    border

}: Props) => {

    return (
        <View
            className={`has-[:focus]:border-white flex flex-row items-center px-4 ${size} h-14 rounded-3xl border-2 ${border && 'border-2 border-gray-300'} ${filled && 'bg-gray-700'}`}>
            <TextInput
                className=":place flex-1 outline-none bg-transparent h-full px-4 text-white"
                placeholder={placeholder}
                placeholderTextColor={color}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={password}
                onKeyPress={onEnter}

            />
            {icon === "user" && (<EvilIcons name="user" size={25} color={color} />)}
            {icon === "envelope" && (<EvilIcons name="envelope" size={25} color={color} />)}
            {icon === "password" && (<Entypo name="eye" size={25} color={color} />)}
            {icon === "search" && (<Ionicons name="search" size={25} color={color} />)}
        </View>
    )
}