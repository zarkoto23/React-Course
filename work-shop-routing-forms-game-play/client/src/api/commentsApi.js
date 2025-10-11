import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const baseUrl = "http://localhost:3030/data/comments";

export const useComments = (gameId) => {
  const { request } = useAuth();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const searchParams = new URLSearchParams({
      where: `gameId="${gameId}"`,
    });

    request.get(`${baseUrl}?${searchParams.toString()}`).then(setComments);
  }, [gameId]);

  return {
    comments,
    setComments,
  };
};

export const useCreate = (setComments) => {
  const { request, email } = useAuth();

  const create = (gameId, comment) =>
    request
      .post(`${baseUrl}`, { email, gameId, comment })
      .then((newComment) => {
        setComments((prev) => [...prev, newComment]);
      });
  return {
    create,
  };
};
