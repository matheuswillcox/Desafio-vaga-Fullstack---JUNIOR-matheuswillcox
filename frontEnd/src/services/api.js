
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
  JSON.parse(localStorage.getItem("token")) || "";
// export const getUserId = () =>
//   JSON.parse(localStorage.getItem("userId")) || "";

const configs = {
  headers: { Authorization: `Bearer ${getToken()}` },
};
console.log(getToken())
export const services = () => {
  
  return {

    login: (data) => api().post(endPoints.login, data),
    user: {

      getOne: () => api().get(endPoints.user.getOne()),
      createUser: (data) => api().post(endPoints.user.createUser, data),
      createContact: (data) =>
        api().post(endPoints.user.contato.create, data, configs),
      getContact: () =>
        api().get(endPoints.user.contato.get, configs),
      getUsersContacts: () =>
        api().get(endPoints.user.contato.get, configs),
      updateContact: ( id, data) =>
        api().patch(endPoints.user.contato.edit(id), data, configs),
      deleteContact: (id) =>
        api().delete(endPoints.user.contato.delete(id), configs)

    },
  };
};
