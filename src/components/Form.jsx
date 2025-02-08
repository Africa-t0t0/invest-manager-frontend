import { useState } from "react";

export default function Form() {

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

    return (
        <>
            <form
                action=""
                method="POST"
            >

            </form>
        </>
    );
}