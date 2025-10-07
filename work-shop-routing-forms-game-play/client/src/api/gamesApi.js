import { useContext } from "react";
import request from "../utils/request";
import { UserContext } from "../contexts/UserContext";

const baseUrl = "http://localhost:3030/data/games";

export const useCreateGame = () => {
  const { accessToken } = useContext(UserContext);

  const options = {
    headers: {
      "X-Authorization": accessToken,
    },
  };

  const createGame = (gamedata) => request.post(baseUrl, gamedata, options);

  return{
    createGame
  }
};
