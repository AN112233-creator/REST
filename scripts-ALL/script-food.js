import { foods } from "../data/foods.js";
import { formatCurrency } from "../utilities/money.js";
import { addToCart, updateCartQuantity } from "../data/cart.js";

/* document.getElementById('toggle-theme').addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
}); */

document.addEventListener('DOMContentLoaded', function () {
  const savedTheme = localStorage.getItem('theme');
  console.log(savedTheme);
  if (savedTheme) {
    document.body.classList.add(savedTheme);
  }
});

document.getElementById('toggle-theme').addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark-theme');
  } else {
    localStorage.setItem('theme', 'light-theme');
  }
}); 

let foodsHTML = ''

foods.forEach((food) =>{
 
 foodsHTML += `  
       <div class="shop-item">
        <img src="${food.image}" alt="Pizza">
        <h3>${food.name}</h3>
        <div class="added-cart js-added-to-cart-${food.id}">added</div>
        <p>₵${formatCurrency(food.priceCents)}</p>
        <button class="btn js-add-to-cart" data-product-id ="${food.id}">Add to Cart</button>
      </div>
      `
})

 document.querySelector('.js-shop-items').innerHTML = foodsHTML;




 document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', ()=> {
   
    const productId = button.dataset.productId
    addToCart(productId)
    updateCartQuantity()

    let timeoutId;
          const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`)
           
           addedMessage.classList.add('added-cart-visible')
            clearTimeout(timeoutId)
          
          timeoutId =  setTimeout(() => {
             addedMessage.classList.remove('added-cart-visible')
           },2000)

  })
 })

 updateCartQuantity()

 


 