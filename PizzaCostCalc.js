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

$(document).ready(
    function() {
        // find the button with jquery

        // assign function calculateTrip to run when the button is clicked

        $("button").click(pizzaPrice);
    }
);


function pizzaPrice()
{
    //let numPizza = parseInt(prompt("Number of Pizza"));
    let numPizza = parseInt( $("input#numPizza").val() );

    //let numTopping = parseInt(prompt("Number of toppings"));
    let numTopping = parseInt( $("input#numToppings").val() );

    let basicPizzaCost = 15.00;

    let toppingPrice = 1.25;

    let totalPizzaCost = numPizza * basicPizzaCost + numTopping * toppingPrice;

    let displayDollars = totalPizzaCost.toFixed(2);

    //let numCoworker = parseInt(prompt("Number of Coworkers"));
    let numCoworker = parseInt( $("input#numCoworker").val() );

    let splitPrice = totalPizzaCost / numCoworker;

    let displayAmount = splitPrice.toFixed(2);

    $("p#totalPizzaCost").text(`The total cost of Pizza is $${displayDollars}`);

    // alert time
    // alert();
    $("p#splitPrice").text(`You each will pay $${displayAmount}`);
}

