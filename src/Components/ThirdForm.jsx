import React, { useState } from 'react'

const initialFormData = {
    personalDetails: {
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
    }
};

const ThirdForm = () => {
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleNestedChange = (parentName, fieldName, value) => {
        setFormData({
            ...formData,
            [parentName]: {
                ...formData[parentName],
                [fieldName]: value,
            },
        });
    };

    const formFields = [
        {
            name: 'ravis',
            label: 'Personal Details',
            fields: [
                { name: 'name', label: 'Name', type: 'text' },
                { name: 'age', label: 'Age', type: 'number' },
                { name: 'email', label: 'Email', type: 'email' },
                {
                    name: 'currentAddress',
                    label: 'Current Address',
                    fields: [
                        { name: 'area', label: 'Area', type: 'text' },
                        { name: 'city', label: 'City', type: 'text' },
                        { name: 'pincode', label: 'Pin Code', type: 'text' },
                    ],
                },
                {
                    name: 'permanentAddress',
                    label: 'Permanent Address',
                    fields: [
                        { name: 'area', label: 'Area', type: 'text' },
                        { name: 'city', label: 'City', type: 'text' },
                        { name: 'pincode', label: 'Pin Code', type: 'text' },
                    ],
                },
            ],
        },
        {
            name: 'cardDetails',
            label: 'Card Details',
            fields: [
                { name: 'cardNumber', label: 'Card Number', type: 'text' },
                { name: 'date', label: 'Date', type: 'date' },
            ],
        },
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            {formFields.map((section) => (
                <fieldset key={section.name}>
                    <legend>{section.label}</legend>
                    {section.fields.map((field) => (
                        <div key={field.name}>
                            <label htmlFor={field.name}>{field.label}:</label>
                            {field.type === 'text' || field.type === 'number' || field.type === 'email' ? (
                                <input
                                    type={field.type}
                                    id={field.name}
                                    name={field.name}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                />
                            ) : null}
                            {field.type === 'date' ? (
                                <input
                                    type={field.type}
                                    id={field.name}
                                    name={field.name}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                />
                            ) : null}
                            {field.type === 'text' && section.name === 'ravis' && field.name === 'currentAddress' ? (
                                <div>
                                    <label htmlFor={field.name}>{field.label}:</label>
                                    <input
                                        type={field.type}
                                        id={field.name}
                                        name={field.name}
                                        value={formData[field.name]}
                                        onChange={(event) => handleNestedChange('currentAddress', field.name, event.target.value)}
                                    />
                                </div>
                            ) : null}
                            {field.type === 'text' && section.name === 'ravis' && field.name === 'permanentAddress' ? (
                                <div>
                                    <label htmlFor={field.name}>{field.label}:</label>
                                    <input
                                        type={field.type}
                                        id={field.name}
                                        name={field.name}
                                        value={formData[field.name]}
                                        onChange={(event) => handleNestedChange('permanentAddress', field.name, event.target.value)}
                                    />
                                </div>
                            ) : null}
                        </div>
                    ))}
                </fieldset>
            ))}
            <button type="submit">Submit</button>
        </form>
    )
}

export default ThirdForm














// import React, { useState } from 'react';

// function DynamicForm() {
//   const [formData, setFormData] = useState({
//     personalDetails: {
//       name: '',
//       age: '',
//       email: '',
//       currentAddress: {
//         area: '',
//         city: '',
//         pincode: '',
//       },
//       permanentAddress: {
//         area: '',
//         city: '',
//         pincode: '',
//       },
//     },
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       personalDetails: {
//         ...prevData.personalDetails,
//         [name]: value,
//       },
//     }));
//   };

//   const handleAddressChange = (event) => {
//     const { name, value } = event.target;
//     const [addressType, field] = name.split('_');
//     setFormData((prevData) => ({
//       ...prevData,
//       personalDetails: {
//         ...prevData.personalDetails,
//         [addressType]: {
//           ...prevData.personalDetails[addressType],
//           [field]: value,
//         },
//       },
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData); // You can send this data to an API or perform other actions
//   };

//   return (
//     <div>
//       <h2>Personal Details</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" name="name" value={formData.personalDetails.name} onChange={handleInputChange} /><br />

//         <label htmlFor="age">Age:</label>
//         <input type="text" id="age" name="age" value={formData.personalDetails.age} onChange={handleInputChange} /><br />

//         <label htmlFor="email">Email:</label>
//         <input type="text" id="email" name="email" value={formData.personalDetails.email} onChange={handleInputChange} /><br />

//         <h3>Current Address</h3>
//         <label htmlFor="current_area">Area:</label>
//         <input type="text" id="current_area" name="currentAddress_area" value={formData.personalDetails.currentAddress.area} onChange={handleAddressChange} /><br />

//         <label htmlFor="current_city">City:</label>
//         <input type="text" id="current_city" name="currentAddress_city" value={formData.personalDetails.currentAddress.city} onChange={handleAddressChange} /><br />

//         <label htmlFor="current_pincode">Pincode:</label>
//         <input type="text" id="current_pincode" name="currentAddress_pincode" value={formData.personalDetails.currentAddress.pincode} onChange={handleAddressChange} /><br />

//         <h3>Permanent Address</h3>
//         <label htmlFor="permanent_area">Area:</label>
//         <input type="text" id="permanent_area" name="permanentAddress_area" value={formData.personalDetails.permanentAddress.area} onChange={handleAddressChange} /><br />

//         <label htmlFor="permanent_city">City:</label>
//         <input type="text" id="permanent_city" name="permanentAddress_city" value={formData.personalDetails.permanentAddress.city} onChange={handleAddressChange} /><br />

//         <label htmlFor="permanent_pincode">Pincode:</label>
//         <input type="text" id="permanent_pincode" name="permanentAddress_pincode" value={formData.personalDetails.permanentAddress.pincode} onChange={handleAddressChange} /><br />

//         <input type="submit" value="Submit" />
//       </form>
//     </div>
//   );
// }

// export default DynamicForm;