import { useEffect, useState } from "react";

export default function useFetch(url, defaultState = {}) {
  const [state, setState] = useState(defaultState);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    setPending(true);
    const abortController = new AbortController();
    fetch(url, { signal: abortController.signal })
      .then((res) => res.json())
      .then((result) => {
        setState(Object.values(result));
      })
      .finally(() => {
        setPending(false);
      });

    return () => {
      abortController.abort();
    };
  }, [url]);

  //pending and meesagers return
  return [pending, state];
}
