import { useEffect, useState } from "react";

export default function useLocalStorage<T>(
  key: string,
  initial: T | (() => T),
) {
  const [data, setData] = useState<T>(() => {
    const storedData = localStorage.getItem(key);

    if (storedData) return JSON.parse(storedData);
    if (typeof initial !== "function") return initial;
    if (typeof initial == "function") return (initial as Function)();

    return null;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data]);

  return [data, setData] as const;
}

