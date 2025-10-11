import { useContext } from "react";
import request from "../utils/request";
import { UserContext } from "../contexts/UserContext";

export default function useAuth() {
  const authData = useContext(UserContext);

  const requestWrapper = (method, url, data, options = {}) => {
    const headers = {
      ...options.headers,
    };

    if (authData.accessToken) {
      headers["X-Authorization"] = authData.accessToken;
    }

    const optionWrapper = {
      ...options,
      headers,
    };

    return request.baseRequest(method, url, data, optionWrapper);
  };

  return {
    ...authData,
    request: {
      get: requestWrapper.bind(null, "GET"),
      post: requestWrapper.bind(null, "POST"),
      put: requestWrapper.bind(null, "PUT"),
      delete: requestWrapper.bind(null, "DELETE"),
    },
  };
}
