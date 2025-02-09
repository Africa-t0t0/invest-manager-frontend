import { useSelection } from "../context/GridContext";

import { sidebarClassName } from "../utils/styles";

const hoverClassName = "hover:text-blue-400"

export default function Sidebar() {

    const { setSelectedGrip } = useSelection();

    return (
        <>
            <div className={sidebarClassName}>
                <h1 className="text-2xl font-bold text-center">Sidebar</h1>
                <ul className="mt-8 space-y-4">
                    <li>
                        <button
                            className={hoverClassName}
                            onClick={() => { setSelectedGrip("default-grid") }}
                        >
                            Home
                        </button>
                    </li>
                    <li>
                        <button
                            className={hoverClassName}
                            onClick={() => setSelectedGrip("add-movement")}
                        >
                            Add Movement
                        </button>
                    </li>
                    <li>
                        <button
                            className={hoverClassName}
                            onClick={() => setSelectedGrip("view-movement")}
                        >
                            View Movements
                        </button>
                    </li>
                    <li>
                        <button
                            className={hoverClassName}
                        >
                            Extras
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
}