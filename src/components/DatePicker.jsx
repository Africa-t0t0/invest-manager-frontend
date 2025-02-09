import DatePicker from "react-datepicker";

import { inputField } from "../utils/styles";

export default function CustomDatePicker({ name, selectedDate, setSelectedDate }) {
    return (
        <DatePicker
            name={name}
            className={inputField}
            selected={selectedDate}
            onChange={(date) => setSelectedDate(name, date)}
            dateFormat="yyyy-MM-dd"
            placeHolderText="Select a date..."
        />
    );
}