import { Link } from "expo-router"
import { Pressable, Text, View } from "react-native"

type Props = {
  trend: string;
}

export const TrendingItem = ({trend}: Props) => {
    return (
        <View>
            <Link href={'/dashboard'}>
              <Text className="text-gray-300 text-2xl underline">{trend}</Text>
            </Link>
            
        </View>
    )
}