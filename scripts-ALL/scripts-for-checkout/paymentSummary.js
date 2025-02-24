  import { cart } from "../../data/cart.js";
   import {deliveryOptions} from "../../data/delivery-options.js";
   import { getFood } from "../../data/foods.js";
    import { formatCurrency } from "../../utilities/money.js";
   
  
  
   export function paymentSummary(){
 
  let foodPriceCents = 0
  let deliveryPriceCents = 0

  let totalBeforeTaxCents = 0
  let estimatedTax = 0
  let totalOrder = 0


 cart.forEach((cartItem) => { 
  const food = getFood(cartItem.productId)
  
  foodPriceCents += food.priceCents*cartItem.quantity

    let deliveryOption;

    deliveryOptions.forEach((option) => {
     if (option.id === cartItem.deliveryOptionId){
       deliveryOption = option
     }
   }) 

   deliveryPriceCents += deliveryOption.priceCents

   totalBeforeTaxCents = foodPriceCents + deliveryPriceCents

   estimatedTax = 0.1 * totalBeforeTaxCents

   totalOrder = totalBeforeTaxCents + estimatedTax

 
  
   


 })

  let cartQuantity = 0

 cart.forEach((cartItem) => {
cartQuantity += cartItem.quantity
 })



 


  let paymentSummaryHTML = `

    <div class="payment-summary-title">
      Order Summary
    </div>

    <div class="payment-summary-row">
      <div>Items (${cartQuantity}):</div>
      <div class="payment-summary-money">₵${formatCurrency(foodPriceCents)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Delivery &amp; handling:</div>
      <div class="payment-summary-money">₵${formatCurrency(deliveryPriceCents)}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">₵${formatCurrency(totalBeforeTaxCents)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">₵${formatCurrency(estimatedTax)}</div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">₵${formatCurrency(totalOrder)}</div>
    </div>

    <button class="place-order-button button-primary">
      Place your order
    </button> 
  </div>

</div>`

document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML
}

paymentSummary();


