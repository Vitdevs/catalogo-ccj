export interface Product {
  id: number
  name: string
  price: number
  image: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "Combo Escolar",
    price: 8500,
    image: "/img/promo 1.jpeg"
  },
  {
    id: 2,
    name: "Combo Navidad",
    price: 9200,
    image: "/img/promo2.png"
  },
  {
    id: 3,
    name: "Combo Cumpleaños",
    price: 7800,
    image: "/img/promo3.png"
  }
]