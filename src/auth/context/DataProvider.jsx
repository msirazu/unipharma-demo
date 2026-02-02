import DataContext from "./DataContext";

const DataProvider = ({ children }) => {
    
    const dataInfo = {
        name: 'bhidex'
    }
    return (
        <DataContext.Provider value={dataInfo}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;