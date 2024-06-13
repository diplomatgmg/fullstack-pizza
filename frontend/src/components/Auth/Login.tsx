import { AuthContainer, AuthForm, AuthInput, AuthLink } from "./AuthStyles.tsx"
import Button from "../Button/Button.tsx"
import { ReactElement } from "react"
import routes from "../../routes/routes.tsx"

const Login = (): ReactElement => {
  return (
    <AuthContainer>
      <h2>Вход</h2>
      <AuthForm>
        <AuthInput type="email" placeholder="Email" />
        <AuthInput type="password" placeholder="Пароль" />
        <Button type="submit" width="100%">
          Войти
        </Button>
      </AuthForm>
      <AuthLink to={routes.register.path}>Нет аккаунта?</AuthLink>
    </AuthContainer>
  )
}

export default Login
