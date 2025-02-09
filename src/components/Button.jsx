import { buttonClass, buttonHover } from "../utils/styles";

export default function Button ({name, onClick, content, className}) {
    let finalClassName;

    if (className) {
        finalClassName = `${className} ${buttonClass} ${buttonHover}`;
    } else {
        finalClassName = `${className} ${buttonClass}`;
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