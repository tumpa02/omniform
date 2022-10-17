import React from 'react'

import { Form } from 'omniform'
import 'omniform/dist/index.css'
import { testInputs } from './testInputs'

const App = () => {
  const handleSubmit = (data) => {
    window.alert(JSON.stringify(data))
  }

  return <Form onSubmit={handleSubmit} inputs={testInputs} />
}

export default App
