// ===== Smooth Scroll for Navbar =====

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function(e) {

    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({

      behavior: "smooth"

    });

  });

});

// ===== Dark / Light Mode Toggle =====

const toggleBtn = document.createElement("button");

toggleBtn.textContent = "🌙 Dark Mode";

toggleBtn.style.position = "fixed";

toggleBtn.style.bottom = "20px";

toggleBtn.style.right = "20px";

toggleBtn.style.padding = "10px 15px";

toggleBtn.style.border = "none";

toggleBtn.style.borderRadius = "8px";

toggleBtn.style.cursor = "pointer";

toggleBtn.style.background = "#ff9800";

toggleBtn.style.color = "#fff";

document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {

    document.body.style.background = "#222";

    document.body.style.color = "#fff";

    toggleBtn.textContent = "☀️ Light Mode";

  } else {

    document.body.style.background = "#f9f9f9";

    document.body.style.color = "#333";

    toggleBtn.textContent = "🌙 Dark Mode";

  }

});

// ===== Contact Form Alert =====

const form = document.querySelector("form");

if (form) {

  form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Thank you for reaching out! I’ll get back to you soon.");

    form.reset();

  });

}