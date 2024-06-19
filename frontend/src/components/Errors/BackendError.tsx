import { type ReactElement } from "react"
import FullScreenBaseError from "./FullScreenBaseError.tsx"

const BackendError = (): ReactElement => {
  return (
    <FullScreenBaseError
      title={"SERVER ERROR"}
      description={"Нет соединения с сервером. Попробуйте позже."}
    />
  )
}

export default BackendError
