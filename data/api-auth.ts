import { api } from "./api";


export default {
    signin: async (email: string, password: string) => {
       const data = new FormData();
       data.append('email', email);
       data.append('password', password)

        var req = await fetch(`${api}/auth/signin`,{
            method: 'POST',
            body: data
          });
          const json =  req.json();
          return json;
    },

    signup: async ( name: string, email: string, password: string) => {
      const data = new FormData();
      data.append('name', name);
      data.append('email', email);
      data.append('password', password);
    
        const req = await fetch(`${api}/auth/signup`,{
          method: 'POST',
          body: data
        });
        const json = await req.json();
        return json;
    }
}