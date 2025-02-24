
export function formatCurrency (priceCents) {
  return  (Math.round(priceCents) / 100).toFixed(2)
 }
 
 function holdCode() {
 ` <div class="delivery-option js-delivery-option"  data-food-id=${matchingFood.id} data-delivery-option-id=${deliveryOption.id}>
          <input type="radio"
             ${isChecked ? 'checked' : ''}
            class="delivery-option-input"
            name="delivery-option-${matchingFood.id}">
          <div>

            <div class="delivery-option-date">
              Pickup
            </div>
          </div>
        </div>
        
      <div class="delivery-option js-delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="delivery-option-${matchingFood.id}">
          <div>
            <div class="delivery-option-date">
              Delivery
            </div>
          </div>
        </div>`
 }

 function holdTwo(){
  document.querySelectorAll('.js-delivery-option').forEach((element) => {
    element.addEventListener('click', ()=>{
      
      const foodId = element.dataset.foodId
      const deliveryOptionId = element.dataset.deliveryOptionId

      updateDeliveryOption(foodId, deliveryOptionId)
      orderSummary();
      paymentSummary();
      
    })
  })

 }

