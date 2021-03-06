function moveToSection(section) {
    const sections = {
        about: document.querySelector("#about-me"),
        portfolio: document.querySelector("#portfolio"),
        contact: document.querySelector("#contact-me"),
    };

    Object.keys(sections).forEach(function (key) {
        if (section === key) {
            if (sections[key].classList.contains("d-none")) {
                setTimeout(function(){
                sections[key].classList.remove("d-none");
                sections[key].classList.remove("animate__animated", "animate__fadeOut", "animate__faster");
                sections[key].classList.add("animate__animated", "animate__fadeIn", "animate__faster");
                }, 500)
            }
        } else if (section != key && !sections[key].classList.contains("d-none")) {
            sections[key].classList.remove("animate__animated", "animate__fadeIn", "animate__faster");
            sections[key].classList.add("animate__animated", "animate__fadeOut", "animate__faster");
            setTimeout(function () {
                sections[key].classList.add("d-none");
            }, 500);
        }
    });

    // setTimeout(function () {
    //     sections[section].scrollIntoView(true, { behavior: "smooth" });
    // }, 400);
}

function toggleButtons(buttonI) {
    const buttonList = [
        document.querySelector("#about-button"),
        document.querySelector("#portfolio-button"),
        document.querySelector("#contact-button"),
    ];
    buttonList.forEach(function (button, index) {
        if (index === buttonI) {
            if (!button.classList.contains("active")) {
                button.classList.add("active");
            }
        } else {
            button.classList.remove("active");
        }
    });
}

document.querySelector("#about-button").addEventListener("click", function (event) {
    moveToSection("about");
    toggleButtons(0);
});

document.querySelector("#portfolio-button").addEventListener("click", function (event) {
    moveToSection("portfolio");
    toggleButtons(1);
});

document.querySelector("#contact-button").addEventListener("click", function (event) {
    moveToSection("contact");
    toggleButtons(2);
});
