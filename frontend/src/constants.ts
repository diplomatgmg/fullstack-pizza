import AscendingBarsIcon from "/svg/ascending-bars.svg"
import DefaultSortIcon from "/svg/default-sort.svg"
import DescendingBarsIcon from "/svg/descending-bars.svg"
import AscendingAZIcon from "/svg/ascending-a-z.svg"
import DescendingZAIcon from "/svg/descending-z-a.svg"
import { TOrderingFields } from "./types/store/searchParamsTypes.ts"

export interface TSortOption {
  label: string
  icon: string
  ordering: TOrderingFields
}

export const SORT_OPTIONS: TSortOption[] = [
  { label: "умолчанию", icon: DefaultSortIcon, ordering: "" },
  { label: "цене", icon: AscendingBarsIcon, ordering: "price" },
  { label: "цене", icon: DescendingBarsIcon, ordering: "-price" },
  { label: "названию", icon: AscendingAZIcon, ordering: "name" },
  { label: "названию", icon: DescendingZAIcon, ordering: "-name" },
]
