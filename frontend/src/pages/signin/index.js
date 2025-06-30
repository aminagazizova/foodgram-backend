import React from 'react'
import { Container, Input, Title, Main, Form, Button } from '../../components'
import styles from './styles.module.css'
import { useFormWithValidation } from '../../utils'
import { AuthContext } from '../../contexts'
import { Redirect } from 'react-router-dom'
import MetaTags from 'react-meta-tags'

const SignIn = ({ onSignIn }) => {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation()
  const authContext = useContext(AuthContext)

  const GITHUB_AUTH_URL = "http://localhost/auth/login/github/" // <- ссылка на твой бэкенд

  return <Main>
    {authContext && <Redirect to='/recipes' />}
    <Container>
      <MetaTags>
        <title>Войти на сайт</title>
        <meta name="description" content="Продуктовый помощник - Войти на сайт" />
        <meta property="og:title" content="Войти на сайт" />
      </MetaTags>
      <Title title='Войти на сайт' />
      <Form
        className={styles.form}
        onSubmit={e => {
          e.preventDefault()
          onSignIn(values)
        }}
      >
        <Input
          required
          label='Электронная почта'
          name='email'
          onChange={handleChange}
        />
        <Input
          required
          label='Пароль'
          type='password'
          name='password'
          onChange={handleChange}
        />
        <Button
          modifier='style_dark-blue'
          disabled={!isValid}
          type='submit'
          className={styles.button}
        >
          Войти
        </Button>
      </Form>

      <hr className={styles.separator} />

      {/* Кнопка для входа через GitHub */}
      <a href={GITHUB_AUTH_URL} className={styles.githubButton}>
        <Button modifier='style_github' type='button'>
          Войти через GitHub
        </Button>
      </a>
    </Container>
  </Main>
}

export default SignIn
