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

interface Inputs {
  email: string
  password: string
  password2: string
}

const Register = (): ReactElement => {
  const [registerMutation] = useRegisterMutation()
  const dispatch = useAppDispatch()
  const formMethods = useForm<Inputs>()
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    const response = await handleAsyncError(
      registerMutation(formData).unwrap(),
      setErrorMessage
    )
    if (response) {
      dispatch(setEmail(response))
    }
  }

  return (
    <AuthFormWrapper
      onSubmit={onSubmit}
      formMethods={formMethods}
      errorMessage={errorMessage}>
      <h2>Регистрация</h2>
      <AuthInputField name="email" type="email" placeholder="Email" required />
      <AuthInputField
        name="password"
        type="password"
        placeholder="Пароль"
        required
      />
      <AuthInputField
        name="password2"
        type="password"
        placeholder="Повтор пароля"
        valueToValidate={formMethods.watch("password")}
      />
      <Button type="submit" width="230px">
        Зарегистрироваться
      </Button>
      <AuthLink to={routes.login.path}>Есть аккаунт?</AuthLink>
    </AuthFormWrapper>
  )
}

export default Register
