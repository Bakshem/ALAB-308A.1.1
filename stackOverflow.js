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