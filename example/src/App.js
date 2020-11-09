import React, { useState } from 'react'
import { Input } from 'cool-react-components'

const App = () => {
  const [email, setEmail] = useState('')
  return (
    <div style={{ textAlign: 'center', background: '#2F3336' }}>
      <Input
        type='text'
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
      />
      <Input type='submit' disabled={email === ''} />
    </div>
  )
}

export default App
