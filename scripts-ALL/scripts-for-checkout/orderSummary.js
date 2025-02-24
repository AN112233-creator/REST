
import { cart, removeFromCart, saveToStorage,calculateNewCartQuantity, updateDeliveryOption } from "../../data/cart.js";
import { foods } from "../../data/foods.js";
import { formatCurrency } from "../../utilities/money.js";
import { updateCartQuantityInCheckout } from "./checkout-header.js";
import { paymentSummary } from "./paymentSummary.js";
import { getFood } from "../../data/foods.js";
import { deliveryOptions } from "../../data/delivery-options.js";


 export  function orderSummary (){

  updateCartQuantityInCheckout();


  let checkOutSummaryHTML=''
  cart.forEach((cartItem) => {
    
    const productId = cartItem.productId
     
    let matchingFood = getFood(productId)
    
   /*  foods.forEach((food) => {
      if (food.id === productId){
        matchingFood = food
      }
    })
   */
  
   checkOutSummaryHTML += `<div class="cart-item-container js-cart-item-container-${matchingFood.id}">
    <div class="cart-item-details-grid">
      <div class="product-description">
      <img class="product-image"
        src="${matchingFood.image}">
      <div class="cart-item-details">
        <div class="product-name">
         ${matchingFood.name}
        </div>
        <div class="product-price">
          ₵${formatCurrency(matchingFood.priceCents)}
        </div>
        <div class="product-quantity">
          <span>
            Quantity:<span class="quantity-label js-quantity-label-${matchingFood.id}">${cartItem.quantity}</span>
          </span>
          <span class="update-quantity-link link-primary js-update-quantity-link" data-product-id = ${matchingFood.id}>
            Update
          </span>
           <input class = "update-quantity-input js-quantity-input-${matchingFood.id}">
            <button class="save-quantity-button js-save-quantity-button" data-product-id = ${matchingFood.id} >save</button>
          <span class="delete-quantity-link link-primary js-delete-link js-delete-link-${matchingFood.id}" data-product-id= ${matchingFood.id}>
            Delete
          </span>
        </div>
      </div>
    </div>
    
    <div class="delivery-options">
        <div class="delivery-options-title">
          Choose an option:
        </div>
        ${deliveryOptionsHTML (matchingFood, cartItem)}
      </div>
    </div>
  </div>`
  
  })
  
  document.querySelector('.js-cart-items').innerHTML = checkOutSummaryHTML
  
  
  
  document.querySelectorAll('.js-delete-link').forEach((link) => {
    link.addEventListener('click', () => {
  
     const productId = link.dataset.productId
  
     removeFromCart(productId);
     
     const container = document.querySelector(`.js-cart-item-container-${productId}`)
  
     container.remove()
  
     updateCartQuantityInCheckout();
     saveToStorage();
     paymentSummary();
  
  
    })
  
  })
  
  document.querySelectorAll('.js-update-quantity-link').forEach((link) => {
    link.addEventListener('click', () =>{
     
      const productId = link.dataset.productId
  
      const container = document.querySelector(`.js-cart-item-container-${productId}`)
  
      container.classList.add('is-editing-quantity')
  
  
  
    })
  })
  
  document.querySelectorAll('.js-save-quantity-button').forEach((link) => {
        link.addEventListener('click', () => {
          const productId = link.dataset.productId
          const container = document.querySelector(`.js-cart-item-container-${productId}`)
           
          container.classList.remove('is-editing-quantity')
  
          const quantityInput = document.querySelector(`.js-quantity-input-${productId}`)
           
  
          const newQuantity = Number(quantityInput.value)
          calculateNewCartQuantity(productId, newQuantity)
          const quantityLabel =  document.querySelector(`.js-quantity-label-${productId}`) 
          updateCartQuantityInCheckout();

        
  
  
  
  
  
        
  
  
           quantityLabel.innerHTML= newQuantity 
  
          paymentSummary();
        })
  })

  function deliveryOptionsHTML (matchingFood, CartItem) {
    let html = ''
    deliveryOptions.forEach( (deliveryOption) => {
  
      const  isChecked  = deliveryOption.id === CartItem.deliveryOptionId
  
    
   html += `<div class="delivery-option js-delivery-option" data-food-id=${matchingFood.id} data-delivery-option-id=${deliveryOption.id}>
                   
                   <input type="radio"
                    ${isChecked ? 'checked' : ''}
                      class="delivery-option-input"
                      name="delivery-option-${matchingFood.id}">
                      <div>
                      <div class="delivery-option-date">
                      ${deliveryOption.name}
                      </div>
                    </div>
                  </div>`  
    })
  
          return  html;
    }
  
  
  document.querySelectorAll('.js-delivery-option').forEach((element) => {
   element.addEventListener('click', () => {

    
   const foodId = element.dataset.foodId
   const deliveryOptionId = element.dataset.deliveryOptionId
  
    updateDeliveryOption(foodId, deliveryOptionId)
    orderSummary();
    paymentSummary();
   })

  })

 



  
}

orderSummary();



