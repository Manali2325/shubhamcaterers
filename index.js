  function showMessage() {
    alert("Thank you! Your message has been sent.");
  }
  
  // Save form data to Firebase
  function submitForm(event) {
    event.preventDefault();
  
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;
  
    db.collection("contacts").add({ name, email, message, timestamp: new Date() })
      .then(() => {
        showMessage();
        document.querySelector("form").reset();
      })
      .catch(error => {
        console.error("Error adding document: ", error);
        alert("There was an error. Please try again.");
      });
  }
  

  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-links');

  mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  
  document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    mobileMenu.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });
  });
 
  function toggleReadMore(button) {
    const card = button.closest('.testimonial-card');
    const moreText = card.querySelector('.more-text');
    const dots = card.querySelector('.dots');

    if (moreText.style.display === "none" || moreText.style.display === "") {
      moreText.style.display = "inline";
      dots.style.display = "none";
      button.textContent = "Read Less";
    } else {
      moreText.style.display = "none";
      dots.style.display = "inline";
      button.textContent = "Read More";
    }
  }
  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // ⛔ Prevent page reload
  
    // Add your custom submission logic here (like Firebase, Email, etc.)
  });
  
