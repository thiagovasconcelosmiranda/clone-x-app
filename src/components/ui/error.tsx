import { Text, View } from "react-native"

type Props = {
    text: string;
    color?: boolean;
    size?: string;

}
export const ErrorInput = ({text, color, size }: Props) =>{
    return(
        <View>
           <Text className={`${size} text-1xl ${!color ? `text-red-300`: 'color-green-300'}`}>{text}</Text>
        </View>
    )
}