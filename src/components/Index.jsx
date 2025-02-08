import React from 'react';

import Sidebar from './Sidebar';
import Grid from './Grid';

import { GridContextProvider } from '../context/GridContext';

const backgroundClassName = "flex h-screen bg-gray-100";

function App() {
    return (
        <GridContextProvider>
            <div className={backgroundClassName}>
                <Sidebar />
                <Grid />
            </div>
        </GridContextProvider>
    );
}

export default App;