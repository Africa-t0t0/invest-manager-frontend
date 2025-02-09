import DatePicker from "react-datepicker";

import { inputField } from "../utils/styles";

export default function CustomDatePicker({selectedDate, setSelectedDate}) {
    return (
        <>
            <DatePicker
                name="date"
                className={inputField}
                selected={selectedDate}
                onChange={setSelectedDate}
                dateFormat="yyyy-MM-dd"
                placeHolderText="Select a date..."
            />
        </>
    );
}