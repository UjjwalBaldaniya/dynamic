import React, { useState } from 'react'

const data = [
    {
        type: "text",
        placeholder: "username",
        name: "username"
    },
    {
        type: "email",
        placeholder: "email",
        name: "email"
    },
    {
        type: "text",
        placeholder: "gender",
        name: "gender"
    },
    {
        type: "number",
        placeholder: "number",
        name: "number"
    },
]

const CA = [
    {
        type: "text",
        placeholder: "city",
        name: "city"
    },
    {
        type: "text",
        placeholder: "state",
        name: "state"
    },
    {
        type: "number",
        placeholder: "pincode",
        name: "pincode"
    }
]

const Form = () => {
    const [inputField, setInputField] = useState({
        username: "",
        email: "",
        gender: "",
        number: "",
        currentAddress : []
    })

    const [current, setcurrent] = useState({
        city: "",
        state: "",
        pincode: ""
    })


    const handleChange = (e) => {
        const { name, value } = e.target
        setInputField({
            ...inputField,
            [name]: value
        })
    }

    const handleChangee = (e) => {
        const { name, value } = e.target
        
        setcurrent({
            ...current,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // inputField.currentAddress.push(current)
        // const
       inputField.currentAddress.push(current)
        console.log(inputField, inputField.currentAddress)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {data.map((element, index) => (
                    <div key={index}>
                        <input {...element} value={inputField[element.name]} onChange={handleChange} />
                    </div>
                ))}
                {CA.map((input, index) => (
                    <div key={index}>
                        <input {...input} value={current[input.name]} onChange={handleChangee} />
                    </div>
                ))}
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default Form