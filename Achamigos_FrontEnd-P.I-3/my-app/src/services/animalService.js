import api from "./api";

const animalService = {
  getAll: async () => (await api.get('/animal')).data,
  getById: async (id) => (await api.get(`/animal/${id}`)).data,
  create: async (data) => (await api.post('/animal', data)).data,
  update: async (id, data) => (await api.put(`/animal/${id}`, data)).data,
  remove: async (id) => (await api.delete(`/animal/${id}`)).data
};

export default animalService ;
