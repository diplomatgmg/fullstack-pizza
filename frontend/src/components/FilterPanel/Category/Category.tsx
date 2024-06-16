import { type ReactElement } from "react"
import { useGetCategoriesQuery } from "../../../store/api/pizzaApi.ts"
import CategoryList from "./CategoryList/CategoryList.tsx"
import CategoryListSkeleton from "./CategoryList/CategoryListSkeleton.tsx"

const Category = (): ReactElement => {
  const { data, isLoading } = useGetCategoriesQuery()

  if (isLoading) {
    return <CategoryListSkeleton />
  }

  return <CategoryList categories={data || []} />
}

export default Category
