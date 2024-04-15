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
        </>
    )
}

export default Login
