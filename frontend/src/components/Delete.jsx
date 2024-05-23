import React, { useState, useEffect } from "react";

function Delete() {

    const [formValores, setFormValores] = useState({
        id: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValores(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log("Dados a serem enviados:", formValores.id);
            const response = await fetch(`http://localhost:3000/pessoas/${formValores.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formValores)
            });
        }
 }
}