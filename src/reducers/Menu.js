import { RECEIVED_MENU } from "../Actions.js";

const initialState = {
  menuList: []
};

export default function menu(state = initialState, action) {
  switch (action.type) {
    case RECEIVED_MENU:
      return {
        menuList: action.menuList
      };

    default:
      return state;
  }
}
