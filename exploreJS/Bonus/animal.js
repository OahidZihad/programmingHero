function animalCalculation(depth){
    var animal = 0;
    if(depth <=10){
        animal = depth * 50;
    }
    else if(depth<=20){
        var first10 = 10*50;
        var remaining = depth - 10;
        var second20 = remaining * 100;
        animal = first10 + second20;
    }
    else{
        var first10 = 10*50;
        var second20 = 10*100;
            var remaining = depth - 20;
        var third = remaining * 300;
        animal = first10 + second20 + third;
    }
        return animal;
    }

var result = animalCalculation(22);
console.log(result);