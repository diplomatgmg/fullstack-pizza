import { AppDispatch } from "../store.ts"
import { useDispatch } from "react-redux"

const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()

export default useAppDispatch
