import { api } from "./api"

export default {
    trend: async (token: string) => {
      const req = await fetch(`${api}/trending`,{
        headers:{
          'Authorization':`Bearer ${token}`
        }
      });
      const json = await req.json();
      return json;
    }
}