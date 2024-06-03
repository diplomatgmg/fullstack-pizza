import { type ReactElement } from "react"
import Button from "../../Button/Button.tsx"
import styled from "styled-components"

const EmailStyle = styled.span`
  margin-right: 1.5rem;
`

const AuthButton = (): ReactElement => {
  return (
    <div>
      <EmailStyle>email@email.com</EmailStyle>
      <Button text={"Выйти"} />
    </div>
  )
}

export default AuthButton
