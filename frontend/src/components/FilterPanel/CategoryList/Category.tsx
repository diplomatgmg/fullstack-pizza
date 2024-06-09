import { type ReactElement } from "react"
import { useGetCategoriesQuery } from "../../../store/api/pizzaApi.ts"
import CategoryList from "./CategoryList.tsx"

const Category = (): ReactElement => {
  const { data, isLoading } = useGetCategoriesQuery()

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return <CategoryList categories={data || []} />
}

export default Category
