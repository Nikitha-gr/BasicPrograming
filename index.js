//Function to check for prime number
function checkPrime(num){
    for(let i=2;i<num;i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}

console.log(checkPrime(23));

//Function to check Even or Odd
function evenOdd(num){
    if(num%2==0){
        return true;
    }
    return false;
}

console.log(evenOdd(23));