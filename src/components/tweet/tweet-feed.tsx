import { ScrollView, Text, View } from "react-native";
import { TweetItem } from "./tweet-item";
import { useEffect, useState } from "react";
import apiTweet from '../../../data/api-tweet';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Loading } from "../ui/loading";
import { PageItem } from "../ui/page-item";

type Props = {
  page: number;
}

export const TweetFeed = () => {
  const [tweet, setTweet] = useState([]);
  const [is_loading, setIs_loading] = useState(false);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  let array = [];

  useEffect(() => {
    getFeed(currentPage);
  }, [currentPage]);

  const getFeed = async (page: number) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
   
      const res = await apiTweet.tweetfeed(token, page);
    
      if (res.tweets.length > 0) {
        setIs_loading(true);
        setTweet(res.tweets);

        const numPage = Math.round(res.countTweet / res.perPage);
        listPages(numPage);
      } else {
        setIs_loading(false);
      }
    }
  }

  const listPages = (num: number) => {
    for (let i = 0; i < num; i++) {
      array.push(i);
      setPages(array);
    }
  }

  return (
    <View>
      <ScrollView className="h-96">
        {is_loading ? (
          <View>
            {tweet.map((item, k) => (
              <TweetItem key={k} tweet={item} currentPage={currentPage} />
            ))}
          </View>
        ) : (
          <View className="h-52 flex justify-center items-center top-20">
            <Loading size="large" color="#fff" />
          </View>
        )}
      </ScrollView>
      <View className="flex-row gap-4 justify-center items-center p-2">
        {pages.map((item, k) => (
          <PageItem
            page={item + 1}
            key={k}
            onPress={() => setCurrentPage(item)}
            active={item == currentPage && true}
          />
        ))}
      </View>
    </View>
  )
}