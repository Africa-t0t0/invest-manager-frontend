import { useSelection } from "../context/GridContext";

const hoverClassName = "hover:text-blue-400"

export default function Sidebar() {

    const { setSelectedGrip } = useSelection();

    return (
        <>
            <div className="w-64 bg-gray-900 text-white p-5">
                <h1 className="text-2xl font-bold text-center">Sidebar</h1>
                <ul className="mt-8 space-y-4">
                    <li>
                        <a
                            className={hoverClassName}
                            onClick={() => { setSelectedGrip("default-grid") }}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            className={hoverClassName}
                            onClick={() => setSelectedGrip("add-movement")}
                        >
                            Add Movement
                        </a>
                    </li>
                    <li>
                        <a
                            className={hoverClassName}
                            onClick={() => setSelectedGrip("view-movement")}
                        >
                            View Movements
                        </a>
                    </li>
                    <li>
                        <a
                            className={hoverClassName}
                        >
                            Extras
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}