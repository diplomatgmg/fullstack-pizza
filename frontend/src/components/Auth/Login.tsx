import { ReactElement } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useLoginMutation } from "../../store/api/authApi.ts"
import { setCredentials } from "../../store/slice/authSlice.ts"
import useAppDispatch from "../../store/hooks/useAppDispatch.ts"
import AuthFormWrapper from "./AuthFormWrapper"
import AuthInputField from "./AuthInputField"
import Button from "../Button/Button.tsx"
import routes from "../../routes/routes.tsx"
import { AuthLink } from "./AuthStyle.tsx"

interface Inputs {
  email: string
  password: string
}

const Login = (): ReactElement => {
  const [loginMutation] = useLoginMutation()
  const dispatch = useAppDispatch()
  const formMethods = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    const response = await loginMutation(formData).unwrap()
    dispatch(setCredentials(response))
  }

  return (
    <AuthFormWrapper onSubmit={onSubmit} formMethods={formMethods}>
      <h2>Вход</h2>
      <AuthInputField name="email" type="email" placeholder="Email" required />
      <AuthInputField
        name="password"
        type="password"
        placeholder="Пароль"
        required
      />
      <Button type="submit" width="140px">
        Войти
      </Button>
      <AuthLink to={routes.register.path}>Нет аккаунта?</AuthLink>
    </AuthFormWrapper>
  )
}

export default Login
