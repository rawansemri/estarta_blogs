import { useState, useEffect } from "react";



const useFetch = (url) => {

    const [data, setData] = useState([])
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);


    useEffect(() => {


        async function getData() {

            try {
                const res = await fetch(url)
                const Data = await res.json();
                setData(Data);
                setIsLoaded(false);

            } catch (error) {
                setError(error);
                setIsLoaded(false);
            }


        }

        getData();

    }, [url])
    return { data , isloaded: isLoaded, error };
}

export default useFetch;