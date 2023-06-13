console.log("hello")

const toggler = document.getElementById("toggler");
const navLink = document.querySelector(".navbar");

toggler.addEventListener("click", () => {
    navLink.style.display = "block";
})

