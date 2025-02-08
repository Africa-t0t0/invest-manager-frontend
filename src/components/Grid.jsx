import { useSelection } from "../context/GridContext";


export default function Grid() {

    const { gridContent: content } = useSelection();

    if (!content) {
        content = (
            <>
                <h1 className="text-3xl font-bold">Investment Manager</h1>
                <p className="mt-4 text-gray-700">
                    This is a basic template with Tailwind CSS and React!
                </p>
            </>
        );
    }

    return (
        <>
            {/* Main content area */}
            <div className="flex-1 p-6">
                {content}
            </div>
        </>
    );
}