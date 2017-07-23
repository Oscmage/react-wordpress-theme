export const RECEIVED_MENU = "RECEIVED_MENU";
export const REQUEST_POST = "REQUEST_POST";
export const RECEIVED_POST = "RECEIVED_POST";

export const receivedMenu = menuList => {
  return {
    type: RECEIVED_MENU,
    menuList
  };
};

export const requestPost = () => {
  return {
    type: REQUEST_POST
  };
};

export const receivedPost = post => {
  return {
    type: RECEIVED_POST,
    post
  };
};
