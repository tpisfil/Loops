function odds(){ ////Using a loop write code that will console.log all of the odd values from 1 up to 20.
    for (var i=0; i<20; i++){
        if (i%2 != 0){
            console.log(i);
        }
    }
}
odds(); 

arr=[4, 2.5, 1, -0.5, -2, -3.5]
function printSequence (arr){ ////Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.
    for (var i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
printSequence(arr); 

function sigma(){ //Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050in the end.
    var sum = 0;
    for (var i=1; i<=100; i++){
        sum += i;
    }
    console.log(sum);
}
sigma();

function factorial() { //Write code that will multiply values from 1 to some value n until the variable product is larger than 100 million (1e8 for short). At the end console.log that value of n.
    var product=1;
    var i=1;
    while (product < 1e8){
        product *= i;
        i++;
    }
    console.log(product);
}
factorial();