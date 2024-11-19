import { Header } from "@/src/components/header";
import { TweetItem } from "@/src/components/tweet/tweet-item";
import { Button } from "@/src/components/ui/button";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import {router, useLocalSearchParams} from 'expo-router';

export default function User() {
   const is_love = false;
   const {slug} = useLocalSearchParams();
   
   const HandleButtonEdit = () => {
      router.replace('/user/edit/12');
   }

   return (
      <View className="flex-1 bg-black">
         <Header 
         search
         back
         />
            <ScrollView>
               <View className="w-full h-44 border bg-gray-400 relative">
                  <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_c9PlH0OpgpcH9LfY9EP3J6xYpExQCO2EfA&s' }}
                     className="w-full h-44"
                  />
               </View>
               <View className=" w-24 h-24 rounded-full flex justify-center items-center overflow-hidden bg-black bg-transparent absolute top-32 left-10">
                  <Image
                     source={require('../../../../assets/images/default.png')}
                     className="w-24 h-24"
                     style={{ resizeMode: 'cover' }}
                  />
               </View>
               <View className=" flex-row justify-end px-4 p-4">
                  <Button text="Editar perfil" size="40" onPress={HandleButtonEdit} />
               </View>

               <View className=" px-8 p-3">
                  <View className="">
                     <Text className="text-white font-bold">Thiago Vascoconcelos</Text>
                     <Text className="text-gray-400 font-bold">@{slug}</Text>
                  </View>
                  <View className="p-4 top-5 gap-4">
                     <View className="flex-row gap-3 items-center">
                        <AntDesign name="enviromento" size={18} color="gray" />
                        <Text className="text-white items-center">Marília-Brasil</Text>
                     </View>
                     <View className="flex-row gap-3 items-center">
                        <FontAwesome5 name="golf-ball" size={18} color="gray" />
                        <Text className="text-white">Nascido em 5 maio de 1984</Text>
                     </View>
                     <View className="flex-row gap-3 items-center">
                        <AntDesign name="calendar" size={18} color="gray" />
                        <Text className="text-white">Entrou em janeiro de 2023</Text>
                     </View>
                     <View className="flex-row items-center gap-10">
                        <Text className="text-gray-400">55 Seguindo</Text>
                        <Text className="text-gray-400">55 Seguidores</Text>
                     </View>
                  </View>
                  <View className=" px-2 top-10 flex-row gap-4">
                     <Pressable>
                        <Text className="text-white"> Publicações</Text>
                     </Pressable>
                     <Pressable>
                        <Text className="text-white">Respostas</Text>
                     </Pressable>
                     <Pressable>
                        <Text className="text-white">Destaques</Text>
                     </Pressable>
                  </View>

                  <TweetItem />

               </View>
            </ScrollView>
         </View>
   )
}