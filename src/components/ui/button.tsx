import { View, Pressable, Text } from "react-native";

type Props = {
  text: string;
  onPress?: () => void,
  size?: string
}

export const Button = ({text, onPress, size}:Props) => {
    return (
        <View className={`flex justify-center items-center bg-white rounded-3xl w-${size} h-10`}>
            <Pressable onPress={onPress} className="">
                <Text className="text-black">{text}</Text>
            </Pressable>
        </View>
    )
}