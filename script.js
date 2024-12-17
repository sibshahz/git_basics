window.alert('Hello, world! CS-23628');
console.log("This is a special coded message");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const search = document.getElementById("search").value;
    const gender = document.getElementById("gender").value;
    const message = document.getElementById("message").value;

    console.log("Form Submitted:");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Search: ${search}`);
    console.log(`Gender: ${gender}`);
    console.log(`Message: ${message}`);

    alert(`Thank you, ${name}! Your form has been submitted.`);
  });
});

