import { useEffect } from "react";

const useTitle = (title) => {
    document.title = title;
    
    useEffect(() => {

        document.title = `${title} | CodeBook`;
     },[title])
  return null;
};

export default useTitle
