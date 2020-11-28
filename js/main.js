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
        if((preInput+currentInput)=='+-'){display.value=display.value.slice(0, -1)+'-';};
        if((preInput+currentInput)=='-+'){display.value=display.value.slice(0, -1)+'-';};
        
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
     /* console.log('szamolas');
     let amount=eval(display.value);
     display.value+=`= ${amount}`
     currentInput='';
     firstInput='c'; */
     
     //#region Eval nélkül
     let amount=display.value;
       if(operations.includes(amount[amount.length-1])){amount=amount.slice(0, -1)}
     //#region tömbbé alakítás
     function opStringToOpArray(str){
         operations.forEach(element => {
             str=str.replaceAll(`${element}`, ` ${element} `);
            });                   
            return operationsArray=str.split(' ');}
            //#endregion
     let amountArray=opStringToOpArray(amount);
     //#region  műveletek
     function opMultiplication(arr){
        while(arr.includes('*')){
            let i=arr.indexOf('*')
            arr.splice(i-1, 3, (Number(arr[i-1])*Number(arr[i+1])))
            }    return arr;
        }
        function opDivision(arr){
            while(arr.includes('/')){
                let i=arr.indexOf('/');
                arr.splice(i-1, 3, (Number(arr[i-1])/Number(arr[i+1])))
                }    return arr;
            }
            function opAddition(arr){
                while(arr.includes('+')){
                    let i=arr.indexOf('+')
                    arr.splice(i-1, 3, (Number(arr[i-1])+Number(arr[i+1])))
                    }    return arr;
                }
                function opSubtraction(arr){
                    while(arr.includes('-')){
                        let i=arr.indexOf('-')
                        arr.splice(i-1, 3, (Number(arr[i-1])-Number(arr[i+1])))
                    }  return arr;
              }
        //#endregion
        //#region Műveletek meghívása
        function opCall(arr){
            opDivision(arr);
            opMultiplication(arr);
            opAddition(arr);
            opSubtraction(arr);
            return arr;
        }
        //#endregion  
        lastValue=opCall(amountArray).toString();
        if(lastValue=='Infinity'){
            display.value='division by zero'
        }else{
        display.value+='='+lastValue;}
     
     currentInput='';
     firstInput='c'; 
     //#endregion
     
 }