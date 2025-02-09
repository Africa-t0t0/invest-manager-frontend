import { useState } from "react";

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
        date: "",
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
                        className="w-1/2"
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
                    </div>
                    <div className="w-1/2">
                        <label
                            className="block text-md font-medium"
                        >
                            Value
                        </label>
                        <input
                            className={inputField}
                            type="number"
                        />
                    </div>
                </div>
            </form>
        </>
    );
}