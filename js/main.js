
//------Burger Menu------//
const menuBurger=document.querySelector(".menu-burger");
const navBar=document.querySelector("nav");

if(menuBurger){
 menuBurger.addEventListener('click',()=>{
 navBar.classList.toggle('active'); //add class active when mobile mode
});
}

const footerBurger=document.querySelectorAll(".footer-burger");
const navFooter=document.querySelector(".footer-nav");

if(footerBurger){
footerBurger.forEach((burger) => {
        burger.addEventListener("click", () => {
            //FIND THE NEW ELEMENT HERE THE UL
            const associatedNav = burger.nextElementSibling;
            associatedNav.classList.toggle("show");
            
        });
    });
}

let allProducts=[];
let maxProducts=10;


//------API CALL------//
async function dataLoader(){

  try{
    const answer=await fetch('https://fakestoreapi.com/products'); //API call
    allProducts=await answer.json();

    generateCards();

} catch (error){
    console.error("Failed to load products :", error);
    container.innerHTML = `<p style="color: red; padding: 10px;">Data Error..</p>`; 
     }
}

//---GENERATE CARDS METHOD-------//

function generateCards(){

    const container=document.querySelector("#trendy-cards");

    container.innerHTML = "";
    const productsLoader = allProducts.slice(0, maxProducts);


    productsLoader.forEach((product)=>{ //loop for each product


        const newCard=document.createElement('div'); //create new div to contain the cards
        newCard.classList.add('products'); //Add style sass to the card

        //Inject html to the cards
        newCard.innerHTML=` 
        <button class="like" aria-label="Ajouter aux favoris">❤</button>
        <img src=${product.image} alt=${product.title} class="img-trendy">
        <h3 class="product-name">${product.title}</h3>
        <p class="product-desc">${product.description}</p>
        <span class="product-price">${product.price}  €</span>
        `;

        container.appendChild(newCard); //Add the cards to the container
   });

   //--------LIKE METHOD-------//
   const allLikeBtn = document.querySelectorAll(".like");

    allLikeBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("is-clicked"); 
            console.log("Bouton like activé !");
        });
    });
}

  //-------SEE MORE METHOD-------//
const btnSeeMore=document.querySelector("#more-trendy");
if(btnSeeMore){
    btnSeeMore.addEventListener("click",()=>{
        maxProducts+=10;
        generateCards();

        if(maxProducts>=allProducts.length || maxProducts >= 20){
            btnSeeMore.classList.add("hidden");
        }
    });
};


document.addEventListener('DOMContentLoaded', dataLoader);

//SEARCH BAR

const searchBar = document.querySelector('#products');

//GET THE FORM, INPUT AND BUTTONS
const searchForm = document.querySelector('search form');
const searchInput = document.querySelector('#products');
const btnSeeMoreInSearch = document.querySelector("#more-trendy");
    
    searchForm.addEventListener('submit', (event) => {

         //AVOID PAGE RELOAD
        event.preventDefault(); 
        const txtSearch = searchInput.value.toLowerCase();

         //FILTER BY TITLE AND CATEGORY
        const filteredProducts = allProducts.filter((product) => {
            const titleFound = product.title.toLowerCase().includes(txtSearch);
            return titleFound;
        });

        //DISPLAY RESULTS
        displayFilteredProducts(filteredProducts);
        const targetSection = document.querySelector("#trendy-cards");
        if (targetSection) {
            targetSection.scrollIntoView({ 
                behavior: "smooth", //SMOOTH SCROLL
            });
        }

        
    });

//FILTER DISPLAY FUNCTION
function  displayFilteredProducts(filteredList) {

    const container = document.querySelector("#trendy-cards");
    if (!container) return;

    container.innerHTML = "";

    //IF NOTHING FOUND
    if (filteredList.length === 0) {
        container.innerHTML = `<p class="no-match">Aucun article ne correspond à votre recherche 💔</p>`;
        return;
    }

    //DISPLAY ONLY FILTERED PRODUCTS
    filteredList.forEach((product) => {
        const newCard = document.createElement('div');
        newCard.classList.add('products');
        newCard.innerHTML = ` 
            <button class="like" data-id="${product.id}">❤</button> 
            <img src="${product.image}" alt="${product.title}" class="img-trendy">
            <h3 class="product-name">${product.title}</h3>
            <p class="product-desc">${product.description}</p>
            <span class="product-price">${product.price} €</span>
        `;
        container.appendChild(newCard);
    });
}

