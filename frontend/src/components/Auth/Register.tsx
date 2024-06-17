import { ReactElement } from "react"
import {
  AuthContainer,
  AuthError,
  AuthForm,
  AuthInput,
  AuthInputGroup,
  AuthLink,
} from "./AuthStyle.tsx"
import Button from "../Button/Button.tsx"
import routes from "../../routes/routes.tsx"
import { useRegisterMutation } from "../../store/api/authApi.ts"
import { SubmitHandler, useForm } from "react-hook-form"
import { setEmail } from "../../store/slice/authSlice.ts"
import useAppDispatch from "../../store/hooks/useAppDispatch.ts"

interface Inputs {
  email: string
  password: string
  password2: string
}

const Register = (): ReactElement => {
  const [registerMutation] = useRegisterMutation()
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    const response = await registerMutation(formData).unwrap()
    dispatch(setEmail(response))
  }

  return (
    <AuthContainer>
      <h2>Регистрация</h2>
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

        <AuthInputGroup>
          <AuthInput
            type="password"
            placeholder="Повтор пароля"
            {...register("password2")}
          />
          {errors.password2 && <AuthError>Обязательное поле</AuthError>}
        </AuthInputGroup>

        <Button type="submit" width="230px">
          Зарегистрироваться
        </Button>
      </AuthForm>
      <AuthLink to={routes.login.path}>Есть аккаунт?</AuthLink>
    </AuthContainer>
  )
}

export default Register
