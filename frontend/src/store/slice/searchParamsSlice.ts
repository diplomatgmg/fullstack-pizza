import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import {
  TOrderingFields,
  TSearchParams,
} from "../../types/store/searchParamsTypes.ts"

const initialState: TSearchParams = {
  page: 1,
  category: "все",
  ordering: "",
  name: "",
}

const searchParamsSlice = createSlice({
  name: "searchParams",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload
    },
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload
    },
    setOrdering(state, action: PayloadAction<TOrderingFields>) {
      state.ordering = action.payload
    },
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload
    },
  },
})

export const { setPage, setCategory, setOrdering, setName } =
  searchParamsSlice.actions

export default searchParamsSlice.reducer
