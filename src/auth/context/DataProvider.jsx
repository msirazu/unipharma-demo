import { useEffect, useState } from "react";
import DataContext from "./DataContext";

const DataProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const allData = async() => {
            const dataPromise = await fetch('/data/products-data.json');
            const dataRes = await dataPromise.json();
            return setProducts(dataRes);
        }
        allData();
    }, [])

    return (
        <DataContext.Provider value={{products}}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;