import { type ReactElement } from "react"
import styled from "styled-components"

import Img from "../../Img/Img.tsx"
import { colors } from "../../../styles/theme.ts"
import Popup from "reactjs-popup"
import "reactjs-popup/dist/index.css"
import { SORT_OPTIONS } from "../../../constants.ts"
import SortList from "./SortList.tsx"
import useSearchParams from "../../../store/hooks/useSearchParams.ts"

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
  cursor: pointer;
`

const BoldStyle = styled.b`
  color: ${colors.orange};
`

const Sort = (): ReactElement => {
  const { selectedFilter } = useSearchParams()

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
        <SortList sortOptions={SORT_OPTIONS} />
      </Popup>
    </SortStyle>
  )
}

export default Sort
