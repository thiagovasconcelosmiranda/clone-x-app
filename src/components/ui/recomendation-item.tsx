import { Image, Text, View } from "react-native"
import { Button } from "./button"

export const RecommendationItem = () => {
   return (
    <View className="p-4 flex-row gap-2 items-center">
       <View>
        <Image
           source={require('../../../assets/images/default.png')}
           style={{width: 50, height: 50}}/>
       </View>

       <View className="p-2">
           <Text className="text-white">Thiago Vasconcelos</Text>
           <Text className="text-gray-400">@desenvolvedor</Text>
       </View>
       <View>
          <Button text="Seguir" size="32"/>
       </View>
    </View>
   )
}