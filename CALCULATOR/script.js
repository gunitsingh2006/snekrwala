let display=document.getElementById('inputBox');
//Yeh line display naam ka ek variable banata hai aur usme inputBox ID wale HTML element ko store karta hai.
let buttons=document.querySelectorAll('button');
//querySelectorAll('button') ka matlab hai webpage ke sabhi buttons ko ek saath select kar lo

let buttonsArray=Array.from(buttons);
//Yeh line buttons ko ek array mein convert kar rahi hai.
let string='';//INITIAL EMPTY STRING

buttonsArray.forEach(btn =>{
//forEach loop har button par ek function apply karne mein help karta hai.
    btn.addEventListener('click', (e) => {  //click events
        if(e.target.innerHTML == 'DEL'){ //an event listener to access the HTML content inside the element that triggered the event.
            string=string.substring(0, string.length-1);//(startIndex, endIndex)
            display.value=string; //inputBox mein naye characters show honge.

        }
        else if(e.target.innerHTML == 'AC'){  
            string='';
            display.value=string;//isse display bhi khaali ho jaata hai.
        }
        else if(e.target.innerHTML == '='){
            string=eval(string)
            display.value=string;

        }
        else{ //(+,-,x)
            string += e.target.innerHTML;
            display.value=string;
        }
        
    });

});

