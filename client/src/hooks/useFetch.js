import { useState, useEffect } from "react";
export const useFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // useEffect(() => {
    const fetchData = async (url, options = {}) => {
        setIsLoading(true);
        try {
            const response = await fetch(`http://localhost:4001/v1/${url}`, options);
            if (!response.ok) throw new Error(response.statusText);
            const json = await response.json();
            setIsLoading(false);
            setData(json);
            setError(null);
        } catch (error) {
            setError(`${error} Could not Fetch Data `);
            setData({ error })
            setIsLoading(false);
        }
    };
    // fetchData();
    // }, [url]);
    return { data, isLoading, setIsLoading, error, fetchData };
};
