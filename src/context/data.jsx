import { createContext, useState } from "react";

export const dataContext = createContext();

export const DataContextProvider = ({ children }) => {
    const [data, setData] = useState();

    return (
        <dataContext.Provider value={{ data, setData }}>
            {children}
        </dataContext.Provider>
    )
}