let htmlLogo = "https://res.cloudinary.com/dz7moyhci/image/upload/v1748172691/dic6wugjbn4sbuaotanf.jpg";
let bootstrapLogo = "https://res.cloudinary.com/dz7moyhci/image/upload/v1748172690/bnqvt1nqa18ptucmqmnv.jpg";
let cssLogo = "https://res.cloudinary.com/dz7moyhci/image/upload/v1748172690/x5qu17eipmbz98v0vamj.jpg";
let navbarLogo = "https://res.cloudinary.com/dz7moyhci/image/upload/v1748172690/jplgelvqiangaeniffsd.png";
let nodejsLogo = "https://res.cloudinary.com/dz7moyhci/image/upload/v1748270933/node-js_yqny53.png";
let reactLogo = "https://res.cloudinary.com/dz7moyhci/image/upload/v1748270763/react-logo_nyv92k.jpg";
let pythonLogo = "https://res.cloudinary.com/dz7moyhci/image/upload/v1748172690/sjb69f0bylzxoxxkp7nr.jpg";
let javascriptLogo = "https://res.cloudinary.com/dz7moyhci/image/upload/v1748172690/gbofu9fmpvq0kr5anup8.jpg";
let githubLogo = "https://res.cloudinary.com/dz7moyhci/image/upload/v1748270763/github-logo_j5atu0.jpg";
let firebaseLogo = "https://res.cloudinary.com/dz7moyhci/image/upload/v1748172690/ao06nnidu3mdkhf3syod.jpg";
let skillsArray = [htmlLogo, bootstrapLogo, cssLogo, nodejsLogo, reactLogo, pythonLogo, javascriptLogo];
let skillValues = ["HTML", "Bootstrap", "CSS", "Node.js", "React", "Python", "Javascript"];
let techValues = ["Github", "Firebase"];
let techUsedArray = [githubLogo, firebaseLogo];
let javaCertificate = "https://res.cloudinary.com/dz7moyhci/image/upload/v1734680337/Programming_in_Java_1_xbs75m.jpg";
let python1infosys = "https://res.cloudinary.com/dz7moyhci/image/upload/v1734680330/REAL-PYTHON_PART-1_vsqiyd.jpg";
let python2infosys = "https://res.cloudinary.com/dz7moyhci/image/upload/v1734680333/REAL-PYTHON_PART-2_ycyinl.jpg";
let responsWeb = "https://res.cloudinary.com/dz7moyhci/image/upload/v1734621193/rqh4p0jiz1fygdryxgyt.jpg";
let staticWeb = "https://res.cloudinary.com/dz7moyhci/image/upload/v1734621189/wqgqqlepneaytngvazbo.jpg";
let pythonFou = "https://res.cloudinary.com/dz7moyhci/image/upload/v1748184034/python-nxtwave_k4ha6n.jpg";
let xpmCert = "https://res.cloudinary.com/dz7moyhci/image/upload/v1748184024/xpm_awbejp.jpg";
let uiux = "https://res.cloudinary.com/dz7moyhci/image/upload/v1748183997/ui-ux_xprqeu.png";
let fulstack = "https://res.cloudinary.com/dz7moyhci/image/upload/v1748184058/fullstack-internship_man3is.jpg";
let databaseCertificate = "https://res.cloudinary.com/dz7moyhci/image/upload/v1748183966/databases_f7x5ki.jpg";
let certificateName = ["BUILD YOUR OWN STATIC WEBSITE", "BUILD YOUR OWN RESPONSIVE WEBSITE", "PROGRAMMING IN JAVA", "PROGRAMMING FOUNDATIONS USING PYTHON PART-1",
    "PROGRAMMING FOUNDATIONS USING PYTHON PART-2", "XPM 4.O FUNDAMENTALS",
    "BUILDING MODREN WEB APPLICATIONS WITH MERN STACK", "INTRODUCTION TO DATABASES",
    "UI/UX MEGA WORKSHOP", "PROGRAMMING FOUNDATIONS WITH PYTHON"
];
let certificateFrom = ["NxtWave", "NxtWave", "NPTEL", "Infosys Springboard", "Infosys Springboard", "NxtWave",
    "Edunet Foundation", "NxtWave", "NxtWave", "NxtWave"
];
let certificateLinks = [staticWeb, responsWeb, javaCertificate, python1infosys, python2infosys, xpmCert, fulstack, databaseCertificate, uiux, pythonFou];

