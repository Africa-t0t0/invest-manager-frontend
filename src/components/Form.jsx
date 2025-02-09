import { useState } from "react";

import CustomDatePicker from "./DatePicker";
import Select from "./Select";

import { inputField } from "../utils/styles";


export default function Form() {

    const cardOptions = [
        { value: "bci", label: "BCI" },
        { value: "banchile", label: "Banco de Chile" },
        { value: "santander", label: "Santander" }
    ]

    const [formData, setFormData] = useState({
        card: "",
        amount: "",
        date: new Date(),
        installmentsNumber: ""
    });

    const [errors, setErrors] = useState({});

    const validation = () => {
        let newErrors = {};

        if (!formData.card.trim()) newErrors.name = "Card number is required";
        if (!formData.amount) newErrors.amount = "Amount is required"

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (validation()) {
            // logic for validation
        }
    }

    return (
        <>
            <form
                action=""
                method="POST"
                onSubmit={handleFormSubmit}
                className="space-y-4"
            >
                <div className="row flex space-x-4">
                    <div
                        className="w-1/4"
                    >
                        <label
                            className="block text-md font-medium"
                        >
                            Card
                        </label>

                        <Select
                            name={"card"}
                            cardOptions={cardOptions}
                            onChange={handleFormChange}
                            selectedOption={formData.card}
                        />
                        {errors.card && <p className="text-red-500 text-sm mt-1">{errors.card}</p>}

                    </div>
                    <div className="w-1/4">
                        <label
                            className="block text-md font-medium"
                        >
                            Value
                        </label>
                        <input
                            name="value"
                            className={inputField}
                            type="number"
                            onChange={handleFormChange}
                        />
                        {errors.value && <p className="text-red-500 text-sm mt-1">{errors.value}</p>}
                    </div>
                    <div
                        className="w-1/4"
                    >
                        <label
                            className="block text-md front-medium"
                        >
                            Date
                        </label>
                        <CustomDatePicker
                            selectedDate={formData.date}
                            setSelectedDate={handleFormChange}
                        />
                    </div>
                </div>
            </form>
        </>
    );
}