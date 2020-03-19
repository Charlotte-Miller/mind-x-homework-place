// Program calculate area of circle
const radius = Number(prompt('Give me your radius.'));
const circleArea = radius*radius*Math.PI;
function calCircleArea() {
    alert(`The circle area is: ${circleArea}`);
} 





// Program convert Celcius into Fahrenheit
const celcius = Number(prompt('How cold is the weather?'));
const fahrenheit = 32 + celcius*1.8;
function calFah() {
    alert(`The weather is: ${fahrenheit} (F)`)
}


calCircleArea();
calFah();