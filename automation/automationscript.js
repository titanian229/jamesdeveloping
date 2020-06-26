const fs = require('fs')

const projects = [
    {
        projectName: "EcoRoute",
        subtitle: "Find your way from A to B while minimizing your carbon footprint! ",
        description: "A web application for planning and mapping routes, that displays carbon contributions from each. ",
        githubLink: "https://github.com/titanian229/EcoRoute",
        liveLink: "https://titanian229.github.io/EcoRoute",
        imageURL: "./assets/icons/EcoRouteTall.jpg",
    },
    {
        projectName: "ScheduleCreator",
        subtitle: "Enter your work schedule on mobile or desktop",
        description: "Application that provides a simple way to create many Google Calendar events based on a week's shift schedule, while logging expected pay and shift information to a SQL database. Easily accessed with through an android application or a command line interface.",
        githubLink: "https://github.com/titanian229/schedule-creator-public",
        liveLink: "",
        imageURL: ". /assets/icons/scheduler1.jpg",
    },
    {
        projectName: "Weather Dashboard",
        subtitle: "See weather conditions, to plan your trips or just your day",
        description: "Weather dashboard for easily checking conditions in multiple cities, using the OpenWeatherMap API",
        githubLink: "https://github.com/titanian229/homework06",
        liveLink: "https://titanian229.github.io/homework06",
        imageURL: "./assets/icons/weather-dashboard.jpg",
    },
    {
        projectName: "Workday Scheduler",
        subtitle: "Quickly plan out your day",
        description: "A simple proof of concept using local storage to plan out a workday in a layout that responds to the time.",
        githubLink: "https://github.com/titanian229/workdayScheduler",
        liveLink: "https://titanian229.github.io/workdayScheduler",
        imageURL: "./assets/icons/workday-scheduler.jpg",
    },
    {
        projectName: "Coding Quiz",
        subtitle: "See how you measure up in your Javascript knowledge",
        description: "A timed quiz that tests you on the basics of Javascript then shows you how you compare to others.",
        githubLink: "https://github.com/titanian229/homework04",
        liveLink: "https://titanian229.github.io/homework04",
        imageURL: "./assets/icons/javascript-quiz.jpg",
    },
    {
        projectName: "Password Generator",
        subtitle: "Easily generate a password to fit your requirements",
        description: "A javascript based password generator that takes requirements and randomly creates passwords of a given length.",
        githubLink: "https://github.com/titanian229/homework03",
        liveLink: "https://titanian229.github.io/homework03",
        imageURL: "./assets/icons/password-generator.jpg",
    },
    {
        projectName: "pHue Experiment",
        subtitle: "Simply control your smart lightbulb",
        description: "A proof of concept Python controller providing a simple command line interface using POST requests to control a smart light's settings.",
        githubLink: "https://github.com/titanian229/phueUIExperiment",
        liveLink: "",
        imageURL: "./assets/icons/phue.jpg",
    },
    {
        projectName: "TC-Tools",
        subtitle: "Manage ecomm orders from multiple vendors, easily deal with conflicting vendor's item databases on the go",
        description: "An android application built using Python, SQLite and the Google Sheets API, for tracking orders and converting item numbers",
        githubLink: "https://github.com/titanian229/tc-tools-public",
        liveLink: "",
        imageURL: "",
    },
]

const skills = [
    {
        name: "JavaScript",
        icon: ""
    },
    {
        name: "HTML/CSS",
        icon: ""
    },
    {
        name: "React-JS",
        icon: ""
    },
    {
        name: "SQL",
        icon: ""
    },
    {
        name: "MongoDB",
        icon: ""
    },
    {
        name: "Express",
        icon: ""
    },
    {
        name: "NodeJS",
        icon: ""
    },
    {
        name: "Python",
        icon: ""
    },
]

const renderProject = project => {
    let template = fs.readFileSync(path.resolve(__dirname, "portfolioTemplate.html"), "utf8");
    template = replacePlaceholders(template, "projectName", project.projectName);
    template = replacePlaceholders(template, "subtitle", project.subtitle);
    template = replacePlaceholders(template, "description", project.description);
    template = replacePlaceholders(template, "githubLink", project.githubLink);
    template = replacePlaceholders(template, "liveLink", project.liveLink);
    template = replacePlaceholders(template, "imageURL", project.imageURL);
    return template;
  };


const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
  };