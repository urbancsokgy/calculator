const numButtons=document.querySelectorAll('.btn');
const opButtons=document.querySelectorAll('.operation__btn');
const display=document.querySelector('.display__content');
const clearButton=document.querySelector('.clear__btn');
const equalButton=document.querySelector('.equal');
const operations=['*-', '/-','+','-', '*','/']

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
     if((display.value)=='00'){display.value=display.value.slice(0, -1)+'';};
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
        if((preInput+currentInput)=='+-'){display.value=display.value.slice(0, -1)+'-';};
        if((preInput+currentInput)=='-+'){display.value=display.value.slice(0, -1)+'-';};
        if((preInput+currentInput)=='*-'){display.value+=currentInput;};
        ((preInput+currentInput)=='/-')?display.value+=currentInput:6 ;
        console.log(preInput+currentInput);
    }else{
        display.value+=currentInput;}
        
        if(currentInput=='c' ||  (operations.includes(firstInput)
         && firstInput.length==1
         ||(firstInput.includes('c'))
         )){
            display.value='';
            firstInput='';            
            if(currentInput=='-'){display.value=currentInput}
        }
        preInput=currentInput;     
 }
 //#endregion
 //#region Kattintás az = jelen
 function finish(){
     /* Eval-lal jól működik*/
     console.log('szamolas');
     let amount=eval(display.value);
     if(amount=='Infinity'){
         display.value='division by zero'
     }else{
     display.value+=`= ${amount}`
     }
     currentInput='';
     firstInput='c'; 
     
     
        
       
     //#endregion
     
 }