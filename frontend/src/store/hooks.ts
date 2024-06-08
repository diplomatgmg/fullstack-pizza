import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux"
import { AppDispatch, RootState } from "./store.ts"

const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const useSearchParams = (): RootState["searchParams"] =>
  useAppSelector((state) => state.searchParams)

export { useAppDispatch, useAppSelector, useSearchParams }
