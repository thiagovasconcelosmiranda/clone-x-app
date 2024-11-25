import { api } from "./api";

export default {
    follow: async (token: string, slug: string) => {
        const req = await fetch(`${api}/user/${slug}/follow`,{
         method: 'POST',
         headers: {
          'Authorization':`Bearer ${token}`
         }
        const json = await req.json();
        return json;
    }
}