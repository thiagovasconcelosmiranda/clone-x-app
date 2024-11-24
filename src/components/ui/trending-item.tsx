import { Link } from "expo-router"
import { Pressable, Text, View } from "react-native"

type Props = {
  trend: any;
}

export const TrendingItem = ({ trend}: Props) => {
  return (
    <Link href={`/dashboard/${'estudar'}`}>
      <Text className="text-gray-300 text-2xl underline">{trend.hashtag}</Text>
    </Link>

  )
}