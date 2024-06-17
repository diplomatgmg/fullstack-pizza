import { FC } from "react"
import { useFormContext } from "react-hook-form"
import { AuthError, AuthInput, AuthInputGroup } from "./AuthStyle.tsx"

interface AuthInputFieldProps {
  name: string
  type: string
  placeholder: string
  required?: boolean
  validate?: boolean
  valueToValidate?: string
}

const AuthInputField: FC<AuthInputFieldProps> = ({
  name,
  type,
  placeholder,
  required = false,
  valueToValidate,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const validationRules = {
    required: required && "Обязательное поле",
    validate: valueToValidate
      ? (value: string) => value === valueToValidate || "Пароли не совпадают"
      : undefined,
  }

  return (
    <AuthInputGroup>
      <AuthInput
        type={type}
        placeholder={placeholder}
        {...register(name, validationRules)}
      />
      {errors[name] && <AuthError>{String(errors[name]?.message)}</AuthError>}
    </AuthInputGroup>
  )
}

export default AuthInputField
