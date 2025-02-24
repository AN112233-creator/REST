import { cart } from "../data/cart.js";



/* document.getElementById('toggle-theme').addEventListener('click', function() {
      document.body.classList.toggle('dark-theme');
    });
 */
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


       /*  document.addEventListener('DOMContentLoaded', function () {
          const savedTheme = localStorage.getItem('theme');
          if (savedTheme) {
            document.body.classList.add(savedTheme);
          }
        });

          if (document.body.classList.contains('dark-theme')){
            localStorage.setItem('theme', 'dark')
          }else{
            localStorage.setItem('theme', 'light')
          }

     window.addEventListener('DOMContentLoaded', function () {
            const savedTheme = this.localStorage.getItem('theme');

            if (savedTheme === 'dark'){
              this.document.body.classList.add('dark-theme')
            }
}) */


/* function changeImage(){
   document.getElementById('mainImage').src = imageSrc; 

  console.log('hello')
} */

const images = document.querySelectorAll('.Image-gallery')
const mainImage = document.querySelector('.my-image')

images.forEach((img) => {
  img.addEventListener("click", () => {
    mainImage.src = img.src; 
  });
});





 // Initialize the map and set the view to Kumasi with a zoom level of 12
 const map = L.map('map').setView([6.6931, -1.6213], 12);

 // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

 // Add a marker at Kumasi
 L.marker([6.6931, -1.6213]).addTo(map)
   .bindPopup('Kumasi, Ghana')
   .openPopup();

  document.addEventListener('DOMContentLoaded', () => {
        const observerOptions = {
             threshold: 0.2
        };

        const observer = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  entry.target.classList.add('appear');
                  observer.unobserve(entry.target);
                }
              });
        }, observerOptions);
        const elements = document.querySelectorAll('.js-contains-all');
        elements.forEach(element => {
          observer.observe(element);
    });
  });






  

  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      navbar.classList.add('activated');
    } else {
      navbar.classList.remove('activated');
    }
  });
 
  
  
  function totalQuantityCart(){
   let cartQuantity = 0

   cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity
   })

   document.querySelector('.js-cart-items-number').innerHTML= cartQuantity
  }

 totalQuantityCart()



