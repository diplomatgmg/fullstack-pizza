import { FC } from "react"
import { useFormContext } from "react-hook-form"
import { AuthInput, AuthInputGroup, AuthError } from "./AuthStyle.tsx"

interface AuthInputFieldProps {
  name: string
  type: string
  placeholder: string
  required?: boolean
}

const AuthInputField: FC<AuthInputFieldProps> = ({
  name,
  type,
  placeholder,
  required = false,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <AuthInputGroup>
      <AuthInput
        type={type}
        placeholder={placeholder}
        {...register(name, { required })}
      />
      {errors[name] && <AuthError>Обязательное поле</AuthError>}
    </AuthInputGroup>
  )
}

export default AuthInputField
