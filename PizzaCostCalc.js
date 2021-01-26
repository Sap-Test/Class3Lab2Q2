// prompt for number of Pizza
// Convert it to number
// prompt for number of Toppings
// Convert to number
// Number of Coworkers
// Convert to number
// Multiply number of pizza to cost of basic pizza
// Multiply the number of toppings to the cost of topping price
// Add price of basic cheese pizza and topping
// Divide the total price of pizza by number of coworkers
// Round the number to 2 digits

function pizzaPrice()
{
    let numPizza = parseInt(prompt("Number of Pizza"));

    let numTopping = parseInt(prompt("Number of toppings"));

    let basicPizzaCost = 15.00;

    let toppingPrice = 1.25;

    let totalPizzaCost = numPizza * basicPizzaCost + numTopping * toppingPrice;

    alert(`Total Cost of Pizza ${totalPizzaCost}`)

    let numCoworker = parseInt(prompt("Number of Coworkers"));

    let splitPrice = totalPizzaCost / numCoworker;

    let displayAmount = splitPrice.toFixed(2);

    alert(`$${displayAmount} per person `)
}

