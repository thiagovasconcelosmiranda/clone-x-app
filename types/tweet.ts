import { User } from "./user";

export type Tweet = {
    id: number;
    user: User;
    body: string;
    image?: string;
    likeCount: number;
    commentCount: number;
    retweetCount: number;
    liked: boolean;
    answer?: any;
    retweeted: boolean;
    dataPost: Date;
    createAt: Date
}