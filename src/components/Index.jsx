import React from 'react';

import Sidebar from './Sidebar';
import Grid from './Grid';

function App() {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <Grid />
        </div>
    );
}

export default App;