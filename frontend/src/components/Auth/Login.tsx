import {
  AuthContainer,
  AuthError,
  AuthForm,
  AuthInput,
  AuthInputGroup,
  AuthLink,
} from "./AuthStyle.tsx"
import Button from "../Button/Button.tsx"
import { ReactElement } from "react"
import routes from "../../routes/routes.tsx"
import { SubmitHandler, useForm } from "react-hook-form"
import { useLoginMutation } from "../../store/api/authApi.ts"
import { setCredentials } from "../../store/slice/authSlice.ts"
import useAppDispatch from "../../store/hooks/useAppDispatch.ts"

interface Inputs {
  email: string
  password: string
}

const Login = (): ReactElement => {
  const [loginMutation] = useLoginMutation()
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    const response = await loginMutation(formData).unwrap()
    dispatch(setCredentials(response))
  }

  return (
    <AuthContainer>
      <h2>Вход</h2>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <AuthInputGroup>
          <AuthInput
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && <AuthError>Обязательное поле</AuthError>}
        </AuthInputGroup>

        <AuthInputGroup>
          <AuthInput
            type="password"
            placeholder="Пароль"
            {...register("password", { required: true })}
          />
          {errors.password && <AuthError>Обязательное поле</AuthError>}
        </AuthInputGroup>

        <Button type="submit" width="140px">
          Войти
        </Button>
      </AuthForm>
      <AuthLink to={routes.register.path}>Нет аккаунта?</AuthLink>
    </AuthContainer>
  )
}

export default Login
