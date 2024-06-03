import { type ReactElement } from "react"
import Button from "../../Button/Button.tsx"
import styled from "styled-components"

const AuthButtonStyle = styled.div`
  display: flex;
  align-items: center;
`

const EmailStyle = styled.span`
  margin-right: 1.5rem;
  font-size: 1.25rem;
`

const AuthButton = (): ReactElement => {
  return (
    <AuthButtonStyle>
      <EmailStyle>email@email.com</EmailStyle>
      <Button text={"Выйти"} />
    </AuthButtonStyle>
  )
}

export default AuthButton
