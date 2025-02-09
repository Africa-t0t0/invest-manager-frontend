export default function Select({ name, cardOptions, onChange, selectedOption }) {

    return (
        <>
            <select
                name={name}
                id=""
                key={name}
                className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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