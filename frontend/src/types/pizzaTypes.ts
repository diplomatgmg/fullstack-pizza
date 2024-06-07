interface TIngredient {
  id: number
  name: string
}

interface TCategory {
  id: number
  name: string
}

interface TPizza {
  id: number
  name: string
  price: string
  ingredients: TIngredient[]
  categories: TCategory[]
  image: string
}

export type { TIngredient, TCategory, TPizza }
