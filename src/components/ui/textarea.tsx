import { TextInput, View } from "react-native"

type Props = {
  onChangeText?: (newValue: any) => void;
  value: string;
  placeholder: string;
  placeholderTextColor: string;
  border?: boolean
}

export const Textarea = ({onChangeText, value, placeholder, placeholderTextColor, border}: Props) => {
    return (
        <View className={`h-32 ${border && ' border-2 border-gray-300'} rounded-lg`}>
            <TextInput 
            className="text-white text-2xl px-4"
            value={value}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            multiline={true}
            numberOfLines={10}
            onChangeText={onChangeText}
            />
        </View>
    )
}