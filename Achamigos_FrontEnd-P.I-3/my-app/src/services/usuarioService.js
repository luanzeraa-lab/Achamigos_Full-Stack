import api from "./api";

const usuarioService = {
  getAll: async () => (await api.get('/users')).data,
  getById: async (id) => (await api.get(`/users/${id}`)).data,
  create: async (data) => (await api.post('/users', data)).data,
  update: async (id, data) => (await api.put(`/users/${id}`, data)).data,
  remove: async (id) => (await api.delete(`/users/${id}`)).data
};

export default usuarioService ;
