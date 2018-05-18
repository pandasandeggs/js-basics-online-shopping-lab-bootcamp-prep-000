var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var newObject = [
   {itemName: "item", itemPrice: Math.floor(Math.random()*100)},]
   return `<itemName> has been added to your cart.`;
}

function viewCart() {
  for (i=0; i < cart.length; i++){
    if(cart.length){
      return `In your cart, you have ${itemName} at $${itemPrice}.`
    }else{
      return "Your shopping cart is empty.";
    }
  }
}

function total() {
  var sum = 0
  for(i=0; i < cart.length; i++){
    if(cart.length){
      // explore sum += total[i]
      //return sum;
    }
  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
