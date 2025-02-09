import { inputField, buttonHover } from "../utils/styles";

export default function Button ({name, onClick, content, className}) {
    let finalClassName;

    if (className) {
        finalClassName = `${className} ${inputField} ${buttonHover}`;
    } else {
        finalClassName = `${className} ${inputField}`;
    }

    return (
        <button
            name={name}
            className={finalClassName}
            onClick={onClick}
        >
            {content}
        </button>
    );
}