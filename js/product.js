let params = new URLSearchParams(window.location.search)
let product_id = +params.get('product_id')
let Products
let Cart


if (localStorage.getItem('Cart')) {
   Cart = JSON.parse(localStorage.getItem('Cart'))
} else {
   Cart = []
}


fetch("api/products.json")
   .then(res => res.json())
   .then(json => { Products = json.products; main() })



function main() {
   console.log(Products)
   let Product = Products.find(x => x.id == product_id)
   let foo = Cart.find(x => x.product_id == product_id)
   document.querySelector('.product-full .content').innerHTML = `
            <div class="img-wrap">
					<img src="${Product.src}" alt="">
				</div>
				<div class="info">
					<h1 class="title"> ${Product.title}  </h1>
					<a class='back' href="search.html"> Back to catalog </a>
               <p class='price'   > $${Product.price}  </p>    
					<p class="count"> ${foo?.count > 0 ? foo?.count + ' items in the bag' : ''}  </p>
               <div class='add-wrap'>
					<button class='add' onclick='add_to_cart()'> Add More </button>
               </div>
               <div class='checkout-wrap'>
                  <a class='checkout' href='checkout.html'>  ${foo?.count > 0 ? 'Checkout' : ''}     </a>
               </div>
					<div class="details-group">
						<p class="details-headline"> Product Details</p>
						<p class="details-text">  ${Product.details} </p>
					</div>
					<div class="material-group">
						<p class="material-headline">Material : </p>
						<p class="material-text">  ${Product.material} </p>
					</div>
					<div class="color-group">
						<p class="color-headline"> Color : </p>
						<p class="color-text"> ${Product.color} </p>
					</div>
					<div class="measurements-group">
						<p class="measurements-headline"> Measurements </p>
						<p class="measurements-text"> ${Product.measurements} </p>
					</div>
   `
}


function add_to_cart() {
   let product = Cart.find(x => x.product_id == product_id)
   if (product) {
      product.count++
   } else {
      Cart.push({
         product_id: product_id,
         count: 1,
      })
   }
   main()
   updateLocalStorage()
}


function updateLocalStorage() {
   localStorage.setItem('Cart', JSON.stringify(Cart))
}