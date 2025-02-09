import { createContext, useContext, useState } from "react";

import { handleGridStates } from "./handleGridStates";

const GridContext = createContext();

export function useSelection () {
    return useContext(GridContext)
}

// Proveedor de contexto
export function GridContextProvider ({children}) {
    const [selectedGrid, setSelectedGrip] = useState("default-grid");

    let gridContent = handleGridStates(selectedGrid);

    const contextObject = {
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