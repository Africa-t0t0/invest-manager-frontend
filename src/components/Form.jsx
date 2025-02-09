import { useState } from "react";

import Button from "./Button";
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
        installmentsNumber: "",
        details: ""
    });

    const [errors, setErrors] = useState({});

    const validation = () => {
        let newErrors = {};

        if (!formData.card.trim()) newErrors.name = "Card number is required";
        if (!formData.amount) newErrors.amount = "Amount is required";
        if (!formData.installmentsNumber) newErrors.installmentsNumber = "Installments number cannot be empty";
        if (!formData.details) newErrors.details = "Details field is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleDateFormChange = (name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

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
                <div className="row flex space-x-4 m-12">
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
                            name="date"
                            selectedDate={formData.date}
                            setSelectedDate={handleDateFormChange}
                        />
                    </div>
                    <div
                        className="w-1/4"
                    >
                        <label
                            className="block text-md front-medium"
                        >
                            Installments
                        </label>
                        <input
                            name="value"
                            className={inputField}
                            type="number"
                            onChange={handleFormChange}
                            min="0"
                        />
                        {errors.installmentsNumber && <p className="text-red-500 text-sm mt-1">{errors.installmentsNumber}</p>}

                    </div>
                </div>
                <div
                    className="m-11"
                >
                    <label
                        className="block text-md font-medium"
                    >
                        Details
                    </label>
                    <input
                        name="details"
                        className={inputField}
                        type="text"
                        onChange={handleFormChange}
                    />
                    {errors.details && <p className="text-red-500 text-sm mt-1">{errors.details}</p>}

                </div>
                <div
                    className="flex justify-center items-center m-11"
                >
                    <Button
                        name="submit-button"
                        className="w-auto px-6 py-2"
                        onClick={handleFormSubmit}
                        content="Submit"
                    />
                </div>
            </form>
        </>
    );
}