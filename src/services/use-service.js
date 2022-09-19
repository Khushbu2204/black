import { myAxios } from "./helper";

export const register = (user) => {
    return myAxios
        .post(" ", user)
        .then((response) => response.data);
};