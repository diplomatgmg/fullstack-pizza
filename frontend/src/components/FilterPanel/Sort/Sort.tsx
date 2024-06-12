import { type ReactElement, useState } from "react"
import styled from "styled-components"

import Img from "../../Img/Img.tsx"
import { colors } from "../../../styles/theme.ts"
import Popup from "reactjs-popup"
import "reactjs-popup/dist/index.css"
import { SORT_FILTER_OPTIONS, TSortFilterOption } from "../../../constants.ts"
import useAppDispatch from "../../../store/hooks/useAppDispatch.tsx"
import { setOrdering } from "../../../store/slice/searchParamsSlice.ts"

const SortStyle = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
`

const SpanStyle = styled.span`
  margin-right: 0.5rem;
`

const SortLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  text-decoration: none;
  cursor: pointer;
`

const BoldStyle = styled.b`
  color: ${colors.orange};
`

const FilterList = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border: 1px solid ${colors.grey};
  border-radius: 5px;
  padding: 1rem;
`

const FilterItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  text-decoration: none;
  color: ${colors.black};
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }
`

const Sort = (): ReactElement => {
  const [selectedFilter, setSelectedFilter] = useState(SORT_FILTER_OPTIONS[0])
  const dispatch = useAppDispatch()

  const handleSetOrdering = (filter: TSortFilterOption) => {
    setSelectedFilter(filter)
    dispatch(setOrdering(filter.ordering))
  }

  return (
    <SortStyle>
      <SpanStyle>Сортировка по: </SpanStyle>
      <Popup
        trigger={
          <SortLink>
            <BoldStyle>{selectedFilter.label}</BoldStyle>
            <Img src={selectedFilter.icon} />
          </SortLink>
        }
        position="bottom right"
        on="click">
        <FilterList>
          {SORT_FILTER_OPTIONS.map((filter) => (
            <FilterItem
              key={filter.ordering}
              onClick={() => handleSetOrdering(filter)}>
              <Img src={filter.icon} />
              {filter.label}
            </FilterItem>
          ))}
        </FilterList>
      </Popup>
    </SortStyle>
  )
}

export default Sort
