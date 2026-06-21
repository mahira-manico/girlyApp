//POP UP GESTION

const allBtn=document.querySelectorAll(".pop-up-trigger");
const popup=document.querySelector("#popup");
const closeBtn=document.querySelector(".close-btn");


allBtn.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        popup.showModal();
    });
})

closeBtn.addEventListener('click', () => {
            popup.close();
        });

