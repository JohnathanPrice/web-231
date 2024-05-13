"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Johnathan Price
      Date:   5/12/2024

      Filename: project06-03.js
*/

// onClick event listener for useShip to copy shipping info to the billing info
const useShip = document.getElementById("useShip");
useShip.addEventListener("click", copyShippingToBilling);

// create copyShippingToBilling function
function copyShippingToBilling() {
  // Test to see if useShip is checked
  if (useShip.checked) {
    // Step 4: Copy shipping to billing fields
    const form = document.forms['billShip'];
    form.elements['firstnameBill'].value = form.elements['firstnameShip'].value;
    form.elements['lastnameBill'].value = form.elements['lastnameShip'].value;
    form.elements['address1Bill'].value = form.elements['address1Ship'].value;
    form.elements['address2Bill'].value = form.elements['address2Ship'].value;
    form.elements['cityBill'].value = form.elements['cityShip'].value;
    form.elements['countryBill'].value = form.elements['countryShip'].value;
    form.elements['codeBill'].value = form.elements['codeShip'].value;

    // Copy selected index of state
    const stateShip = form.elements['stateShip'];
    const stateBill = form.elements['stateBill'];
    stateBill.selectedIndex = stateShip.selectedIndex;
  }
}


function showValidationError(evt) {
  evt.preventDefault(); // Prevent default browser behavior
  const errorBox = document.getElementById('errorBox');
  errorBox.textContent = "Complete all highlighted fields"; // Show error message
}

// Step 6: Add event listeners for validation to all text input fields
const formElements = document.querySelectorAll('input[type="text"]');
formElements.forEach(element => {
  element.addEventListener('invalid', showValidationError);
});

