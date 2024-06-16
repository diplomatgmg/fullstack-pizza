import Header from "../../components/Header/Header.tsx"
import Container from "../../components/Container/Container.tsx"
import Login from "../../components/Auth/Login.tsx"
import { AuthStyle } from "./AuthStyle.tsx"

const LoginPage = () => {
  return (
    <AuthStyle>
      <Container>
        <Header />
      </Container>

      <Container withBorder={false}>
        <Login />
      </Container>
    </AuthStyle>
  )
}

export default LoginPage
