import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

const ResetPasswordConfirm = () => {
  const { uid, token } = useParams()
  const history = useHistory()
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost/auth/users/reset_password_confirm/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ uid, token, new_password: password })
    })
      .then(res => {
        if (res.ok) {
          setMessage('Пароль успешно изменён. Перенаправление на вход...')
          setTimeout(() => history.push('/signin'), 2000)
        } else {
          setMessage('Ошибка при изменении пароля.')
        }
      })
      .catch(() => setMessage('Ошибка при изменении пароля.'))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Новый пароль:
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Сменить пароль</button>
      {message && <p>{message}</p>}
    </form>
  )
}

export default ResetPasswordConfirm
