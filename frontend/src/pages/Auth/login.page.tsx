import Header from "../../components/Header/Header.tsx"
import Container from "../../components/Container/Container.tsx"
import Login from "../../components/Auth/Login.tsx"
import { AuthStyle } from "./AuthStyle.tsx"
import { useEffect } from "react"
import { toast, ToastContainer } from "react-toastify"
import { useLocation } from "react-router-dom"

const LoginPage = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.fromRegister) {
      toast.success("Регистрация прошла успешно! Теперь вы можете войти.")
    }
  }, [location.state])

  return (
    <AuthStyle>
      <Container>
        <Header />
      </Container>

      <Container withBorder={false}>
        <Login />
      </Container>

      <ToastContainer position={"bottom-right"} />
    </AuthStyle>
  )
}

export default LoginPage
