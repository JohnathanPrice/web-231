/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Johnathan Price
      Date:   04/06/2024

      Filename: project02-04.js
 */

const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const SALES_TAX = 0.07;

// Run the calcTotal function every time a checkbox is clicked
document.getElementById("chicken").onclick = calcTotal;
document.getElementById("halibut").onclick = calcTotal;
document.getElementById("burger").onclick = calcTotal;
document.getElementById("salmon").onclick = calcTotal;
document.getElementById("salad").onclick = calcTotal;

// calcTotal function to calculate total price
function calcTotal(){
  let cost = 0;
  let buyChicken = document.getElementById("chicken").checked;
  let buyHalibut = document.getElementById("halibut").checked;
  let buyBurger = document.getElementById("burger").checked;
  let buySalmon = document.getElementById("salmon").checked;
  let buySalad = document.getElementById("salad").checked;

  // Determine if the checkboxes are checked then increase the total in cost
  cost += buyChicken ? CHICKEN_PRICE : 0;
  cost += buyHalibut ? HALIBUT_PRICE : 0;
  cost += buyBurger ? BURGER_PRICE : 0;
  cost += buySalmon ? SALMON_PRICE : 0;
  cost += buySalad ? SALAD_PRICE : 0;

  // Display the formatted total of cost in the foodTotal element
  document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

  // Calculate the sales tax for cost
  let tax = cost * SALES_TAX;

  // Display the formatted tax in the foodTax element
  document.getElementById("foodTax").innerHTML = formatCurrency(tax);

  // Calculate the total of cost and tax
  let totalCost = cost + tax;

  // Display the formatted total in the totalBill element
  document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}


// Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
