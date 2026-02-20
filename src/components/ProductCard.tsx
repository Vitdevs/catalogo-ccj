import type { Product } from "../data/Product"

interface Props {
  product: Product
  addToCart: (product: Product) => void
}

export const ProductCard = ({ product, addToCart }: Props) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>
        Agregar al carrito
      </button>
    </div>
  )
}