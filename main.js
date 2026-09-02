const list = document.querySelector(".navlist");
const hamburger = document.querySelector(".hamburger");
const hamburgerIcon = document.querySelector(".hamburger i");

if (!list || !hamburger || !hamburgerIcon) {
    console.error("Navbar elements not found - check your HTML class names.");
} else {
    hamburger.addEventListener("click", (e) => {
        e.preventDefault(); // stop the href="#" jump from interfering

        hamburgerIcon.classList.toggle("fa-x");
        hamburgerIcon.classList.toggle("fa-bars");
        list.classList.toggle("navlist-active");
    });
}