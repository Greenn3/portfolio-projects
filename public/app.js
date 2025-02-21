

document.querySelectorAll('.clickable').forEach(card => {
    card.addEventListener('click', () => {
        const inner = card.querySelector('.flip-card-inner');
        inner.style.transform = inner.style.transform === 'rotateY(180deg)' 
            ? 'rotateY(0deg)' 
            : 'rotateY(180deg)';
    });
});


import projects from './projects.js';


function generateCards() {
    const grid = document.getElementById("grid");
    grid.innerHTML = ""; // Clear existing content

    projects.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("flip-card");

        // Generate links if available
        let linksHTML = "";
        if (project.links && project.links.length > 0) {
            linksHTML = `<div class="links">` + 
                project.links.map(link => 
                    `<a href="${link.url}" target="_blank" rel="noopener noreferrer">
                        <img class="link-icon" src="${link.logo}" alt="Link icon" class="link-icon" title="${link.desc_tooltip}">
                    </a>`
                ).join("") + 
                `</div>`;
        }

        card.innerHTML = `
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <div class="front-frame">
                        <h3 class="title">${project.title}</h3>
                        <h4 class="desc">${project.desc}</h4>
                        <img src="${project.picture}" class="card-picture">
                        <p class="techs">${project.tech}</p>
                    </div>
                </div>
                <div class="flip-card-back">
                    <div class="back-frame">
                        <div class="long-desc">${project.long_desc}</div>
                    
                        ${linksHTML} 
                    </div>
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
