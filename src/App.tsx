import { useState } from "react"
import type { Product } from "./data/Product"
import { products } from "./data/Product"
import { ProductCard } from "./components/ProductCard"
import { Cart } from "./components/Cart"
import "./App.css"   //

interface CartItem extends Product {
  quantity: number
}

function App() {

  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const updateQuantity = (id: number, amount: number) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter(item => item.quantity > 0)
    )
  }

  const sendOrder = () => {
    const message = cart
      .map(item => `${item.name} x${item.quantity} - $${item.price * item.quantity}`)
      .join("%0A")

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

    const whatsappURL =
      `https://wa.me/5492235400862?text=Hola! Quiero hacer el siguiente pedido:%0A%0A${message}%0A%0ATotal: $${total}`

    window.open(whatsappURL, "_blank")
  }

  return (
    <div className="container">
      <h1>Con Cortantes Jugamos</h1>

      <div className="products">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      <Cart
        cart={cart}
        updateQuantity={updateQuantity}
        sendOrder={sendOrder}
      />
    </div>
  )
}

export default App