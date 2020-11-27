const numButtons=document.querySelectorAll('.btn');
const opButtons=document.querySelectorAll('.operation__btn');
const display=document.querySelector('.display__content');
const clearButton=document.querySelector('.clear__btn');
const equalButton=document.querySelector('.equal');
equalButton.addEventListener('click', finish);
const operations=['+','-', '*','/']
let preInput="";
let currentInput="";
let firstInput="";


 numButtons.forEach(element=>{
     element.addEventListener('click', event=>
     { e=event.target; clickOnNumber(e);  })
 });
 opButtons.forEach(element=>{
     element.addEventListener('click', event=>
     { e=event.target; clickOnOp(e);  })
 });

 function clickOnNumber(e){
     currentInput=e.dataset.btn;
     display.value+=currentInput
     preInput=currentInput;   
     if(firstInput=='c' ){
         display.value=currentInput;
         firstInput='';        
        } 
    firstInput+=currentInput; 
 }
 function clickOnOp(e){
     currentInput=e.dataset.btn;
     firstInput+=e.dataset.btn; 
        
    if(operations.includes(currentInput) && operations.includes(preInput) )
    {
        console.log(preInput+currentInput);
    }else{
        display.value+=currentInput;}
        
        if(currentInput=='c' ||  (operations.includes(firstInput) && firstInput.length==1)){
            display.value='';
            firstInput='';            
        }
        preInput=currentInput;     
 }
 function finish(){
     console.log('szamolas');
     let amount=eval(display.value);
     display.value+=`= ${amount}`
     currentInput='';
     firstInput='c';
     
 }