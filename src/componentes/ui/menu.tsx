import { Link } from "expo-router"
import { Text, View } from "react-native"

export const Menu = () =>{
  return (
    <View className="w-40 h-auto px-10 p-5 gap-4 flex items-center right-96 bg-white fixed top-8 z-50">
        <Link className="flex-row gap-4" href={'/dashboard'}>
           <Text className="font-bold text-2xl">Itens</Text>
        </Link>
        <Link className="flex-row gap-4" href={'/usuario'}>
           <Text className="font-bold text-2xl">Perfil</Text>
        </Link>
        <Link className="flex-row gap-4" href={'/Usuario'}>
           <Text className="font-bold text-2xl">Itens</Text>
        </Link>
    </View>
  )
}