import { openAction, closeAction } from "./actionsType";

const inicialState = {
  title: "",
  content: "",
  buttons: [],
  state: false,
};
const reducerModal = (state = inicialState, action) => {
  switch (action.type) {
    case openAction:
      return (state = action.data);

    case closeAction:
      return (state = inicialState);

    default:
      return state;
  }
};

export default reducerModal;
