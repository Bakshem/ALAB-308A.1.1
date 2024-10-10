let globalCounter = 0;

const increment = ()=> {
    globalCounter++
    increment();
}

try {
    increment ();
}

catch (error){
    console.error("Error Accrued");
    console.log("Global Counter Value : ", globalCounter);
}

const factorial = (n) => {
    if (n === 0) return 1; // The base case, to stop recursion
    return n * factorial(n - 1); // The recursive call
}

const facto = (n, a = 1) => {
    if (n === 0) return a;
    return () => facto(n - 1, n * a);
} 

const trampolineEx = (f, ...args) => {
    let result = f(...args);
    while (typeof result === "function") {
      result = result();
    }
    return result;
}

console.log(trampolineEx(facto(100)));



//Write a recursive function that completely flattens an array of nested arrays, regardless of how deeply nested the arrays are.
const flattenArray = (array) => {
    let result = [];
    for (let item of array){
        if(Array.isArray(item)){
            result = result.concat(flattenArray(item));
        }
        else {
            result.push(item);
        }
    }
    return result;
}
const nestedArray = [1, [2, [3, [4, [5]]]], 6];
const flatArray = flattenArray(nestedArray);
console.log(flatArray);

//Once your recursive function is complete, trampoline it.
const trampolinExampleOfFlattenArray = (array) => {
    let result = [];
    const flatten = (array) => {
        for (let item of array){
            if(Array.isArray(item)){
                return () => flatten(item);
            }
            else {
                result.push(item);
            }
        }
        return () =>result;    
    }
    return flatten(array)    
};


const trampoline = (f, ...args) => {
    let result = f(...args);
    while (typeof result === "function") {
        result = result ();
    }
    return result;
}

const flattenResult = trampolinExampleOfFlattenArray(nestedArray);
const result = trampoline(flattenResult);
console.log(result)