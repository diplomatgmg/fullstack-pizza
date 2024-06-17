import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form"
import { AuthContainer, AuthForm } from "./AuthStyle.tsx"
import { ReactNode } from "react"

interface AuthFormWrapperProps<TFieldValues extends FieldValues> {
  children: ReactNode
  onSubmit: SubmitHandler<TFieldValues>
  formMethods: UseFormReturn<TFieldValues>
}

const AuthFormWrapper = <TFieldValues extends FieldValues>({
  children,
  onSubmit,
  formMethods,
}: AuthFormWrapperProps<TFieldValues>) => (
  <AuthContainer>
    <AuthForm onSubmit={formMethods.handleSubmit(onSubmit)}>
      <FormProvider {...formMethods}>{children}</FormProvider>
    </AuthForm>
  </AuthContainer>
)

export default AuthFormWrapper
