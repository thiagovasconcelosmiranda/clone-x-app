import { api } from "./api";

type ImageType = {
    uri: string;
    name: string;
    filename: number;
    type: string
}

export default {
    tweetfeed: async (token: string, page: number) => {
        const req = await fetch(`${api}/feed?page=${page}`, {
            method: 'get',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });
        const json = await req.json();
        return json;
    },

    tweetsearch: async (token: string, q: string) => {
        const req = await fetch(`${api}/search?q=${q}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const json = await req.json();
        return json;
    },

    addtweetpost: async (token: string, body: string, image: any) => {

        const data = new FormData();
        data.append('body', body);
        if (image) {
            data.append('image', {
                uri: image.uri,
                name: image.fileName,
                filename: image.fileName,
                type: image.mimeType
            });
        }

        const req = await fetch(`${api}/tweet`, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            },
            body: data
        })

        const json = await req.json();
        return json;
    },
    tweetid: async (token: string, id: any) => {
        const req = await fetch(`${api}/tweet/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        const json = await req.json();
        return json;
    },
    postanswer: async (token: string, id: number, body: string, userSlug: string, image: any) => {
        const data = new FormData();
        data.append('body', body);
        data.append('userSlug', userSlug);

        if (image) {
            data.append('image', {
                uri: image.uri,
                name: image.fileName,
                filename: image.fileName,
                type: image.mimeType
            });
        }

        const req = await fetch(`${api}/tweet/${id}/answer`, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            },
            body: data
        });
        const json = await req.json();
        return json;
    }
}