import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form"
import { AuthContainer, AuthForm } from "./AuthStyle.tsx"
import { ReactNode } from "react"
import styled from "styled-components"
import { colors } from "../../styles/theme.ts"

interface AuthFormWrapperProps<TFieldValues extends FieldValues> {
  children: ReactNode
  onSubmit: SubmitHandler<TFieldValues>
  formMethods: UseFormReturn<TFieldValues>
  errorMessage?: string | null
}

const ErrorMessage = styled.p`
  text-align: center;
  color: ${colors.red};
  font-weight: bold;
`

const AuthFormWrapper = <TFieldValues extends FieldValues>({
  children,
  onSubmit,
  formMethods,
  errorMessage,
}: AuthFormWrapperProps<TFieldValues>) => (
  <AuthContainer>
    <AuthForm onSubmit={formMethods.handleSubmit(onSubmit)}>
      <FormProvider {...formMethods}>{children}</FormProvider>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </AuthForm>
  </AuthContainer>
)

export default AuthFormWrapper