let project1Image5 = "https://res.cloudinary.com/dz7moyhci/image/upload/v1748179307/gpbgk6jtwnpbwvxb4zbt.png";
let project1Image4 = "https://res.cloudinary.com/dz7moyhci/image/upload/v1748179307/spcarjz1uf15f0smyjlc.png";
let project1Image3 = "https://res.cloudinary.com/dz7moyhci/image/upload/v1748179307/fo4pnj5fgdk5u9bjh4eb.jpg";
let project1Image2 = "https://res.cloudinary.com/dz7moyhci/image/upload/v1748179308/gmvfksr9hf5iwmqqwikk.png";
let project1Image1 = "https://res.cloudinary.com/dz7moyhci/image/upload/v1748284656/Screenshot_32_gbrszw.png";
let projectImageArray = [project1Image1, project1Image2, project1Image3, project1Image4, project1Image5];
let projectName = ["KNN Movie Rating Predictor", "Portfolio", "Mood Tracker", "Chatbot", "GoRest API Interface"];
let projectUsedLang = [
    ["React", "JavaScript"],
    ["React", "JavaScript", "Cloudinary"],
    ["React", "JavaScript", "Local Storage"],
    ["React", "JavaScript", "Gemini Api"],
    ["React", "JavaScript", "GoRest Api"]
];
let giturl = "https://github.com/yaswanthkillampalli/";
let projectLink = [giturl + "movie-hit-flop", giturl + "personal-portfolio", giturl + "mood-tracker", giturl + "chat-bot", giturl + "gorest-api"];
document.getElementById("navbarLogo").src = navbarLogo;

document.addEventListener('DOMContentLoaded', () => {
    const navigator = document.getElementById('navigator');
    const sectionToTextMap = {
        'sectionAbout': 'About Me',
        'sectionEducationExperience': 'Education & Experience',
        'sectionSkills': 'Skills',
        'sectionProject': 'Projects',
        'sectionCertificates': 'Certificates',
        'sectionContact': 'Contact'
    };

    // Optional: change dropdown label when scrolling to section
    window.addEventListener('scroll', () => {
        let currentSection = '';
        for (const id in sectionToTextMap) {
            const section = document.getElementById(id);
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                currentSection = id;
                break;
            }
        }

        if (currentSection && sectionToTextMap[currentSection]) {
            navigator.textContent = sectionToTextMap[currentSection];
        }
    });
});


function skillsUpload() {
    let mainDivEl = document.getElementById("skillsSection");
    let divEl = null;
    let imgEl = null;
    let heading = null;
    for (let i = 0; i < skillsArray.length; i++) {
        divEl = document.createElement("div");
        heading = document.createElement("h1");
        heading.textContent = skillValues[i];
        imgEl = document.createElement("img");
        divEl.classList.add("col-4", "col-md-2", "col-lg-1", "text-center");
        imgEl.src = skillsArray[i];
        imgEl.classList.add("skillLogoSettings");
        divEl.appendChild(imgEl);
        divEl.appendChild(heading);
        mainDivEl.appendChild(divEl);
    }
}

function techUsedUpload() {
    let mainDivEl = document.getElementById("techSection");
    let divEl = null;
    let imgEl = null;
    let heading = null;
    for (let i = 0; i < techUsedArray.length; i++) {
        divEl = document.createElement("div");
        heading = document.createElement("h1");
        heading.textContent = techValues[i];
        imgEl = document.createElement("img");
        divEl.classList.add("col-4", "col-md-2", "col-lg-1", "text-center");
        imgEl.src = techUsedArray[i];
        imgEl.classList.add("skillLogoSettings");
        divEl.appendChild(imgEl);
        divEl.appendChild(heading);
        mainDivEl.appendChild(divEl);
    }
}

