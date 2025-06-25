// Typing animation
const text = "আমরা ওয়েবসাইট তৈরি করি আপনার জন্য...";
let index = 0;
function typeEffect() {
  if (index < text.length) {
    document.querySelector(".hero-typing").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

// Ripple effect on touch/click
document.addEventListener("click", function (e) {
  const ripple = document.createElement("div");
  ripple.className = "ripple";
  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`;
  document.body.appendChild(ripple);
  setTimeout(() => {
    ripple.remove();
  }, 600);
});

// Submit overlay for 1 second
document.querySelector("form").addEventListener("submit", function () {
  const overlay = document.createElement("div");
  overlay.className = "submit-overlay";
  overlay.innerHTML = "<div>✅ অর্ডার সাবমিট হয়েছে! ধন্যবাদ!</div>";
  document.body.appendChild(overlay);
  setTimeout(() => {
    overlay.remove();
  }, 1000);
});
