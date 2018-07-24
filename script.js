class Pizza{
    constructor(size = 'medium', toppings = 'cheese', cost = 10, numberOfToppings = 0){
        this.size = size;
        this.toppings = toppings;
        this.cost = cost;
        this.numberOfToppings = numberOfToppings;
    }
    // totalCost() {
    //     return this.cost + (0.99 * this.numberOfToppings);
    // }
}

class customizePizza extends Pizza{
    constructor(numberOfToppings){
        super(numberOfToppings);
        this.numberOfToppingsArray = [];
        this.numberOfToppings = numberOfToppingsArray.length;
    }
    totalCost() {
        return 10 + (0.99 * this.numberOfToppings);
    }
}


function addTopping (){
        totalToppingsList.push(topping)
    
}


class Order extends customizePizza{
    constructor(numberOfPizzas){
        this.numberOfPizzas = numberOfPizzas;
    }
}

let newArray = ['pepperoni', 'cheese'];

// let myPizza = new Pizza();
// let newPizza = new customizePizza('olive', 'pepperoni', 'extra cheese');
let newCost = new customizePizza(newArray);

console.log('total cost', newCost.totalCost());
// console.log('customized', newPizza);



