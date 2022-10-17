import React from 'react'
import styles from './styles.module.css'

import { useForm } from 'react-hook-form'

import { Button } from '@mui/material'
import { Container } from './components/MUI/Container'

export const Form = ({ onSubmit, inputs }) => {
  const { handleSubmit, control, formState } = useForm({
    reValidateMode: 'onSubmit'
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container inputs={inputs} control={control} errors={formState.errors} />

      <div>
        <Button variant='outlined' color='error'>
          Back
        </Button>
        <Button type='submit' variant='contained'>
          Submit
        </Button>
      </div>
    </form>
  )
}
