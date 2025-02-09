import { useSelection } from "../context/GridContext";


export default function Grid() {

    const { gridContent } = useSelection();

    return (
        <>
            {/* Main content area */}
            <div className="flex-1 p-6">
                {gridContent}
            </div>
        </>
    );
}