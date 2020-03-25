const height = document.getElementById('height');
        const weight = document.getElementById('weight');
        const number = document.getElementById('number');
        const bmiButton = document.querySelector('button');
        const factorialButton = document.getElementById('factorial');
        let h = 1;
        let w = 1;
        let n = 1;

        height.addEventListener('change', function(){
           h = height.value/100; 
        });

        weight.addEventListener('change', function(){
            w = weight.value;
        });

        number.addEventListener('change', function(){
            n = number.value;
        });
        
        
        const bmiCal = function() {
            const result = w/(h**2);
            if(result < 16) {
                alert(`BMI is ${result}, Severely underweight`)
            } else if (result>=16 && result<18.5) {
                alert(`BMI is ${result}, Underweight`)
            } else if (result>=18.5 && result<25){
                alert(`BMI is ${result}, Normal`)
            } else if (result>=25 && result<=30) {
                alert(`BMI is ${result}, Overweight`)
            } else {
                alert(`BMI is ${result}, Obese`)
            }
        };

        const factorial = function () {
            let result = 1;
            for(let index = 1; index <= n; index++){
                result *= index;
            }
            alert(result);
        };

        factorialButton.addEventListener('click', factorial);
        
        bmiButton.addEventListener('click', bmiCal);