import { ReactElement, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useRegisterMutation } from "../../store/api/authApi.ts"
import { setEmail } from "../../store/slice/authSlice.ts"
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
  password2: string
}

const Register = (): ReactElement => {
  const [registerMutation, { isLoading }] = useRegisterMutation()
  const dispatch = useAppDispatch()
  const formMethods = useForm<Inputs>({ mode: "onChange" })
  const {
    formState: { isValid },
    watch,
  } = formMethods
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    const response = await handleAsyncError(
      registerMutation(formData).unwrap(),
      setErrorMessage
    )
    if (response) {
      dispatch(setEmail(response))
      navigate(routes.login.path, { state: { fromRegister: true } })
    }
  }

  return (
    <AuthFormWrapper
      onSubmit={onSubmit}
      formMethods={formMethods}
      errorMessage={errorMessage}>
      <h2>Регистрация</h2>
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
        autoComplete="new-password"
      />
      <AuthInputField
        name="password2"
        type="password"
        placeholder="Повтор пароля"
        valueToValidate={watch("password")}
        required
        autoComplete="new-password"
      />
      <Button
        type="submit"
        width="230px"
        disabled={!isValid || isLoading}
        loading={isLoading}>
        Зарегистрироваться
      </Button>
      <AuthLink to={routes.login.path}>Есть аккаунт?</AuthLink>
    </AuthFormWrapper>
  )
}

export default Register
