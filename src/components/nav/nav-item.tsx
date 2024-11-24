import { Link } from "expo-router"
import { Pressable, Text, View } from "react-native"
import { NavProfile } from "./nav-profile"
import { AntDesign, FontAwesome, Fontisto, Ionicons } from "@expo/vector-icons"
import { NavLogout } from "./nav-logout";
import { useContext} from "react";
import { UserContext } from "@/src/contexts/UserContext";

type Props = {
  active?: boolean;
  onPress?: () => void;
}
export const NavItem = ({active, onPress}: Props) => {
   const {user} = useContext(UserContext);

   return (
      <View className={`w-80 h-full px-10 p-5 gap-4 ${active ? 'left-0': 'left-full'} bg-black absolute top-0 z-50`}>
        <View className=" flex-row px-4">
        <NavProfile />
        <Pressable onPress={onPress}>
           <Ionicons name="close" size={30} color="#fff"/>
        </Pressable>
        </View>
         <View className="flex gap-7 top-24">
            <Link href={`/user/${user.slug}`}>
               <View className="flex-row gap-4">
                  <AntDesign name="user" size={25} color='#fff' />
                  <Text className="font-bold text-2xl text-white">Perfil</Text>
               </View>
            </Link>
            <Link href={'/dashboard'}>
               <View className="flex-row gap-4 items-center">
                  <Fontisto name="bookmark" size={25} color='#fff' />
                  <Text className="font-bold text-2xl text-white">Items Salvos</Text>
               </View>
            </Link>
            <Link href={'/dashboard'}>
               <View className="flex-row gap-4 items-center">
                  <AntDesign name="profile" size={25} color='#fff' />
                  <Text className="font-bold text-2xl text-white">Listas</Text>
               </View>
            </Link>
            <Link href={'/dashboard'}>
               <View className="flex-row gap-4 items-center">
                  <FontAwesome name="money" size={25} color='#fff' />
                  <Text className="font-bold text-2xl text-white">Monetização</Text>
               </View>
            </Link>
            <NavLogout/>
         </View>
      </View>
   )
}