// - - - - - - - - LOAD - - - - - - - - //

window.addEventListener("load",()=>{
    createCarrousel();
    createFeatured();











// - - - - - - - - CARROUSEL - - - - - - - - //

const buttonLeft = document.querySelector(".button-arrow-left");
const buttonRight = document.querySelector(".button-arrow-right");

const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");
const card3 = document.querySelector(".card-3");
const card4 = document.querySelector(".card-4");
const card5 = document.querySelector(".card-5");
const card6 = document.querySelector(".card-6");

let move = 0;

buttonRight.addEventListener("click",()=>{
    moveRight();
});

buttonLeft.addEventListener("click",()=>{
    moveLeft();
});

moveRight = () => {

    if(move < 3){
        card1.style.transform += "translate(-192px)";
        card2.style.transform += "translate(-192px)";
        card3.style.transform += "translate(-192px)";
        card4.style.transform += "translate(-192px)";
        card5.style.transform += "translate(-192px)";
        card6.style.transform += "translate(-192px)";
        
        move++;
    }
};


moveLeft =() => {

    if(move > 0){
        card1.style.transform += "translate(192px)";
        card2.style.transform += "translate(192px)";
        card3.style.transform += "translate(192px)";
        card4.style.transform += "translate(192px)";
        card5.style.transform += "translate(192px)";
        card6.style.transform += "translate(192px)";
        
        move--;
    }
};

IntervalRight = setInterval(()=>{
    moveRight();
    if(move==3){
        setTimeout(()=>{
            card1.style.transform = "translate(0px)";
            card2.style.transform = "translate(0px)";
            card3.style.transform = "translate(0px)";
            card4.style.transform = "translate(0px)";
            card5.style.transform = "translate(0px)";
            card6.style.transform = "translate(0px)";
            move=0;
        },5000)
    }
},5000);

});











// - - - - - - - - CREANDO CARROUSEL CON JS- - - - - - - - //

const carrousel = document.querySelector(".carrousel");

dataOfcarrousel = [`
Tortas de Chocolate`,`Tortas de Frutilla`,`Mini Postres`,
`Brownies`,`Tiramisú`,`Donas
`];

createCarrousel  = ()=>{
    for(i=1;i<=6;i++){
        let carrouselCard =`<div class="cards card-${i}">
            <img src="img/img${i}.jpg" alt="">
            <div class="cards-wave"></div>
            <div class="cards-text">
                <b>${dataOfcarrousel[i-1]}</b>
                <a class="mas-info--link" href="#">
                    Ver más
                    <div class="underline">
                        <div class="underline-objet"></div>
                    </div>
                </a>
            </div>
        </div>`
        carrousel.innerHTML += carrouselCard
    }
};











// - - - - - - - - CREANDO GRID CON JS- - - - - - - - //

const gridContainer = document.querySelector(".grid-container");

dataOfFeatured = [{
    title:`Torta mousse de chocolate`,
    price:`$2.520`
},{
    title:`Torta de frutillas y cerezas`,
    price:`$3.560`
},{
    title:`Torta chocolate mediana`,
    price:`$1.950`
},{
    title:`Galletitas con chips x12`,
    price:`$1.200`
},{
    title:`Brownies chocolate x10`,
    price:`$1.590`
},{
    title:`Postre de vainilla y crema`,
    price:`$1.300`
},{
    title:`Caja de donas x6`,
    price:`$2.100`
},{
    title:`Waffles frutilla y chocolate x2`,
    price:`$830`
},{
    title:`Torta chocolate blanco y frutillas`,
    price:`$4.700`
},{
    title:`Torta oreo mediana`,
    price:`$3.520`
},{
    title:`Caja macarons x20`,
    price:`$2.050`
},{
    title:`Caja macarons x5`,
    price:`$540`
},];

createFeatured  = ()=>{
for(i=0;i<12;i++){
    let gridCard =`<div class="grid-cards grid-card${i}">
        <div class="imgs-container">
            <div class="imgs" style="background-image: url(img/featured/img${i}.jpg);">
                <div class="overlay"></div>
            </div>
            <div class="triangle"></div>
        </div>
        <div class="grid-cards--text">
            <p>${dataOfFeatured[i].title}</p>
            <b>${dataOfFeatured[i].price}</b>
            <a class="mas-info--link" href="#">
                Más info
                <div class="underline">
                    <div class="underline-objet"></div>
                </div>
            </a>
        </div>
    </div>`
    gridContainer.innerHTML += gridCard
    }
};

