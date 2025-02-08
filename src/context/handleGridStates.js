import Form from "../components/Form";
import ViewMovements from "../components/ViewMovements";


export function handleGridStates (selectedGrid) {
    let gridContent;

    if (selectedGrid === "default-grid") {
        gridContent = (
            <>
                <h1 className="text-3xl font-bold">Investment Manager</h1>
                <p className="mt-4 text-gray-700">
                    This is a basic template with Tailwind CSS and React!
                </p>
            </>
        );
    } else if (selectedGrid === "add-movement") {
        gridContent = (
            <>
                <h1 className="text-3xl font-bold">Add Movement Form</h1>
                <Form />
            </>
        )
    } else if (selectedGrid === "view-movement") {
        gridContent = (
            <>
                <h1
                    className="text-3xl font-bold"
                >
                    View Movements
                </h1>
                <ViewMovements />
            </>
        )
    } else {
        gridContent = (
            <>
            </>
        )
    }

    return gridContent;
}