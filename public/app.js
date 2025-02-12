document.querySelectorAll('.clickable').forEach(card => {
    card.addEventListener('click', () => {
        const inner = card.querySelector('.flip-card-inner');
        inner.style.transform = inner.style.transform === 'rotateY(180deg)' 
            ? 'rotateY(0deg)' 
            : 'rotateY(180deg)';
    });
});
window.addEventListener("load", () => {
    document.documentElement.style.setProperty("--card-width", window.innerWidth * 0.3 + "px");
    document.documentElement.style.setProperty("--card-height", window.innerHeight * 0.48 + "px");
});
const projects = [
    { title: "Itemfinder", desc: "Virtual lost and found office", tech: "JAVA | SPRING | HTML", picture: "/assets/pictures/itemfinder2.png" },
    { title: "Lodgify", desc: "A simple PMS for accommodations", tech: "JAVA | SPRING | JAVAFX", picture: "/assets/pictures/lodgify.png" },
    { title: "Neural Network", desc: "Basic AI model", tech: "Python | TensorFlow", picture: "/assets/pictures/dummy.png" },
    { title: "2048", desc: "Classic puzzle game", tech: "JavaScript | CSS | HTML",picture: "/assets/pictures/dummy.png" },
    { title: "Minesweeper", desc: "Classic game recreation", tech: "JavaScript | React",picture: "/assets/pictures/dummy.png" },
    { title: "ProjectCrypto", desc: "Cryptocurrency tracking app", tech: "React | Node.js", picture: "/assets/pictures/dummy.png" },
    { title: "Itemfinder", desc: "Virtual lost and found office", tech: "JAVA | SPRING | HTML", picture: "/assets/pictures/dummy.png" },
    { title: "Lodgify", desc: "A simple PMS for accommodations", tech: "JAVA | SPRING | JAVAFX", picture: "/assets/pictures/dummy.png" },
    { title: "Neural Network", desc: "Basic AI model", tech: "Python | TensorFlow", picture: "/assets/pictures/dummy.png" },
    { title: "2048", desc: "Classic puzzle game", tech: "JavaScript | CSS | HTML", picture: "/assets/pictures/dummy.png" },
    { title: "Minesweeper", desc: "Classic game recreation", tech: "JavaScript | React", picture: "/assets/pictures/dummy.png" },
    { title: "ProjectCrypto", desc: "Cryptocurrency tracking app", tech: "React | Node.js", picture: "/assets/pictures/dummy.png" }
];

function generateCards() {
    const grid = document.getElementById("grid");
    grid.innerHTML = ""; // Clear existing content

    projects.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("flip-card");
        card.innerHTML = `
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <h3>${project.title}</h3>
                    <h4>${project.desc}</h4>
                     <div class="picture-container"><img src="${project.picture}" class="card-picture"></div>
                    <div></div>
                    <p>${project.tech}</p>
                    <p>Flip for more!</p>
                </div>
                <div class="flip-card-back">
                    <h3>More Info</h3>
                    <p>Details about ${project.title}.</p>
                </div>
            </div>
        `;

        // Add event listener for flipping
        card.addEventListener("click", () => {
            const inner = card.querySelector(".flip-card-inner");
            inner.style.transform = inner.style.transform === "rotateY(180deg)" 
                ? "rotateY(0deg)" 
                : "rotateY(180deg)";
        });

        grid.appendChild(card);
    });
}

// Run function on page load
document.addEventListener("DOMContentLoaded", generateCards);