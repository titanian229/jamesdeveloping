function moveToSection(section) {
    const sections = {
        about: document.querySelector("#about-me"),
        portfolio: document.querySelector("#portfolio"),
        contact: document.querySelector("#contact-me"),
    };
    console.log(section)
    Object.keys(sections).forEach(function (key) {

        if (section === key && sections[key].classList.contains("d-none")) {
            sections[key].classList.remove("d-none");
        } else if (section != key && !sections[key].classList.contains("d-none")) {
            sections[key].classList.add("d-none");
        }
    });

    setTimeout(function(){
        sections[section].scrollIntoView(true, { behavior: "smooth" })
    }, 300)

}

document.querySelector("#portfolio-button").addEventListener("click", function (event) {
    moveToSection('portfolio')
});

document.querySelector("#contact-button").addEventListener("click", function (event) {
    moveToSection('contact')
});
