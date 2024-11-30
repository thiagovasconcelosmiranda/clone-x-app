import {User} from './user';

export type Answer = {
    body: string;
    image?: string;
    userSlug: string;
    id: number;
    user: User;
}