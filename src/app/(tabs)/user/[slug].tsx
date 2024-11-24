import { Header } from "@/src/components/header";
import { TweetItem } from "@/src/components/tweet/tweet-item";
import { Button } from "@/src/components/ui/button";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import apiUser from '../../../../data/api-user';
import { UserType } from "@/types/user";
import url from "@/src/utils/url";
import { Loading } from "@/src/components/ui/loading";
import { UserContext } from "@/src/contexts/UserContext";

type User = {
   user: UserType;
   followersCount: string;
   followingCount: string;
}

export default function User() {
   const [tweet, setTweet] = useState([]);
   const [data, setData] = useState<User>();
   const [avatar, setAvatar] = useState('');
   const [cover, setCover] = useState('');
   const [is_follow, setIs_Follow] = useState(false);
   const [is_loading, setIs_Loading] = useState(false);
   const { slug } = useLocalSearchParams();
   const { user } = useContext(UserContext);

   useEffect(() => {
      getUser();
   }, []);

   const getUser = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
         const res = await apiUser.getUser(token, slug);
         setData(res);
         setAvatar(url.avatar(res.user));
         setCover(url.cover(res.user));
         myTweet(token);
         if (user.slug === slug) {
            setIs_Follow(true);
         }

      }
   }
   const myTweet = async (token: string) => {
      const res = await apiUser.getMyTweet(token, slug);
      if (res.tweets.length > 0) {
         setTweet(res.tweets);
         setIs_Loading(true);
      }
   }

   const handleButtonEdit = () => {
      router.replace(`/user/edit/user`);
   }

   const handleButtonFollow = () => {
      alert('Seguir');
   }

   return (
      <View className="flex-1 bg-black">
         <Header
            search
            back
         />
         <ScrollView>
            <View className="w-full h-44 border bg-gray-400 relative">
               <Image
                  source={{ uri: cover }}
                  className="w-full h-44"
               />
            </View>
            <View className=" w-24 h-24 rounded-full flex justify-center items-center overflow-hidden border-2 border-white  bg-blue-500 absolute top-32 left-10">
               <Image
                  source={{ uri: avatar }}
                  className="w-24 h-24"
                  style={{ resizeMode: 'cover' }}
               />
            </View>
            <View className=" flex-row justify-end px-8 p-4">
               {is_follow ? (
                  <Button text="Editar perfil" size="40" onPress={handleButtonEdit} />
               ) : (
                  <Button text="Seguir" size="40" onPress={handleButtonFollow} />
               )}
            </View>
            <View className=" px-8 p-3">
               <View className="">
                  <Text className="text-white font-bold text-2xl">{data?.user.name}</Text>
                  <Text className="text-gray-400 font-bold text-2xl">@{data?.user.slug}</Text>
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
                     <Text className="text-gray-400">{data?.followersCount} Seguindo</Text>
                     <Text className="text-gray-400">{data?.followingCount} Seguidores</Text>
                  </View>
               </View>
               <View className=" px-2 top-10 flex-row gap-4">
                  <Pressable>
                     <Text className="text-white text-1xl"> Publicações</Text>
                  </Pressable>
                  <Pressable>
                     <Text className="text-white text-1xl">Respostas</Text>
                  </Pressable>
                  <Pressable>
                     <Text className="text-white text-1x1">Destaques</Text>
                  </Pressable>

               </View>
            </View>

            {is_loading ? (
               <>
                  {tweet.map((item, k) => (
                     <TweetItem key={k} tweet={item} />
                  ))}
               </>
            ) : (
               <View className="h-52 flex-row justify-center items-center">
                  <Loading size="large" color="#fff" />
               </View>
            )}
         </ScrollView>
      </View>
   )
}
