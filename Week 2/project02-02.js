/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Johnathan Price
      Date:   03/31/2024

      Filename: project02-02.js
 */

function verifyForm()
{
  var name = document.getElementById("name").value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;

  (name !== "" && email !== "" && phone !== "") ?
    window.alert("Thank you!") :
    window.alert("Please fill in all fields");
}

document.getElementById("submit").onclick = verifyForm;