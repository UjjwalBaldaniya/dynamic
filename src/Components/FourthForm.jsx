import React, { useState } from 'react'

const FourthForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: '',
        currentAddress: {
            area: '',
            city: '',
            pincode: '',
        },
        permanentAddress: {
            area: '',
            city: '',
            pincode: '',
        },
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAddressChange = (event) => {
        const { name, value } = event.target;
        const [addressType, field] = name.split('_');
        setFormData((prevData) => ({
            ...prevData,
            [addressType]: {
                ...prevData[addressType],
                [field]: value,
            },
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const dataToSend = {
            personalDetails: formData, // Wrap the form data here
        };
        console.log(dataToSend); // Console output with 'personalDetails' wrapper
    };
    return (
        <div>
            <h2>Personal Details</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} /><br />

                <label htmlFor="age">Age:</label>
                <input type="text" id="age" name="age" value={formData.age} onChange={handleInputChange} /><br />

                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" value={formData.email} onChange={handleInputChange} /><br />

                <h3>Current Address</h3>
                <label htmlFor="current_area">Area:</label>
                <input type="text" id="current_area" name="currentAddress_area" value={formData.currentAddress.area} onChange={handleAddressChange} /><br />

                <label htmlFor="current_city">City:</label>
                <input type="text" id="current_city" name="currentAddress_city" value={formData.currentAddress.city} onChange={handleAddressChange} /><br />

                <label htmlFor="current_pincode">Pincode:</label>
                <input type="text" id="current_pincode" name="currentAddress_pincode" value={formData.currentAddress.pincode} onChange={handleAddressChange} /><br />

                <h3>Permanent Address</h3>
                <label htmlFor="permanent_area">Area:</label>
                <input type="text" id="permanent_area" name="permanentAddress_area" value={formData.permanentAddress.area} onChange={handleAddressChange} /><br />

                <label htmlFor="permanent_city">City:</label>
                <input type="text" id="permanent_city" name="permanentAddress_city" value={formData.permanentAddress.city} onChange={handleAddressChange} /><br />

                <label htmlFor="permanent_pincode">Pincode:</label>
                <input type="text" id="permanent_pincode" name="permanentAddress_pincode" value={formData.permanentAddress.pincode} onChange={handleAddressChange} /><br />

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default FourthForm