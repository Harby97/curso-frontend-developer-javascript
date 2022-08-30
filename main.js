const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCarIcon = document.querySelector('.navbar-shopping-cart');
const asideDetailingCar = document.querySelector('.product-detail');


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