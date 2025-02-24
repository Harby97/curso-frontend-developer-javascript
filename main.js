const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCarIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCarContainer = document.querySelector('#shoppingCarContainer');
const productDetailClose = document.querySelector('.product-detail-close');
const productDetail = document.querySelector('#productDetail');

const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleburgerMenu);
shoppingCarIcon.addEventListener('click', toggleshoppingCarMenu);
productDetailClose.addEventListener('click', closeProductDetail);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
    mobileMenu.classList.add('inactive')
    shoppingCarContainer.classList.add('inactive')
    productDetail.classList.add('inactive')
}

function toggleburgerMenu(){
    mobileMenu.classList.toggle('inactive') 
    desktopMenu.classList.add('inactive')
    shoppingCarContainer.classList.add('inactive')
    productDetail.classList.add('inactive')
}

function toggleshoppingCarMenu(){
    shoppingCarContainer.classList.toggle('inactive')
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    productDetail.classList.add('inactive')
}

function openProductDetailAside(){
    productDetail.classList.remove('inactive')
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    shoppingCarContainer.classList.add('inactive')
}

function closeProductDetail(){
    productDetail.classList.add('inactive')
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name: 'Bike 2',
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name: 'Bike 3',
    price: 320,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

/*
<div class="product-card">
  <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
  <div class="product-info">
    <div>
      <p>$120,00</p>
      <p>Bike</p>
    </div>
    <figure>
      <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
  </div>
</div>
*/

function renderProduct(arr){
    for (product of productList) {
        const productCard = document.createElement('div')
        productCard.setAttribute('class', "product-card")
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src',product.image)
        productImg.addEventListener('click', openProductDetailAside)
        
        const productInfo = document.createElement('div')
        productInfo.setAttribute('class', "product-info")
        
        const productInfoDiv = document.createElement('div')
        
        const productPrice = document.createElement('p')
        productPrice.innerText = ('$' + product.price)
        
        const productName = document.createElement('p')
        productName.innerText = (product.name)
        
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
    
        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

renderProduct(productList)

