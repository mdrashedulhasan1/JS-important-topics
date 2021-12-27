function factorialRecursive(n){
    if(n == 0){
        return 1;
    }
    else{
        return n*factorialRecursive(n-1);
    }
}
var result = factorialRecursive(5);
console.log(result);