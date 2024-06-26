import { RootState } from "../store.ts"
import useAppSelector from "./useAppSelector.ts"

const useSearchParams = (): RootState["searchParams"] => {
  return useAppSelector((state: RootState) => state.searchParams)
}

export default useSearchParams
