import React from 'react'
import styles from './styles.module.css'

import { useForm } from 'react-hook-form'

export const Form = ({ text }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    window.alert(JSON.stringify(data))
  }

  console.log(watch('example'))

  return (
    <div className={styles.test}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('example', { required: true })} />
        {errors.example && <span>This is required.</span>}
        <input type='submit' />
      </form>
    </div>
  )
}
