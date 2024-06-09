import { RootState } from "../store.ts"
import useAppSelector from "./useAppSelector.tsx"

const useSearchParams = (): RootState["searchParams"] => {
  return useAppSelector((state: RootState) => state.searchParams)
}
export default useSearchParams
