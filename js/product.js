let params = new URLSearchParams(window.location.search)
let product_id = params.get('product_id')
let Products

fetch("api/products.json")
   .then(res => res.json())
   .then(json => { Products = json.products; main() })



function main() {
   console.log(Products)
   let Product = Products.find(x => x.id == product_id)
   document.querySelector('.product-full .content').innerHTML = `
      <div class="img-wrap">
					<img src="${Product.src}" alt="">
				</div>
				<div class="info">
					<h2 class="title"> ${Product.title}  </h2>
					<a href="index.html"> Back to catalog </a>
					<p class="count"> </p>
					<button> Add More </button>
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