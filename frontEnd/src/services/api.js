
import axios from "axios";

const api = () => {
  return axios.create({ baseURL: "http://localhost:3001" });
};
const endPoints = {
  login: "/login",
  user: {
    getAll: "/users",
    getAllByParams: (params) => `/users?${params}`,
    getOne: () => `/users/`,
    createUser: "/users",
    contato: {
      create: "/contact",
      get: "/contact",
      delete: (userId) => `/contact/${userId}`,
      edit: (userId) => `/contact/${userId}`
    },
  },
};
export const getToken = () =>
  JSON.parse(localStorage.getItem("token"));

export const services = () => {
  
  return {

    login: (data) => api().post(endPoints.login, data),
    user: {

      getOne: () => api().get(endPoints.user.getOne()),
      createUser: (data) => api().post(endPoints.user.createUser, data),
      createContact: (data) =>
        api().post(endPoints.user.contato.create, data, {
          headers: { Authorization: `Bearer ${getToken()}` }
        }),
      getUser: () =>
        api().get(endPoints.user.getOne, {
          headers: { Authorization: `Bearer ${getToken()}` }
        }),
      getUsersContacts: () =>
        api().get(endPoints.user.contato.get, {
          headers: { Authorization: `Bearer ${getToken()}` },
        }),
      updateContact: ( id, data) =>
        api().patch(endPoints.user.contato.edit(id), data, {
          headers: { Authorization: `Bearer ${getToken()}` }
        }),
      deleteContact: (id) =>
        api().delete(endPoints.user.contato.delete(id), {
          headers: { Authorization: `Bearer ${getToken()}` }
        })

    },
  };
};
