import { Text, View, ActivityIndicator } from "react-native"

type Props = {
  size?: any;
  color?: string
}

export const Loading = ({size, color}: Props) => {
    return (
        <View className="">
           <ActivityIndicator size={size} color={color}/>
        </View>
    )
}