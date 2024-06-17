import Header from "../../components/Header/Header.tsx"
import Container from "../../components/Container/Container.tsx"
import Register from "../../components/Auth/Register.tsx"
import { AuthStyle } from "./AuthStyle.tsx"

const RegisterPage = () => {
  return (
    <AuthStyle>
      <Container>
        <Header />
      </Container>

      <Container withBorder={false}>
        <Register />
      </Container>
    </AuthStyle>
  )
}

export default RegisterPage
