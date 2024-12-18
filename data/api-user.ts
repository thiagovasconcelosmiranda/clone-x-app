import { api } from "./api"

export default {
  getUser: async (token: string, slug: any) => {
    const req = await fetch(`${api}/user/${slug}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const json = await req.json();
    return json;
  },

  getMyTweet: async (token: string, slug: any, page: number) => {
    const req = await fetch(`${api}/user/${slug}/tweets?page=${page}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const json = await req.json();
    return json;
  },
  addAvatar: async (token: string, slug: string, avatar: any) => {
    const data = new FormData();
    data.append('slug', slug);

    if (avatar) {
      data.append('avatar', {
        uri: avatar.uri,
        name: avatar.fileName,
        filename: avatar.fileName,
        type: avatar.mimeType
      });
    }
    const req = await fetch(`${api}/user/avatar`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      },
      body: data
    });
    const json = await req.json();
    return json;
  },

  addCover: async (token: string, slug: string, cover: any) => {
    const data = new FormData();
    data.append('slug', slug);

    if (cover) {
      data.append('cover', {
        uri: cover.uri,
        name: cover.fileName,
        filename: cover.fileName,
        type: cover.mimeType
      });
    }
    const req = await fetch(`${api}/user/cover`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      },
      body: data
    });

    const json = await req.json();
    return json;
  },
  updateuser: async (token: string, name: string, link: string, bio: string) => {
    const data = new FormData();
    data.append('name', name);
    data.append('link', link);
    data.append('bio', bio);

    const req = await fetch(`${api}/user`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: data
    });

    const json = await req.json();
    return json;
  },
  userfollow: async (token: string, slug: string) => {
    const req = await fetch(`${api}/user/${slug}/follow`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const json = await req.json();
    return json;
  }
}