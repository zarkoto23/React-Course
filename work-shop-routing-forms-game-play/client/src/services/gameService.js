import { request } from "../utils/requester";

const baseUrl = "http://localhost:3030/jsonstore/games";

export default {
  create(gameData) {
    return request("POST", baseUrl, gameData);
  },

  getAll(){
    return request('GET', baseUrl)
  }
};
