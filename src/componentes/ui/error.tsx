import { Text, View } from "react-native"

type Props = {
    text: string;
    color?: boolean

}
export const ErrorInput = ({text, color}: Props) =>{
    return(
        <View>
           <Text className={!color ? `text-red-400`: 'color-green-300'}>Campos obrigatório*</Text>
        </View>
    )
 
}