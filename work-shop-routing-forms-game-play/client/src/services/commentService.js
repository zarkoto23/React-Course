import request from "../utils/request";

const baseUrl = "http://localhost:3030/jsonstore/comments";

export default {
  async getAll(gameId) {
    const comments = await request.get(baseUrl);

    //Todo: filter when migrate to collections
    //client filtering(dont do this)

    const gameComms = Object.values(comments).filter(
      (comment) => comment.gameId === gameId
    );
    return gameComms;
  },

  create(email, gameId, comment) {
    return request.post(baseUrl, { email, gameId, comment });
  },
};
