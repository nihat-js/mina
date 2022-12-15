function update_nav() {
   console.log('test');
   let el = document.querySelector('nav .cart-count')
   if (localStorage.getItem('Cart')) {
      let cart = JSON.parse(localStorage.getItem('Cart'))
      let cart_sum = 0
      cart.forEach(c => {
         cart_sum += c.count
      })
      el.innerText = cart_sum
   } else {
      el.innerText = 0
   }

}
function updateLocalStorage() {
   localStorage.setItem('Cart', JSON.stringify(Cart))
}



update_nav()
