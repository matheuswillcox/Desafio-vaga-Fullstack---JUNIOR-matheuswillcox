import axios from "axios";

const api = () => {
  return axios.create({ baseURL: "https://kenziehub.herokuapp.com" });
};
const endPoints = {
  login: "/sessions",
  user: {
    getAll: "/users",
    getAllByParams: (params) => `/users?${params}`,
    getOne: (userId) => `/users/${userId}`,
    createUser: "/users",
    techs: {
      create: "/users/techs",
      mutation: (techId) => `/users/techs/${techId}`,
    },
    works: {
      create: "/users/works",
      mutation: (workId) => `/users/works/${workId}`,
    },
    updateAvatar: "/users/avatar",
    updateProfile: "/users/profile",
  },
};
export const getToken = () =>
  JSON.parse(localStorage.getItem("tokenKenzieHub")) || "";
export const getUserId = () =>
  JSON.parse(localStorage.getItem("userIdKenzieHub")) || "";

const configs = {
  headers: { Authorization: `Bearer ${getToken()}` },
};

export const services = () => {
  return {
    login: (data) => api().post(endPoints.login, data),
    user: {
      getAll: () => api().get(endPoints.user.getAll),
      getAllByParams: (params) =>
        api().get(endPoints.user.getAllByParams(params)),
      getOne: (id) => api().get(endPoints.user.getOne(id)),
      createUser: (data) => api().post(endPoints.user.createUser, data),
      createTechs: (data) =>
        api().post(endPoints.user.techs.create, data, configs),
      updateTechs: (data, techId) =>
        api().put(endPoints.user.techs.mutation(techId), data, configs),
      deleteTechs: (techId) =>
        api().delete(endPoints.user.techs.mutation(techId), configs),
      createWorks: (data) =>
        api().post(endPoints.user.works.create, data, configs),
      updateWorks: (data, workId) =>
        api().put(endPoints.user.works.mutation(workId), data, configs),
      deleteWorks: (workId) =>
        api().delete(endPoints.user.works.mutation(workId), configs),
      updateAvatar: (data) =>
        api().patch(endPoints.user.updateAvatar, data, configs),
      updateProfile: (data) =>
        api().put(endPoints.user.updateProfile, data, configs),
    },
  };
};
