import { type ReactElement } from "react"
import styled from "styled-components"

const SortStyle = styled.div`
  white-space: nowrap;
`

const Sort = (): ReactElement => {
  return (
    <SortStyle>
      Сортировка по:{" "}
      <a href="#">
        <b>цене</b>
      </a>
    </SortStyle>
  )
}

export default Sort
