
//---------CALENDAR CLICK------//
const cardCalendar=document.querySelectorAll(".day");
cardCalendar.forEach((card)=>{
    card.addEventListener("click", ()=>{
        card.classList.toggle("day-active");


    })

})

//---------MOOD GESTION---------//
const dashboard=document.querySelector("#dashboard1");
const allEmoji=document.querySelectorAll(".mood-emojis");

allEmoji.forEach((emoji)=>{
    emoji.addEventListener("click", ()=>{
       dashboard.classList.remove('is-happy', 'is-sad', 'is-hype', 'is-normal');
        
                const myMood = emoji.dataset.mood;
                dashboard.classList.add(`is-${myMood}`);
    })

})



//----------TO DO DONE----------//
const doneBtn=document.querySelectorAll(".done-btn");
const textErase=document.querySelectorAll(".text-to-do");

doneBtn.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        const todoBloc=btn.closest(".to-do-tasks");
        if(todoBloc){
            const textErase=todoBloc.querySelector(".text-to-do");
            if(textErase){
                textErase.classList.toggle("is-done");
            }
        }
       
        });
    });


//-----REMOVE A TASK---//
const removeBtn=document.querySelectorAll(".delete-btn");


removeBtn.forEach((dBtn)=>{
    dBtn.addEventListener("click",()=>{
         const todoBloc=dBtn.closest(".to-do-tasks");
        if(todoBloc){
           todoBloc.remove();
        }
       
        });
    });



//-----ADD A TASK------//

const addBtn=document.querySelector("#add-task");
const textToInject=document.querySelector(".text-to-add");
const toDoList=document.querySelector(".to-ul");


addBtn.addEventListener("click",()=>{
    const text=textToInject.value.trim();
    if(text!==""){
        const newLi=document.createElement("li");
        newLi.classList.add("to-do-tasks");
        newLi.innerHTML=`
         <span class="text-to-do">${text}</span>
         <input type="checkbox" class="done-btn" aria-label="marquer comme terminer"/>
         <button type="button" class="delete-btn" aria-label="supprimer de la liste">❌</button>`

         const currentCheckBtn = newLi.querySelector(".done-btn");
         currentCheckBtn.addEventListener("click", () => {
         newLi.querySelector(".text-to-do").classList.toggle("is-done");
            });

        const currentDeleteBtn=newLi.querySelector(".delete-btn");
        currentDeleteBtn.addEventListener("click",()=>{
            newLi.remove();
        })

         toDoList.appendChild(newLi);
         textToInject.value = "";
         

    }
})

//------API CALL------//
async function dataLoader(){

  try{
    const answer=await fetch('https://fakestoreapi.com/products'); //API call
    allProducts=await answer.json();

    generateCards();

} catch (error){
    console.error("Failed to load products :", error);
     }
}

//---GENERATE CARDS METHOD-------//

function generateCards(){

    const container=document.querySelector("#card-more");

    container.innerHTML = "";
    const productsLoader = allProducts.slice(0, maxProducts);


    productsLoader.forEach((product)=>{ //loop for each product


        const newCard=document.createElement('div'); //create new div to contain the cards
        newCard.classList.add('cards'); //Add style sass to the card

        //Inject html to the cards
        newCard.innerHTML=` 
        <img src=${product.image} alt=${product.title} class="cards-img">
        <p class="cards-title">${product.title}</p>
        <p class="cards-desc">${product.description}</p>
        <p class="cards-price">${product.price} €</p>
        `;

        container.appendChild(newCard); //Add the cards to the container
   });
}

dataLoader();

