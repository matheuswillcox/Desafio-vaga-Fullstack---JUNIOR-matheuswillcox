import { userSignIn, userLogOff, addContact, removeContact } from "./actionsType";

const inicialState = {
  data: {
    id: "",
    name: "",
    email: "",
    contato: [],
    created_at: "",
    updated_at: "",

  },
  logged: false,
};

const reducerUser = (state = inicialState, action) => {
  switch (action.type) {
    case userSignIn:

      return (state = { logged: true }) ;

    case userLogOff:
      return (state = { logged: false, data: inicialState });

    case addContact:
      const newContact = [...state.data?.contato ??[], action.payload];
      return (state = { ...state, data: { ...state.data, contato: newContact } });

    case removeContact:
      const filtered = [...state.data.contato].filter(
        (item) => item.id !== action.payload
      );
      return (state = { ...state, data: { ...state.data, contato: filtered } });

    default:
      return state;
  }
};

export default reducerUser;
