 let array = [5, 2, 3] //array with three numbers

// the sum of three numbers

function findSum(array){
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum = sum + array[index];
        
    }
   
    return sum;
    

} 

console.log(findSum(array));

// substraction of numbers
function subtractNumbers(array){
    let subt = array[1] - array[0]
        
    return subt;
}

console.log(subtractNumbers(array));


//multiplication of numbers
function multiplyNumbers(array){
    let multi = array[0] * array[2];
    return multi;
}

console.log(multiplyNumbers(array)); 

//division of numbers

function divideNumbers(array){
    if (array[2] !== 0){
    let div = findSum(array)/array[2];
    return div;
    }else{
        alert("It will give you indefinit")
    }
} 
console.log(divideNumbers(array));
























