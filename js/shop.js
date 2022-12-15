let Products

let box1El = document.querySelector('.product .product-content .box1')


fetch("api/products.json")
    .then(res => res.json())
    .then(json => {
        Products = json.products
        loadProduct()
    })

function loadProduct() {
    Products.forEach((p) => {
        box1El.innerHTML += `
        <div class='el'>
            <a href='product.html?product_id=${p.id} ' >
                <div class='img-wrap'>
                <img src='${p.src}'/> 
                </div>
                <p class='title'>  ${p.title}   </p>
                <h2 class='price'>  ${p.price}   </h2>
            </a>
        </div>
        `
    })
}