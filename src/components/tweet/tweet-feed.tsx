import { Pressable, Text, View } from "react-native";
import { TweetItem } from "./tweet-item";
import { useEffect, useState } from "react";
import apiTweet from '../../../data/api-tweet';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Loading } from "../ui/loading";

type Props = {
  page: number ;
}

export const TweetFeed = ({page}: Props) => {
  const [tweet, setTweet] = useState([]);
  const [is_loading, setIs_loading] = useState(false);

  useEffect(() => {
    getFeed();
  }, [page]);

  const getFeed = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      const res = await apiTweet.tweetfeed(token, page);
    
      if (res.tweets.length > 0) {
        setTweet(res.tweets);
        setIs_loading(true);
        const numPage = Math.round(res.countTweet / res.perPage); 
      } else{
        setIs_loading(false);
      }
      setIs_loading(true);
    }
  }
  return (
    <View>
      {is_loading ? (
        <View>
          {tweet.map((item, k) => (
            <TweetItem key={k} tweet={item}/>
          ))}
        </View>
      ) : (
        <View className="h-52 flex justify-center items-center top-20">
          <Loading size="large" color="#fff" />
        </View>
      )}
     
    </View>
  )
}