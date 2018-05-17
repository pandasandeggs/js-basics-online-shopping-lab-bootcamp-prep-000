var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newObject = [
   {itemName:"bananas", itemPrice: math.floor(math.random()*100)},
   {itemName:"pancake batter",itemPrice: math.floor(math.random()*100)},
   {itemName:"eggs", itemPrice: math.floor(math.random()*100) },
   {itemName:"blueberries", itemPrice: math.floor(math.random()*100)},
   {itemName:"yogurt", itemPrice: math.floor(math.random()*100)}]
   return `<itemName> has been added to your cart.`
}

function viewCart() {
  for (i=0; i < cart.length; i++){
    if(cart.length){
      return `In your cart, you have ${itemName} at $${itemPrice}.`
    }else{
      return "Your shopping cart is empty."
    }
  }
}

function total() {
  for(i=0; i < cart.length; i++){
    if(cart.length){
      return
    }
  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
