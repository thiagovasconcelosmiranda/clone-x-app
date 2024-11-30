import { api } from "@/data/api";

export default {
    avatar: (user: any) => {
        return `${api}/avatars/${user.slug}/${user.avatar.split('/')[5]}`;
    },
    cover: (user: any) => {
        return `${api}/covers/${user.slug}/${user.cover.split('/')[5]}`;
    },
    post: (tweet: any) => {
        return `${api}/posts/${tweet.user.slug}/${tweet.id}/${tweet.image}`;
    },

    postall: (tweet: any) => {
        return  `${api}/answers/${tweet.user.slug}/${tweet.id}/${tweet.image.split('/')[5]}`
    }
}