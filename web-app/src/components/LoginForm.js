import React, { useState } from "react";
 
function LoginForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        agree: false,
        autoSubmit: false
    });
 
    const handleChange = (event) => {
        const { name, type, value, checked } = event.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
 
       
        if (name === "autoSubmit" && checked) {
            handleSubmit(event);
        }
    };
 
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted with data:", formData);
    };
 
    return (
        <div>
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
 
          
                <div>
                    <label>Gender:</label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender === "male"}
                        onChange={handleChange}
                    /> Male
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender === "female"}
                        onChange={handleChange}
                    /> Female
                    <input
                        type="radio"
                        name="gender"
                        value="other"
                        checked={formData.gender === "other"}
                        onChange={handleChange}
                    /> Other
                </div>
 
                
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="agree"
                            checked={formData.agree}
                            onChange={handleChange}
                        />
                        I agree to the Terms & Conditions
                    </label>
                </div>
 
               
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="autoSubmit"
                            checked={formData.autoSubmit}
                            onChange={handleChange}
                        />
                        Submit Form
                    </label>
                </div>
            </form>
        </div>
    );
}
 
export default LoginForm;