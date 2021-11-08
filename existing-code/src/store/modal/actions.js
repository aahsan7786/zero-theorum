import {CLOSE_MODAL, OPEN_MODAL, OPEN_MODAL_DATA, CLOSE_MODAL_DATA, OPEN_MODAL_PUBLICATION, CLOSE_MODAL_PUBLICATION} from "../constants";

export const openModal = (modal) => {
  return {
      type: OPEN_MODAL,
      payload: modal
  }
};

export const closeModal = (modal) => {
  return {
      type: CLOSE_MODAL,
      payload: modal
  }
};

export const openModalData = (modal) => {
  return {
      type: OPEN_MODAL_DATA,
      payload: modal
  }
};

export const closeModalData = (modal) => {
  return {
      type: CLOSE_MODAL_DATA,
      payload: modal
  }
};

export const openModalPublication = (modal) => {
  return {
      type: OPEN_MODAL_PUBLICATION,
      payload: modal
  }
};

export const closeModalPublication = (modal) => {
  return {
      type: CLOSE_MODAL_PUBLICATION,
      payload: modal
  }
};
