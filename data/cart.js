export let cart = JSON.parse(localStorage.getItem('cart')) || [

    {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2,
    deliveryOption: "1"
  },
  {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
    deliveryOption: "1"
    
  },  
];



/*  export function addToCart(productId){
    let matchingItem;

    cart.forEach((cartItem) => {
      if (productId === cartItem.productId){
        matchingItem = cartItem
      }
      if (matchingItem){
        matchingItem.quantity += 1
      }

      else{
        cart.push({
          productId,
          quantity: 1,
          deliveryOption: '1'
        })
      }

    }) 
   
     console.log(cart) 
} */


    
export function addToCart (productId){
  let matchingItem;

  cart.forEach((CartItem) => {
  if (productId === CartItem.productId){
  matchingItem = CartItem
  }
  })

  if (matchingItem){
  matchingItem.quantity += 1
  }

  else{
  cart.push({
  productId,
  quantity: 1,
  deliveryOptionId: '1'

  });
  }

  saveToStorage()
  
} 

export function updateCartQuantity () {
       
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
     cartQuantity += cartItem.quantity
  })
  
  document.querySelector('.js-cart-items-number').innerHTML = cartQuantity
  saveToStorage()
 }

 export function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart))
 }




 export function removeFromCart(productId){
   const newCart = [];
      cart.forEach((cartItem) => {
       
        if (cartItem.productId !== productId){
          newCart.push(cartItem)
        }
      })

      cart = newCart;
  
 }


 export function calculateNewCartQuantity (productId, newQuantity){
  let matchingItem;

  cart.forEach((CartItem) => {
  if (productId === CartItem.productId){
  matchingItem = CartItem
  }
  })

  matchingItem.quantity = newQuantity

 /* updateCartQuantity(); */
 saveToStorage();

 }


export function  updateDeliveryOption(foodId, deliveryOptionId){
  let matchingItem;

  cart.forEach((CartItem) => {
  if (foodId === CartItem.productId){
  matchingItem = CartItem
  }
  })

  matchingItem.deliveryOptionId = deliveryOptionId
    saveToStorage();

   }
