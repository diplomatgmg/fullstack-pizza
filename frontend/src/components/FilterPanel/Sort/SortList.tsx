import { FC, type ReactElement } from "react"
import { TSortOption } from "../../../constants.ts"
import styled from "styled-components"
import { colors } from "../../../styles/theme.ts"
import SortItem from "./SortItem.tsx"

interface SortListProps {
  sortOptions: TSortOption[]
}

const SortListStyle = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border: 1px solid ${colors.grey};
  border-radius: 5px;
  padding: 1rem;
`

const SortList: FC<SortListProps> = ({ sortOptions }): ReactElement => {
  return (
    <SortListStyle>
      {sortOptions.map((option) => (
        <SortItem option={option} key={option.ordering} />
      ))}
    </SortListStyle>
  )
}

export default SortList
