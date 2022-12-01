import { openAction, closeAction } from "./actionsType";

export const openModal = (title, content, buttons) => ({
  type: openAction,
  data: { title, content, buttons, state: true },
});

export const closeModal = () => ({
  type: closeAction,
});
