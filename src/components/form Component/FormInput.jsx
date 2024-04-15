import React from 'react'
import { TextField, Stack, InputLabel } from '@mui/material';
const FormInput = ({label, id , name, placeholder, type}) => {
  return (
    <Stack>
        <InputLabel
            htmlFor={id}
            sx={{
                fontSize: '16px',
                color: 'black',
            }}
        >
            {label}
        </InputLabel>
        <TextField
            id={id}
            name={name}
            placeholder={placeholder}
            type={type}
            variant="outlined"
            size='small'
        />
    </Stack>
);
}

export default FormInput