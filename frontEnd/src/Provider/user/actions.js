import { userSignIn, userLogOff, addContact, removeContact } from "./actionsType";

export const logUser = () => ({ type: userSignIn});

export const logOff = () => ({ type: userLogOff });

export const userAddContact = (payload) => ({ type: addContact, payload: payload });

export const userRemoveTech = (id) => ({
  type: removeContact,
  payload: id,
});
