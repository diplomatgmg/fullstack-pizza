import { RootState } from "../store.ts"
import useAppSelector from "./useAppSelector.ts"

const useAuth = (): RootState["auth"] => {
  return useAppSelector((state: RootState) => state.auth)
}

export default useAuth