function projectsUpload() {
    let projectsContainer = document.getElementById("projects");
    projectsContainer.innerHTML = ""; // Clear previous content

    for (let i = 0; i < projectImageArray.length; i++) {
        // Create new elements inside the loop
        let divEl = document.createElement("div");
        let divEl1 = document.createElement("div");
        let divEl2 = document.createElement("div");
        let divEl3 = document.createElement("div");
        let divEl4 = document.createElement("div");
        let imgEl = document.createElement("img");
        let heading = document.createElement("h1");
        let aEl = document.createElement("a");
        let buttonEl = document.createElement("button");
        let icon = document.createElement("i");

        // Set classes
        divEl.classList.add("col-12", "col-md-4", "col-md-3");
        divEl1.classList.add("card");
        divEl2.classList.add("card-tags");
        divEl3.classList.add("card-content");
        divEl4.classList.add("card-action");
        imgEl.classList.add("card-image");

        // Set image source
        imgEl.src = projectImageArray[i];
        divEl1.appendChild(imgEl);

        // Add tags (assuming projectUsedLang[i] is an array of languages)
        if (projectUsedLang[i]) {
            for (let j = 0; j < projectUsedLang[i].length; j++) {
                let spanEl = document.createElement("span");
                spanEl.classList.add("tag");
                spanEl.textContent = projectUsedLang[i][j];
                divEl2.appendChild(spanEl);
            }
        }

        divEl1.appendChild(divEl2);

        // Add project name
        heading.textContent = projectName[i];
        divEl3.appendChild(heading);
        divEl1.appendChild(divEl3);

        // Add button and link
        aEl.setAttribute("href", projectLink[i]);
        aEl.setAttribute("target", "_blank");
        icon.classList.add("fa-solid", "fa-paper-plane");
        buttonEl.appendChild(icon);
        aEl.appendChild(buttonEl);
        divEl4.appendChild(aEl);
        divEl1.appendChild(divEl4);

        divEl.appendChild(divEl1);
        projectsContainer.appendChild(divEl);
    }
}

function showCertificate(imageSrc) {
    document.getElementById("certificateImage").src = imageSrc;
    document.getElementById("certificateModal").classList.remove("d-none");
}

function closeModal() {
    document.getElementById("certificateModal").classList.add("d-none");
}

function populateCertificates() {
    const container = document.getElementById("certificates");

    for (let i = 0; i < certificateName.length; i++) {
        // Create wrapper divs
        const colDiv = document.createElement("div");
        colDiv.classList.add("col-12");

        const cardDiv = document.createElement("div");
        cardDiv.classList.add("certificate-card");

        // Create heading
        const heading = document.createElement("h1");
        heading.textContent = certificateName[i];

        // Create button
        const button = document.createElement("button");
        button.classList.add("btn", "btn-primary");
        button.textContent = "Show Certificate";
        button.onclick = function() {
            showCertificate(certificateLinks[i]);
        };

        // Append all elements
        cardDiv.appendChild(heading);
        cardDiv.appendChild(button);
        colDiv.appendChild(cardDiv);
        container.appendChild(colDiv);
    }
}

function populateCertificates() {
    const container = document.getElementById("certificates");
    // Clear the container to avoid duplicate entries
    container.innerHTML = "";

    for (let i = 0; i < certificateName.length; i++) {
        // Create wrapper divs
        const colDiv = document.createElement("div");
        colDiv.classList.add("col-12", "col-md-6", "col-lg-4", "mb-4");

        const cardDiv = document.createElement("div");
        cardDiv.classList.add("certificate-card");

        // Create heading
        const heading = document.createElement("h1");
        heading.classList.add("certificate-title");
        heading.textContent = certificateName[i];

        // Create provider text
        const provider = document.createElement("div");
        provider.classList.add("certificate-provider");
        provider.innerHTML = `Certificate of Completion from <span>${certificateFrom[i]}</span>`;

        // Create button
        const button = document.createElement("button");
        button.classList.add("certificate-button");
        button.textContent = "Show Certificate";
        button.onclick = function() {
            showCertificate(certificateLinks[i]);
        };

        // Append all
        cardDiv.appendChild(heading);
        cardDiv.appendChild(provider);
        cardDiv.appendChild(button);
        colDiv.appendChild(cardDiv);
        container.appendChild(colDiv);
    }
}

window.onload = function() {
    const length1 = projectName.length;
    const length2 = certificateName.length;
    let count1 = 1;
    let count2 = 2;
    const interval1 = setInterval(() => {
        document.getElementById("counterProjects").textContent = count1;
        count1++;

        if (count1 > length1) {
            clearInterval(interval1);
        }
    }, 100);
    const interval2 = setInterval(() => {
        document.getElementById("counterCertificate").textContent = count2;
        count2++;

        if (count2 > length2) {
            clearInterval(interval2);
        }
    }, 100);
}

populateCertificates();
projectsUpload();
skillsUpload();
techUsedUpload();