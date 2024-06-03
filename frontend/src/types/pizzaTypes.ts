interface TIngredient {
  name: string
}

interface TCategory {
  name: string
}

interface TPizza {
  name: string
  price: string
  ingredients: TIngredient[]
  categories: TCategory[]
  image: string
}

export type { TIngredient, TCategory, TPizza }
