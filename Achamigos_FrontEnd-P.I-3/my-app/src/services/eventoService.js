import api from "./api";

const eventosService = {
  getAll: async () => (await api.get('/eventos')).data,
  getById: async (id) => (await api.get(`/eventos/${id}`)).data,

   create: async (data) =>
    (await api.backend.post('/eventos', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'x-api-key': process.env.NEXT_PUBLIC_API_KEY
      },
    })).data,

  update: async (id, data) => (await api.put(`/eventos/${id}`, data)).data,
  remove: async (id) => (await api.delete(`/eventos/${id}`)).data
};

export default eventosService ;
