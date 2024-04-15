import React from 'react'
import FormInput from '../components/form Component/FormInput'

function Login() {
    return (
        <>
            <FormInput
                type="email"
                label="User Email Id:"
                id="email"
                name="email"
                placeholder="Enter your email"
            />
             <FormInput
                type="password"
                label="Password: "
                id="password"
                name="password"
                placeholder="Enter your password"
            />
        </>
    )
}

export default Login
