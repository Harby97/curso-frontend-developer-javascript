const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCarIcon = document.querySelector('.navbar-shopping-cart');
const asideDetailingCar = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleburgerMenu);
shoppingCarIcon.addEventListener('click', toggleshoppingCarMenu);

function toggleDesktopMenu(){
    const isShoppingCarOpen = !asideDetailingCar.classList.contains('inactive');

    desktopMenu.classList.toggle('inactive')
    
    if(isShoppingCarOpen){
        asideDetailingCar.classList.add('inactive')
    }
}

function toggleburgerMenu(){
    const isShoppingCarOpen = !asideDetailingCar.classList.contains('inactive');

    mobileMenu.classList.toggle('inactive')

    if(isShoppingCarOpen){
        asideDetailingCar.classList.add('inactive')
    }
}

function toggleshoppingCarMenu(){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');

    asideDetailingCar.classList.toggle('inactive')
    if(isMobileMenuOpen || isDesktopMenuOpen){
        desktopMenu.classList.add('inactive')
        mobileMenu.classList.add('inactive')
    }
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

