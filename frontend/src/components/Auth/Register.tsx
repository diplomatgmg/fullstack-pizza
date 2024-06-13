import { ReactElement } from "react"
import { AuthContainer, AuthForm, AuthInput, AuthLink } from "./AuthStyles.tsx"
import Button from "../Button/Button.tsx"
import routes from "../../routes/routes.tsx"

const Register = (): ReactElement => {
  return (
    <AuthContainer>
      <h2>Регистрация</h2>
      <AuthForm>
        <AuthInput type="email" placeholder="Email" />
        <AuthInput type="password" placeholder="Пароль" />
        <AuthInput type="password" placeholder="Повтор пароля" />
        <Button type="submit" width="100%">
          Зарегистрироваться
        </Button>
      </AuthForm>
      <AuthLink to={routes.login.path}>Есть аккаунт?</AuthLink>
    </AuthContainer>
  )
}

export default Register
