import { ErrorResponse } from "../types/api/responseTypes.ts"

const handleBadRequest = (
  errorData: ErrorResponse["data"],
  setError: (message: string | null) => void
) => {
  if ("email" in errorData) {
    setError("Пользователь с таким email уже существует")
  } else {
    setError("Произошла ошибка. Попробуйте снова.")
  }
}

const handleUnauthorized = (
  errorData: ErrorResponse["data"],
  setError: (message: string | null) => void
) => {
  if ("detail" in errorData) {
    setError(errorData.detail)
  } else {
    setError("Неавторизованный доступ.")
  }
}

const handleGenericError = (setError: (message: string | null) => void) => {
  setError("Произошла ошибка. Попробуйте снова.")
}

const handleAsyncError = async <T>(
  asyncFunc: Promise<T>,
  setError: (message: string | null) => void
): Promise<T | null> => {
  try {
    return await asyncFunc
  } catch (error) {
    const e = error as ErrorResponse
    const { status, data } = e

    switch (status) {
      case 400:
        handleBadRequest(data, setError)
        break
      case 401:
        handleUnauthorized(data, setError)
        break
      default:
        handleGenericError(setError)
        break
    }

    return null
  }
}

export default handleAsyncError
