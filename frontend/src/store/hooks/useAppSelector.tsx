import { TypedUseSelectorHook, useSelector } from "react-redux"
import { RootState } from "../store.ts"

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default useAppSelector
