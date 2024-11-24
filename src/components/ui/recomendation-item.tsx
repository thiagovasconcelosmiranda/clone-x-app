import { Image, Text, View } from "react-native"
import { Button } from "./button"
import { UserType } from "@/types/user"
import url from "@/src/utils/url"
import { Link } from "expo-router"

type Props = {
   user: UserType
}

export const RecommendationItem = ({ user }: Props) => {
   const avatar = url.avatar(user);

   const handleButtonFollow = () => {
      alert('Follow');
   }

   return (
      <Link href={`/user/${user.slug}`}>
         <View className="p-4 flex-row gap-2 items-center">
            <View className="w-14 h-14 rounded-full overflow-hidden border-2 border-white flex justify-center items-center">
               <Image
                  source={{ uri: avatar }}
                  style={{ width: 50, height: 50 }} />
            </View>

            <View className="p-2">
               <Text className="text-white">{user.name}</Text>
               <Text className="text-gray-400">@{user.slug}</Text>
            </View>
            <View>
               <Button
                  text="Seguir"
                  size="32"
                  onPress={handleButtonFollow}
               />
            </View>
         </View>
      </Link>
   )
}