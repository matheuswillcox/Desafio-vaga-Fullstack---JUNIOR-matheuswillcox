import { userSignIn, userLogOff, addTech, removeTech } from "./actionsType";

export const logUser = (payload) => ({ type: userSignIn, payload: payload });

export const logOff = () => ({ type: userLogOff });

export const userAddTech = (payload) => ({ type: addTech, payload: payload });

export const userRemoveTech = (techId) => ({
  type: removeTech,
  payload: techId,
});
