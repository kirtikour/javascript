const buttons=document.querySelectorAll('.button')
const body= document.querySelector("body")

buttons.forEach(function(bu){
console.log(bu);
bu.addEventListener(`click`,function(k){
console.log(k);
console.log(k.target) // it tells k event ache kathon to

if(k.target.id==="grey"){
    body.style.backgroundColor=k.target.id;
}


else if(k.target.id==="white"){
    body.style.backgroundColor=k.target.id;
}
 else if(k.target.id==="blue"){
    body.style.backgroundColor=k.target.id;
}
else if(k.target.id==="yellow"){
    body.style.backgroundColor=k.target.id;
}
})
});