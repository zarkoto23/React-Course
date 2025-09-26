import request from "../utils/request";

const baseUrl = "http://localhost:3030/jsonstore/games";

export default {
     async getAll(){
    const result= await request.get(baseUrl)
    const games=Object.values(result)

    return games
  },


  create(gameData) {
    return request.post(baseUrl, gameData)
  },

  getOne(gameId){
    return request.get(`${baseUrl}/${gameId}`)
  },

  remove(gameId){
    return request.del(`${baseUrl}/${gameId}`)
  },

  edit(gameId,gameData){
    request.put(`${baseUrl}/${gameId}`, {...gameData, _id:gameId})
  }

 
};
