import { api } from "./api";

export default {
    suggestion: async (token: string) => {
      const req = await fetch(`${api}/suggestions`,{
        headers:{
            'Authorization':`Bearer ${token}`
        }
      });
      const json = await req.json();
      return json;
    }
}