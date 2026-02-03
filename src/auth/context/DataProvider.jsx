import { useEffect, useState } from "react";
import DataContext from "./DataContext";

const DataProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const allData = async() => {
        try {
            const dataPromise = await fetch('/data/products-data.json');
            const dataRes = await dataPromise.json();
            setProducts(dataRes);
        } catch (error) {
                console.log(error);
        } finally {
                setLoading(false);
            }
        }
        allData();
    }, [])

    return (
        <DataContext.Provider value={{products, loading, setLoading}}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;