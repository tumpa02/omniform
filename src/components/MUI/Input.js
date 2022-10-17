import React from 'react'

import { Controller } from 'react-hook-form'

import { TextInput } from './Inputs/TextInput'

const Input = (props) => {
  const {
    name,
    type,
    rules,
    control,
    errors,
    data,
    label,
    placeholder,
    helperText,
    multiline,
    rows
  } = props

  return (
    <Controller
      render={({ field: { onChange, value } }) => {
        return (
          <TextInput
            onChange={onChange}
            type={type}
            value={value}
            name={name}
            placeholder={placeholder}
            errors={errors}
            label={label || name}
            multiline={multiline}
            rows={rows}
            helperText={helperText}
          />
        )
      }}
      shouldUnregister
      name={name}
      control={control}
      rules={rules}
      defaultValue={data && data[name]}
    />
  )
}

export { Input }
