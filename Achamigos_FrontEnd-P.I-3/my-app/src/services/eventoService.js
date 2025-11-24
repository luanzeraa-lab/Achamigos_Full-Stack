import api from "./api";

const eventosService = {
  getAll: async () => (await api.get(`${process.env.NEXT_PUBLIC_API_URL}/api/eventos`)).data,
  getById: async (id) => (await api.get(`${process.env.NEXT_PUBLIC_API_URL}/api/eventos${id}`)).data,

   create: async (data) =>
    (await api.backend.post(`${process.env.NEXT_PUBLIC_API_URL}/api/eventos`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'x-api-key': process.env.NEXT_PUBLIC_API_KEY
      },
    })).data,

  update: async (id, data) => (await api.put(`${process.env.NEXT_PUBLIC_API_URL}/api/eventos/${id}`, data)).data,
  remove: async (id) => (await api.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/eventos/${id}`)).data
};

export default eventosService ;
