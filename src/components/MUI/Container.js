import React from 'react'

import { Input } from './Input'

const Container = ({ inputs, control, errors }) => {
  return (
    <div>
      {inputs?.map((input, index) => {
        return (
          <Input
            key={index}
            name={input.name}
            type={input.type ? input.type : 'text'}
            rules={input.rules}
            control={control}
            defaultValue=''
            errors={errors}
            placeholder={input.placeholder}
            label={input.label}
            helperText={input.helperText}
            multiline={input.multiline}
            rows={input.rows}
          />
        )
      })}
    </div>
  )
}

export { Container }
