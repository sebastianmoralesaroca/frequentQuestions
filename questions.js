const card1 = document.getElementById ("card1") ;
const card2 = document.getElementById ("card2") ;
const card3 = document.getElementById ("card3") ;
const btn1 = document.getElementById ("btn1") ;
const btn2 = document.getElementById ("btn2") ;
const btn3 = document.getElementById ("btn3") ;
const respuesta1 = document.getElementById ("respuesta1") ;
const respuesta2 = document.getElementById ("respuesta2") ;
const respuesta3 = document.getElementById ("respuesta3") ;

let r1 = 0 ;
btn1.addEventListener("click", () => {
   r1 = r1 + 1 ;
   if (r1 == 1) {
    respuesta1.style.display = "none" ;
    console.log("Se ha imprimido la respuesta 1")
    } else {
        respuesta1.style.display = "block" ;
        r1 = 0 ;
    }
});

let r2 = 0 ;
btn2.addEventListener("click", () => {
    r2 = r2  + 1 ;
    if (r2 == 1) {
        respuesta2.style.display = "block" ;
        console.log("Se ha imprimido la respuesta 2")
    } else {
        respuesta2.style.display = "none" ;
        r2 = 0 ;
    }
});

let r3 = 0 ;
btn3.addEventListener("click", () => {
    r3 = r3 + 1 ;
    if (r3 == 1) {
        respuesta3.style.display = "block" ;
        console.log("Se ha imprimido la respuesta 3")
    } else {
        respuesta3.style.display = "none" ;
        r3 = 0 ;
    }
});