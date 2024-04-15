/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Johnathan Price
      Date:   4/10/2024

      Filename: project03-01.js
*/

let menuItems = document.getElementsByClassName("menuItem");

// Run loop through all elements
for (let i = 0; i < menuItems.length; i++) {
  // add event listener for each element in the array
  menuItems[i].addEventListener("click", function() {
    calcTotal();
  }, false);

}

function calcTotal(){
  // declare orderTotal with a value of 0
  let orderTotal = 0;

  // run through all menuItems to see if they are checked
  for (let i = 0; i < menuItems.length; i++) {
    // see if the element is checked
    if (menuItems[i].checked == true) {
      // if element is checked, add the value of element to the orderTotal variable
      orderTotal += Number(menuItems[i].value);
    }
  }

  // format the orderTotal using the formatCurrency function and
  // show order total on the page in the billTotal element
  document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}



 // Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }