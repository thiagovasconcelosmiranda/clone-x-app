import { api } from "./api";

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

    tweetLike: async (token: string, id: number) => {
        const req = await fetch(`${api}/tweet/${id}/like`,{
          method:'POST',
          headers:{
            'Authorization': `Bearer ${token}`
          }
        });
        const json = await req.json();
        return json;
    },
    answers: async (token: string, id: string, body: string) => {
        const req = await fetch(`${api}/tweet/${id}/${body}`,{
         method: 'POST',
         headers: {
            'Authorization':`Bearer ${token}`
         }
        });
        const json = await req.json();
        return json;
    }
}