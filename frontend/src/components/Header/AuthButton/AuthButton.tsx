import { type ReactElement } from "react"
import Button from "../../Button/Button.tsx"
import styled from "styled-components"
import useAuth from "../../../store/hooks/useAuth.ts"
import { Link } from "react-router-dom"
import routes from "../../../routes/routes.tsx"
import { colors } from "../../../styles/theme.ts"
import { logout } from "../../../store/slice/authSlice.ts"
import useAppDispatch from "../../../store/hooks/useAppDispatch.ts"

const AuthButtonStyle = styled.div`
  display: flex;
  align-items: center;
`

const EmailStyle = styled.span`
  margin-right: 1.5rem;
  font-size: 1.25rem;
`

const AuthButton = (): ReactElement => {
  const { token } = useAuth()
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  if (!token.access) {
    return (
      <Link to={routes.login.path}>
        <Button
          bgColor={colors.white}
          borderColor={colors.orange}
          color={colors.orange}>
          Войти
        </Button>
      </Link>
    )
  }

  return (
    <AuthButtonStyle>
      <EmailStyle>email@email.com</EmailStyle>
      <Button onClick={handleLogout}>Выйти</Button>
    </AuthButtonStyle>
  )
}

export default AuthButton
