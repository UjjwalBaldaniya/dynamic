import React, { useState } from 'react'

const NewForm = () => {
    const [formData, setFormData] = useState({
        person: {
            name: "ujjwal",
            surname: "aa",
            current: {
                city: "surat",
            },
        },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            person: {
                ...prevData.person,
                current: {
                    ...prevData.person.current,
                    [name]: value,
                },
            },
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.person.name}
                    onChange={handleChange}
                />

                <label>Surname:</label>
                <input
                    type="text"
                    name="surname"
                    value={formData.person.surname}
                    onChange={handleChange}
                />

                <label>Current City:</label>
                <input
                    type="text"
                    name="city"
                    value={formData.person.current.city}
                    onChange={handleChange}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default NewForm