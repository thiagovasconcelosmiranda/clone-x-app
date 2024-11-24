import { api } from "@/data/api";
import apiTweet from "@/data/api-tweet";
import { TweetItem } from "@/src/components/tweet/tweet-item";
import { Input } from "@/src/components/ui/input";
import { Loading } from "@/src/components/ui/loading";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link , useLocalSearchParams} from "expo-router";
import { useState } from "react";
import { ScrollView, View } from "react-native";


export default function Search(){
    const { search } = useLocalSearchParams();

    const [q, setQ] = useState('#estudar');
    const [tweet, setTweet] = useState([]);
    const [is_loading, setIs_Loading] = useState(false);


    const searchz = async () => {
        setIs_Loading(true);
        const token = await AsyncStorage.getItem('token');
  
        if(token){
          const res = await apiTweet.tweetsearch(token, q);
          if(res.tweets.length > 0){
            setTweet(res.tweets)
            setIs_Loading(false);
          }else{
            setIs_Loading(false);
          }
        }
    }

    return (
        <View className="bg-black flex-1 p-2">
        <View className="flex-row gap-4 px-4 justify-between items-center">
            <Link href={'/dashboard'}>
                <View>
                    <Ionicons name="arrow-back" size={30} color="#fff" />
                </View>
            </Link>
            <Input
                placeholder="Buscar Z"
                value={q}
                onChangeText={e => setQ(e)}
                icon="search"
                color="#fff"
                size="w-64"
                onEnter={searchz}
                border
            />
        </View>
        <ScrollView className="h-80">
            {!is_loading ? (
                <>
                 {tweet.map((item, k)=>(
                <TweetItem key={k} tweet={item}/>
             ))}
                </>
              
            ) : (
                <View className="h-96 flex justify-center items-center">
                      <Loading size="large" color="#fff"/>
                </View>
            )}
            
        </ScrollView>
    </View>
    )
}