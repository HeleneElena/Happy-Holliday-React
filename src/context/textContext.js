import { createContext } from "react";
import { URI_API } from './../const/const';
import { useFetch } from './../hooks/useFetch';
import { useSelector } from "react-redux";

export const textContext = createContext({});

export const TextContextProvider = ({ children }) => {
    const holiday = useSelector(state => state.holidays.holiday);
    const [{text}] = useFetch(holiday ? `${URI_API}text/${holiday}` : '');
 
    return (
        <textContext.Provider value={{text}} >
            {children}
        </textContext.Provider>
    )
}