// - - - - - - - - CREANDO MORE PRODUCTS CON JS- - - - - - - - //

const viewMoreProducts = document.querySelector(".all-products--button")

viewMoreProducts.addEventListener("click",()=>{
    showMoreProducts()
    viewMoreProducts.style.display = `none` 
});

dataOfMoreFeatured = [{
    title:`Torta Frutilla y Arándanos`,
    price:`$2.420`
},{
    title:`Torta Arcoíris y Macarons`,
    price:`$2.560`
},{
    title:`Torta Choco-frutas`,
    price:`$2.250`
},{
    title:`Torta oreo grande`,
    price:`$4.500`
},{
    title:`Torta Petalos de frutilla`,
    price:`$4.590`
},{
    title:`Torta mousse mediana`,
    price:`$3.300`
},{
    title:`Mini torta arándanos y frutillas`,
    price:`$1.100`
},{
    title:`Torta de galleta japonesa`,
    price:`$2.990`
},{
    title:`Torta Marroc mediana`,
    price:`$3.700`
},{
    title:`Torta Kit Kat grande`,
    price:`$4.720`
},{
    title:`Torta Kit Kat mediana`,
    price:`$3.050`
},{
    title:`Budín con chips de chocolate`,
    price:`$540`
},];

showMoreProducts = ()=>{
    for(i=0;i<12;i++){
        let gridCard =`<div class="grid-cards grid-card${i}">
            <div class="imgs-container">
                <div class="imgs" style="background-image: url(img/moreFeatured/img${i}.jpg);">
                    <div class="overlay"></div>
                </div>
                <div class="triangle"></div>
            </div>
            <div class="grid-cards--text">
                <p>${dataOfMoreFeatured[i].title}</p>
                <b>${dataOfMoreFeatured[i].price}</b>
                <a class="mas-info--link" href="#">
                    Más info
                    <div class="underline">
                        <div class="underline-objet"></div>
                    </div>
                </a>
            </div>
        </div>`
        gridContainer.innerHTML += gridCard
    }
};
    










// - - - - - - - - HEADER / NAV - - - - - - - - //

// - - - - - - - - EFECTO HEADER SCROLL - - - - - - - - //

const header = document.querySelector(".header");

let mainPosition = window.pageYOffset;

window.onscroll = function(){
    let currentOffSe = window.pageYOffset;
    if(mainPosition >= currentOffSe){
        header.style.transition = "250ms";
        header.style.top = "0";
    }
    else{
        header.style.top = "-100px";
        header.style.transition = "0s";
    }
    mainPosition = currentOffSe;
};











// - - - - - - - - MENÚ DESPLEGABLE - - - - - - - - //

const product = document.querySelector(".products");
const productButton = document.querySelector(".products-button");

productButton.addEventListener("mouseover",()=>{
    product.style.display= `flex`
});

productButton.addEventListener("mouseout",()=>{
    product.style.display= `none`
});

product.addEventListener("mouseover",()=>{
    product.style.display= `flex`
});

product.addEventListener("mouseout",()=>{
    product.style.display= `none`
});











// - - - - - - - - - - - FORM - - - - - - - - - - - //

const buttonForm = document.querySelector(".input-4");
const inputAsunto = document.querySelector(".input-1");
const inputEmail = document.querySelector(".input-2");
const inputMsg = document.querySelector(".input-3");
const verifyContainer = document.querySelector(".verify");

buttonForm.addEventListener("click",(e)=>{

    e.preventDefault();
    
    verifyData();

    if(error[0] == true){
        verifyContainer.innerHTML = `<b>${error[1]} <i class="fa-solid fa-xmark"></i></b>`
        verifyContainer.classList.remove("green");
        verifyContainer.classList.add("red");
    }
    else{
        verifyContainer.innerHTML = `<b>El mail se envió correctamente! <i class="fa-solid fa-check"></i></b>`
        verifyContainer.classList.remove("red");
        verifyContainer.classList.add("green");
    }
});

verifyData = () => {
    error = []
    if (inputAsunto.value.length < 1 || inputEmail.value.length < 1 || inputMsg.value.length < 1){
        error[0] = true;
        error[1] = `No puede haber campos vacíos`;
        return error
    }
    else if (!inputEmail.value.includes("@" && ".")){
        error[0] = true
        error[1] = `El e-mail es inválido`
        return error
    }
    else {
        error [0] = false
        return error
    }
};