import React, { useState } from 'react'

const RequestResetPassword = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost/auth/users/reset_password/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    })
      .then(res => {
        if (res.ok) {
          setMessage('Письмо с инструкциями отправлено на вашу почту.')
        } else {
          setMessage('Ошибка при отправке письма.')
        }
      })
      .catch(() => setMessage('Ошибка при отправке письма.'))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Введите ваш email:
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </label>
      <button type="submit">Отправить</button>
      {message && <p>{message}</p>}
    </form>
  )
}

export default RequestResetPassword
