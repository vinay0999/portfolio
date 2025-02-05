document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    function checkScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("visible");
            } else {
                section.classList.remove("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});
document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Save preference in local storage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

    // Apply saved theme on page load
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
});