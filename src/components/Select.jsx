import { inputField } from "../utils/styles";


export default function Select({ name, cardOptions, onChange, selectedOption }) {

    return (
        <>
            <select
                name={name}
                key={name}
                className={inputField}
                onChange={onChange}
                value={selectedOption}
            >
                {cardOptions.map((item, index) => (
                    <option
                        key={index}
                        value={item.value}
                    >
                        {item.label}
                    </option>
                ))}
            </select>
        </>
    );
}