import { type ReactElement } from "react"
import Button from "../Button/Button.tsx"
import styled from "styled-components"

const PAGINATION_ITEMS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

const PaginationStyle = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding-bottom: 1rem;
  margin-bottom: 0;
`

const Pagination = (): ReactElement => {
  return (
    <PaginationStyle>
      {PAGINATION_ITEMS.map((item, index) => (
        <Button key={index}>{item}</Button>
      ))}
    </PaginationStyle>
  )
}

export default Pagination
