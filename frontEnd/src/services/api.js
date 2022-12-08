
import axios from "axios";

const api = () => {
  return axios.create({ baseURL: "http://localhost:3001" });
};
const endPoints = {
  login: "/login",
  user: {
    getAll: "/users",
    getOne: () => `/users/`,
    createUser: "/users",
    edit: "/users",
    delete: "/users",
    contato: {
      create: "/contact",
      get: "/contact",
      delete: (userId) => `/contact/${userId}`,
      edit: (id) => `/contact/${id}`
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
      editUser: (data) => api().patch(endPoints.user.edit, data, {
        headers: { Authorization: `Bearer ${getToken()}` }
      }),
      deleteUser: () => api().delete(endPoints.user.delete, {
        headers: { Authorization: `Bearer ${getToken()}` }
      }),
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
