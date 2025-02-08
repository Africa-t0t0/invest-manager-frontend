import { createContext, useContext, useState } from "react";

import Form from "../components/Form";

import { handleGridStates } from "./handleGridStates";

const GridContext = createContext();

export function useSelection () {
    return useContext(GridContext)
}

// Proveedor de contexto
export function GridContextProvider ({children}) {
    const [selectedOption, setSelectedOption] = useState("default-context");
    const [selectedGrid, setSelectedGrip] = useState("default-grid");

    let gridContent = handleGridStates(selectedOption);

    const contextObject = {
        selectedOption,
        setSelectedOption,
        selectedGrid,
        setSelectedGrip,
        gridContent
    }

    return (
        <GridContext.Provider
            value={contextObject}
        >
            {children}
        </GridContext.Provider>
    );

}