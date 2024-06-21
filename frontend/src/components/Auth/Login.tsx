import { ReactElement, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useLoginMutation } from "../../store/api/authApi.ts"
import { setCredentials } from "../../store/slice/authSlice.ts"
import useAppDispatch from "../../store/hooks/useAppDispatch.ts"
import AuthFormWrapper from "./AuthFormWrapper"
import AuthInputField from "./AuthInputField"
import Button from "../Button/Button.tsx"
import routes from "../../routes/routes.tsx"
import { AuthLink } from "./AuthStyle.tsx"
import handleAsyncError from "../../utils/handleAsyncError.ts"
import { useNavigate } from "react-router-dom"

interface Inputs {
  email: string
  password: string
}

const Login = (): ReactElement => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [loginMutation, { isLoading }] = useLoginMutation()
  const dispatch = useAppDispatch()
  const formMethods = useForm<Inputs>({ mode: "onChange" })
  const {
    formState: { isValid },
  } = formMethods
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    const response = await handleAsyncError(
      loginMutation(formData).unwrap(),
      setErrorMessage
    )
    if (response) {
      dispatch(setCredentials(response))
      navigate(routes.home.path, { state: { fromLogin: true } })
    }
  }

  return (
    <AuthFormWrapper
      onSubmit={onSubmit}
      formMethods={formMethods}
      errorMessage={errorMessage}>
      <h2>Вход</h2>
      <AuthInputField
        name="email"
        type="email"
        placeholder="Email"
        required
        autoComplete="email"
      />
      <AuthInputField
        name="password"
        type="password"
        placeholder="Пароль"
        required
        autoComplete="current-password"
      />
      <Button
        type="submit"
        width="140px"
        disabled={!isValid || isLoading}
        loading={isLoading}>
        Войти
      </Button>
      <AuthLink to={routes.register.path}>Нет аккаунта?</AuthLink>
    </AuthFormWrapper>
  )
}

export default Login
