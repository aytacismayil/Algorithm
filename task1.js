let arr1=  [1,7,23,3];
let arr2=  [1,7,23,5];

function getDifferenceOfArrays(firstArray,secondArray){
    let result = [];
    let longArray = firstArray.length > secondArray.length ? firstArray : secondArray;
    let shortArray = firstArray.length > secondArray.length ? secondArray : firstArray;
    for(i=0;i<longArray.length;i++){
        if(shortArray.indexOf(longArray[i])<0 ){
            result.push(longArray[i],shortArray[i]);    
        } 
    }    
   return result;  
}
console.log(getDifferenceOfArrays(arr1,arr2));

//OutPut
//[5,3]