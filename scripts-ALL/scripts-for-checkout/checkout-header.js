import { cart } from "../../data/cart.js";


export function updateCartQuantityInCheckout (){
  
  let cartQuantity = 0
  cart.forEach((cartItem) => {
cartQuantity += cartItem.quantity
  })

  document.querySelector('.js-cart-number-in-checkout').innerHTML = cartQuantity
}


