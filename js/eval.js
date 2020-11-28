const numButtons=document.querySelectorAll('.btn');
const opButtons=document.querySelectorAll('.operation__btn');
const display=document.querySelector('.display__content');
const clearButton=document.querySelector('.clear__btn');
const equalButton=document.querySelector('.equal');
const operations=['+','-', '*','/']

equalButton.addEventListener('click', finish);
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
 //#region Kattintás számokon
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
 //#endregion
 //#region Kattintás Műveleti jelen
 function clickOnOp(e){
     currentInput=e.dataset.btn;
     firstInput+=e.dataset.btn; 
         
    if(operations.includes(currentInput) && operations.includes(preInput) )
    {
        console.log(preInput+currentInput);
    }else{
        display.value+=currentInput;}
        
        if(currentInput=='c' ||  (operations.includes(firstInput)
         && firstInput.length==1
         ||firstInput.includes('c')
         )){
            display.value='';
            firstInput='';            
        }
        preInput=currentInput;     
 }
 //#endregion
 //#region Kattintás az = jelen
 function finish(){
     /* Eval-lal jól működik*/
     console.log('szamolas');
     let amount=eval(display.value);
     display.value+=`= ${amount}`
     currentInput='';
     firstInput='c'; 
     
     
 }