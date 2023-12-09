let d1 = document.querySelectorAll(".d1");
let turn ="X";
let iSGameOver =false;


d1.forEach(e=>{
    e.innerHTML="";
    e.addEventListener("click",()=>{
        if(!iSGameOver && e.innerHTML===""){
            e.innerHTML =turn;
        }
    })
})