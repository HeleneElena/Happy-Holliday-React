import { createContext, useState } from 'react';
import { useFetch } from './../hooks/useFetch';
import { URI_API } from './../const/const';

export const holidaysContext = createContext({});

export const HolidaysContextProvider = ({ children }) => {
    const [holiday, setHoliday] = useState('');
    const [holidays] = useFetch(URI_API);

    const changeHoliday = title => {
        setHoliday(title);
    };

    return (
        <holidaysContext.Provider value={{holidays, holiday, changeHoliday}} >
            {children}
        </holidaysContext.Provider>
    )
}
