import React from 'react'

import { TextField } from '@mui/material'

const TextInput = (props) => {
  const {
    onChange,
    type,
    value,
    name,
    errors,
    label,
    multiline,
    rows,
    placeholder
  } = props

  return (
    <TextField
      onChange={onChange}
      type={type}
      value={value === 0 || value !== null ? value : ''}
      label={label}
      multiline={multiline}
      placeholder={placeholder}
      rows={rows}
      variant='outlined'
      fullWidth
      error={errors && errors[name]}
    />
  )
}

export { TextInput }
