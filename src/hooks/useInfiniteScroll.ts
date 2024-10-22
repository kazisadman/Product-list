import { useEffect } from "react";

export const useInfiniteScroll = (callback: () => void) => {
  const handleInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight
      ) {
        callback()
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.addEventListener("scroll", handleInfiniteScroll);
  }, []);
};
