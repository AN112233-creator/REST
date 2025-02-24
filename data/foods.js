


export function getFood (productId){
  let matchingFood;

  foods.forEach((food) => {

    if (food.id === productId){
      matchingFood = food
    }
  })

  return matchingFood;
}

export const foods = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "IMG/pizza two for work.jpg",
    name: "Pizza Large",
    priceCents: 1099,
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "IMG/pizza two for work.jpg",
    name: "pizza medium",
    priceCents: 999,
    
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "IMG/pizza two for work.jpg",
    name: "Pizza Small",
    priceCents: 799
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "IMG/Steak.jpg",
    name: "Steak",
    priceCents: 1499
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "IMG/fried chicken.jpg",
    name: "Fried Chicken 4pcs",
    priceCents: 899
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534e",
    image: "IMG/fried chicken.jpg",
    name: "Fried Chicken 6pcs",
    priceCents: 1099
  },
 
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "IMG/sandwich.jpg",
    name: "Sandwich",
    priceCents: 399,
    
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "IMG/burger for work.jpg",
    name: "Burger",
    priceCents: 599,
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "IMG/chicken and fries.jpg",
    name: "Fries and Chicken",
    priceCents: 1099,
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a08",
    image: "IMG/buritos for work.jpg",
    name: "Buritos",
    priceCents: 1099,
  }
  
 
]
