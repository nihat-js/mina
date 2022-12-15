let Products

let box1El = document.querySelector('.product .product-content .box1')


fetch("api/products.json")
    .then(res => res.json())
    .then (json => {
        Products = json.products
        loadProduct()
    })

function loadProduct() {
    Products.forEach((p)=>{
        box1El.innerHTML += `
        <img src='${p.img}
        
        `
    })
}