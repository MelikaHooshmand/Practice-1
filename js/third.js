const numberOne = prompt('Please enter first number');

const numberTwo = prompt('Please enter second number');

const numberThree = prompt('Please enter third number');

if(Number(numberOne > numberTwo)){
    console.log('max =' +numberOne);
}
else if(Number(numberTwo > numberThree)){
    console.log('max =' +numberTwo);
}
else{
    console.log('max =' +numberThree);
}