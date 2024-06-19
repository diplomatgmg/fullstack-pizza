import { ErrorResponse } from "../types/api/responseTypes.ts"

const handleAsyncError = async <T>(
  asyncFunc: Promise<T>,
  setError: (message: string | null) => void
): Promise<T | null> => {
  try {
    return await asyncFunc
  } catch (error) {
    const e = error as ErrorResponse
    if (e.status === 400) {
      if ("email" in e.data) {
        setError("Пользователь с таким email уже существует")
      } else {
        setError("Произошла ошибка. Попробуйте снова.")
      }
    } else {
      setError("Произошла ошибка. Попробуйте снова.")
    }
    return null
  }
}

export default handleAsyncError
