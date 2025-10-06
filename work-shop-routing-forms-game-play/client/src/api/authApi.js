import { useContext, useEffect, useRef } from "react";
import request from "../utils/request";
import { UserContext } from "../contexts/UserContext";

const baseUrl = "http://localhost:3030/users";

export const useLogin = () => {
  const abortRef = useRef(null);

  const login = (email, password) =>
    request.post(
      `${baseUrl}/login`,
      { email, password },
      { signal: abortRef.current.signal }
    );

  useEffect(() => {
    const abortControler = new AbortController();
    abortRef.current = abortControler;
    return () => {
      abortControler.abort();
    };
  }, []);

  return {
    login,
  };
};

export const useRegister = () => {
  const register = (email, password) =>
    request.post(`${baseUrl}/register`, { email, password });

  return {
    register,
  };
};


export const useLogout=()=>{
  const {accessToken}=useContext(UserContext)

  const logout=()=>{
   return request.get(`${baseUrl}/logout`,null,{headers:{"X-Authorization":accessToken}})
  }

  return {
    logout
  }

}
