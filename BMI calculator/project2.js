const form = document.querySelector('form');

// aagr man height and weight jun values function khon baher wardm t page jiyen load thindo t agr unmein koi placeholder ji value aahe ya t uha khando ya t empty value ee khando
// inje kare function j andr likhyo aa 
bmi=0;
form.addEventListener(`submit`,function(e){
    e.preventDefault(); // jeko bhi default action thye tho unkhe roko
const height=parseInt(document.querySelector('#height').value) // .value inje kare input wari value wardo and value string mein indi aa so parse int unkhe convert kando int mein
const weight=parseInt(document.querySelector('#Weight').value)

const result = document.querySelector('#result')

if(height=== '' || height < 0 || isNaN(height)){
result.innerHTML="please give a valid height"
}

else if(weight === '' || weight < 0 || isNaN(weight)){
    result.innerHTML="please give a valid weight"
    }

    else{
     bmi =(weight / ((height*height)/10000)).toFixed(2);

      //result.innerHTML = `<span>${bmi}</span>`;
    }

    // Under Weight = Less than 18.6</p>
    //<p>Normal Range = 18.6 and 24.9</p>
    // >Overweight = Greater than 24.9

if(bmi < 18.9){
result.innerHTML=`UNdeR weight 😥 ${bmi}`

}
else if(bmi > 18.9 ^ bmi< 24.9){
    result.innerHTML= `Normal 😶 ${bmi}`
    
    }
    if(bmi > 24.9){
        result.innerHTML= `OverWeight 🙄 ${bmi}`
        
        }



}) ;