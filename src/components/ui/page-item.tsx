import { Pressable, Text, View } from "react-native"

type Props = {
    page?: number;
    active?: boolean
    onPress?: () => void
}

export const PageItem = ({ page, active, onPress}: Props) => {
    return (
        <View>
            <Pressable onPress={onPress}>
                <View 
                className={`w-10 h-10 rounded-full flex justify-center items-center bg-blue-950 ${active && ' border-2 border-white'}`}
                >
                    <Text className="text-white text-2xl">{page}</Text>
                </View>
            </Pressable>
        </View>
    )
}