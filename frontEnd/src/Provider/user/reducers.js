import { userSignIn, userLogOff, addTech, removeTech } from "./actionsType";

const inicialState = {
  data: {
    id: "",
    name: "",
    email: "",
    contact: "",
    techs: [],
    works: [],
    created_at: "",
    updated_at: "",
    avatar_url: "",
  },
  logged: false,
};

const reducerUser = (state = inicialState, action) => {
  switch (action.type) {
    case userSignIn:
      return (state = { logged: true, data: action.payload });

    case userLogOff:
      return (state = { logged: false, data: inicialState });

    case addTech:
      const newTechs = [...state.data.techs, action.payload];
      return (state = { ...state, data: { ...state.data, techs: newTechs } });

    case removeTech:
      const filtered = [...state.data.techs].filter(
        (item) => item.id !== action.payload
      );
      return (state = { ...state, data: { ...state.data, techs: filtered } });

    default:
      return state;
  }
};

export default reducerUser;
