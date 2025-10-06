import { createContext } from "react";

export const UserContext = createContext({
  _id: "",
  username: "",
  email: "",
  password: "",
  accessToken: "",
  userLoginHandler: () => null,
  userLogoutHandler: () => null,
});
