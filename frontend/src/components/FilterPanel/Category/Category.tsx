import { type ReactElement } from "react"
import { useGetCategoriesQuery } from "../../../store/api/pizzaApi.ts"
import CategoryList from "./CategoryList.tsx"

const Category = (): ReactElement => {
  const { data, isLoading } = useGetCategoriesQuery()

  return <CategoryList categories={data || []} isLoading={isLoading} />
}

export default Category
