import styled from "styled-components"

export const PizzaItemStyle = styled.div`
  height: 490px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.05);
  padding: 1rem 2rem;
  border-radius: 1rem;
`

export const Image = styled.img`
  margin-top: 1rem;
  margin-left: 1rem;
  user-select: none;
`

export const Name = styled.h2`
  font-size: 1.75rem;
  margin: 1rem 0;
  text-align: center;
`

export const Ingredients = styled.p`
  font-size: 0.9rem;
  text-align: center;
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  margin-top: auto;
  gap: 1rem;
`

export const Price = styled.p`
  font-size: 1.25rem;
  font-weight: bold;

  white-space: nowrap;
`

export const Cart = styled.div`
  white-space: nowrap;
`
