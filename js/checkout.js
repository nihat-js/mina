let Cart, Products

if (localStorage.getItem('Cart')) {
   Cart = JSON.parse(localStorage.getItem('Cart'))
} else {
   Cart = []
}


fetch("api/products.json")
   .then(res => res.json())
   .then(json => { Products = json.products; main() })


function main() {
   let itemsEl = document.querySelector('.checkout-main .items')
   itemsEl.innerHTML = ""
   let sum = 0
   Cart.forEach(cart => {
      let product = Products.find(product => product.id == cart.product_id)
      sum += product.price * cart.count;
      itemsEl.innerHTML += `<div class="item">
                        <div class="img-wrap">
                           <img src="${product.src}" alt="">
                        </div>
                        <div class="info">
                           <div class="title-wrap">
                              <p> ${product.title}  </p>
                           </div>
                           <div class="quantity-wrap">
                              <button onclick='changeQuantity(${product.id},"-1")' > - </button>
                              <span class="quantity"> ${cart.count} </span>
                              <button onclick='changeQuantity(${product.id} ,"+1")' > + </button>
                           </div>
                        </div>
                        <div class="price-wrap">
                           <p class='close' onclick='changeQuantity(${product.id},"0")' > &times; </p>
                           <p> ${(cart.count * product.price).toFixed(2)}  </p>
                        </div>
                     </div>
                  
      `
   });
   document.querySelector('.total-text').innerText = "$" + sum.toFixed(2)

}


function changeQuantity(id, query) {
   let cart = Cart.find(x => x.product_id == id)
   if (query == '-1') {
      cart.count--
   } else if (query == '+1') {
      cart.count++
   }
   if (query == "0" || cart.count < 1) {
      let index = Cart.findIndex(x => x.product_id == id)
      console.log(index)
      Cart.splice(index, 1)
   }
   main()
   updateLocalStorage()
   update_nav()

}
