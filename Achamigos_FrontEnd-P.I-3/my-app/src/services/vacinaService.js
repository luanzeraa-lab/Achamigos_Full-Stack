import api from "./api";

const vacinaService = {
  getAll: async () => (await api.get('/api/vacinas')).data,
  getById: async (id) => (await api.get(`/api/vacinas/${id}`)).data,
  create: async (data) => (await api.post('/api/vacinas', data)).data,
  update: async (id, data) => (await api.put(`/api/vacinas/${id}`, data)).data,
  remove: async (id) => (await api.delete(`/api/vacinas/${id}`)).data
};

export default vacinaService ;
