import { useEffect } from "react"
import Header from "../components/Header/Header"
import Container from "../components/Container/Container"
import styled from "styled-components"
import { colors } from "../styles/theme"
import FilterPanel from "../components/FilterPanel/FilterPanel"
import Pizza from "../components/Pizza/Pizza"
import Pagination from "../components/Pagination/Pagination"
import { toast, ToastContainer } from "react-toastify"
import { useLocation, useNavigate } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css"

const HomeStyle = styled.div`
  margin: 2rem;
  background-color: ${colors.white};
  border-radius: 2rem;
`

const HomePage = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.state?.fromLogin) {
      toast.success("Вы успешно авторизованы!")
    }
    if (location.state?.fromLogout) {
      toast.success("Вы успешно вышли!")
    }
    navigate(location.pathname, { replace: true, state: {} })
  }, [
    location.pathname,
    location.state?.fromLogin,
    location.state?.fromLogout,
    navigate,
  ])

  return (
    <HomeStyle>
      <Container>
        <Header />
      </Container>

      <Container>
        <FilterPanel />
      </Container>

      <Container>
        <Pizza />
      </Container>

      <Container withBorder={false}>
        <Pagination />
      </Container>

      <ToastContainer position={"bottom-right"} />
    </HomeStyle>
  )
}

export default HomePage
