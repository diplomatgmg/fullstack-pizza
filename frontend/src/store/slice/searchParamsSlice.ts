import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { TSearchParams } from "../../types/store/searchParamsTypes.ts"
import { SORT_OPTIONS, TSortOption } from "../../constants.ts"

const initialState: TSearchParams = {
  page: 1,
  category: "все",
  selectedFilter: SORT_OPTIONS[0],
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
    setOrdering(state, action: PayloadAction<TSortOption>) {
      state.selectedFilter = action.payload
    },
  },
})

export const { setPage, setCategory, setOrdering } = searchParamsSlice.actions

export default searchParamsSlice.reducer
