import { useEffect, useState } from "react";
import request from "../utils/request";
import useAuth from "../hooks/useAuth";

const baseUrl = "http://localhost:3030/data/games";

export const useGames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    request.get(baseUrl).then(setGames);
  }, []);

  return {
    games,
  };
};

export const useGame = (gameId) => {
  const [game, setGame] = useState({});

  useEffect(() => {
    request.get(`${baseUrl}/${gameId}`).then(setGame);
  }, [gameId]);

  return {
    game,
  };
};

export const useCreate = () => {
  const { request } = useAuth();

  const create = (gamedata) => request.post(baseUrl, gamedata);

  return {
    create,
  };
};
