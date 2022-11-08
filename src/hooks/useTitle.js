import { useEffect } from "react"

const useTitle = title =>{
    useEffect( () =>{
        document.title = `${title}-Immigration & Consultant`;
    } , [title])
};

export default useTitle;