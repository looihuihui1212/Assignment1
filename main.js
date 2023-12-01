// Javascript for Fan Letter Popup Form
function openForm() {
  document.getElementById("fanLetterForm").style.display = "block";
}

function closeForm() {
  document.getElementById("fanLetterForm").style.display = "none";
}

function submitForm() {
  // Retrieve the values of email and message input fields
  var email = document.forms["fanLetterForm"]["email"].value;
  var message = document.forms["fanLetterForm"]["message"].value;

  // Check if both email and message are not empty
  if (email !== "" && message !== "") {
      // Display a success message
      alert("Your fan letter has been submitted!");

      // Close the form after submission
      closeForm();
  } else {
      // Display an error message if email or message is empty
      alert("Please fill in both Email and Message fields.");
  }
}

// Javascript for Check Out Form
function checkoutForm() {
  event.preventDefault();
  var isValid = validateForm();

  if (isValid) {
      // Display a success message and redirect
      window.alert("Thank you! Your order has been successfully checked out.");
      window.location.replace("index.html");
  }

  return isValid;
}

function validateForm() {
  var isFormValid = true;

  // Validate Billing Address
  isFormValid = isFormValid && validateField("fname");
  isFormValid = isFormValid && validateField("email");
  isFormValid = isFormValid && validateField("adr");
  isFormValid = isFormValid && validateField("city");
  isFormValid = isFormValid && validateField("state");
  isFormValid = isFormValid && validateField("zip");

  // Validate Payment Information
  isFormValid = isFormValid && validateField("cname");
  isFormValid = isFormValid && validateField("ccnum");
  isFormValid = isFormValid && validateField("expmonth");
  isFormValid = isFormValid && validateField("expyear");
  isFormValid = isFormValid && validateField("cvv");

  if (!isFormValid) {
      // Display an error message if any field is empty
      alert("Please enter your full information.");
  }

  return isFormValid;
}

function validateField(fieldName) {
  var field = document.getElementById(fieldName);
  return field.value.trim() !== "";
}

// Javascript for Newsletter Form
function subscribeNewsletter(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Retrieve values from name and email input fields
  var name = document.getElementsByName("name")[0].value;
  var email = document.getElementsByName("mail")[0].value;

  if (name.trim() !== "" && email.trim() !== "") {
      // Display a success message
      alert("Thank you, " + name + "! You have successfully subscribed to our newsletter.");

      document.getElementById("subscribeForm").reset();
  } else {
      // Display an error message if the name or email is empty
      alert("Please enter both your name and email address.");
  }
}

// Javascript for Slide Show
let slideIndex = 1;

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Display the first slide when the page loads
showSlides(slideIndex);
