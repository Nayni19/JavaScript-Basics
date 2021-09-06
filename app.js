// Conditional Statements
num = 0
// Even or odd program
if(typeof num =="number"){
    if(num===0){
        console.log('Neither even nor odd');
    }
    else if(num%2===0){
        console.log('Number is Even');
    }
    else {
        console.log('Number is odd');
    }
}
else {
    console.error('Not a number');
}