import { View, Pressable, Text } from "react-native";

type Props = {
  text: any;
  onPress?: () => void;
  size?: string;
  disabled?: boolean
  disabledStyle?: boolean
}

export const Button = ({text, onPress, size, disabled, disabledStyle}:Props) => {
    return (
        <View className={`flex justify-center items-center ${disabledStyle ? 'bg-gray-400': 'bg-white'}  px-4 rounded-3xl w-${size} h-10`}>
            <Pressable onPress={onPress} disabled={disabled}>
                <Text className="text-black">{text}</Text>
            </Pressable>
        </View>
    )
}