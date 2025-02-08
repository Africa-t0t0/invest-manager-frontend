import { useState } from "react";

export default function Form() {

    const [formData, setFormData] = useState({
        card: "",
        amount: "",
        date: "",
        installmentsNumber: ""
    });

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