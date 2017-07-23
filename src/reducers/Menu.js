import { RECEIVED_MENU } from "../Actions.js";

const initialState = {
  menuList: [],
  loaded: false
};

export default function menu(state = initialState, action) {
  switch (action.type) {
    case RECEIVED_MENU:
      return {
        menuList: action.menuList,
        loaded: true
      };

    default:
      return state;
  }
}
