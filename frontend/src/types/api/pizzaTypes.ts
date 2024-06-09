export interface TIngredient {
  id: number
  name: string
}

export interface TCategory {
  id: number
  name: string
}

export interface TPizza {
  id: number
  name: string
  price: string
  ingredients: TIngredient[]
  categories: TCategory[]
  image: string
}
