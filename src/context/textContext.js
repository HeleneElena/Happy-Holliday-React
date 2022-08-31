import { createContext } from "react";

export const textContext = createContext('')ж

export const TextContext = ({ children }) => {
    return (
        <textContext.Provider value={'Привет'} >
            {children}
        </textContext.Provider>
    )
}