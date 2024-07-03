import styled from "styled-components"

export const CartItemStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 24px;
`

export const CartItemImage = styled.img`
  width: 120px;
  height: 120px;
  margin-right: 24px;
`

export const CartItemName = styled.h3`
  display: flex;
  align-items: center;
  width: 50%;
  font-size: 1.5rem;
`

export const CartItemCount = styled.div`
  display: flex;
  align-items: center;
`

export const CartItemCountValue = styled.div`
  font-size: 22px;
  font-weight: bold;

  margin: 0 12px;
`

export const CartItemPrice = styled.div`
  font-size: 22px;
  font-weight: bold;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 20%;

  white-space: nowrap;

  p {
    margin: 0;
  }

  p:first-of-type {
    font-size: 12px;
    margin-bottom: 0.5rem;

    color: #7b7b7b;
  }
`

export const CartStyle = styled.div`
  width: 100%;
  max-width: 820px;
  margin: 1rem auto;
`

export const CartHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
`

export const CartHeaderTitleStyle = styled.div`
  display: flex;
  align-items: center;
`

export const CartTitleStyle = styled.h2`
  font-size: 32px;
  margin: 0;

  display: flex;
  align-items: center;

  svg {
    width: 30px;
    margin-right: 10px;
  }
`

export const CartIconStyle = styled.div`
  filter: brightness(0);
  margin-right: 1rem;
`

export const CartClearStyle = styled.div`
  display: flex;
  align-items: center;

  transition: background-color linear 100ms;
  white-space: nowrap;
`

export const CartTextStyle = styled.p`
  margin-left: 1rem;
  color: #b6b6b6;
`
