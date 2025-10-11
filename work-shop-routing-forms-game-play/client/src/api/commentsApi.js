import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const baseUrl = "http://localhost:3030/data/comments";

// export default {
//   async getAll(gameId) {
//     const comments = await request.get(baseUrl)

//   if (!comments) {
//       return []; // безопасно — няма да хвърли грешка
//     }

//     const gameComms = Object.values(comments).filter(
//       (comment) => comment.gameId === gameId
//     );
//     return gameComms;
//   },

//   create(email, gameId, comment) {
//     return request.post(baseUrl, { email, gameId, comment });
//   },
// };


const useComments=(gameId)=>{
    const {request}=useAuth()
    const [comments,setComments]=useState()


    useEffect(()=>{



        request.get(`${baseUrl}/${gameId}`)

    })
}

