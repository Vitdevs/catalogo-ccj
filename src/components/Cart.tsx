import type { Product } from "../data/Product"

interface CartItem extends Product {
  quantity: number
}

interface Props {
  cart: CartItem[]
  updateQuantity: (id: number, amount: number) => void
  sendOrder: () => void
}

export const Cart = ({ cart, updateQuantity, sendOrder }: Props) => {

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="cart">
      <h2>Carrito</h2>

      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <span>{item.name}</span>
          <span>
            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
            {item.quantity}
            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
          </span>
          <span>${item.price * item.quantity}</span>
        </div>
      ))}

      <h3>Total: ${total}</h3>

      {cart.length > 0 && (
        <button className="whatsapp-btn" onClick={sendOrder}>
          Hacer pedido por WhatsApp
        </button>
      )}
    </div>
  )
}