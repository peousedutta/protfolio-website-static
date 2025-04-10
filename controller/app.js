import { accordionInteration } from "./interactions.js";

export async function showProjects() {
    const projectList = await fetch("../data/project.json").then(res => res.json());
    console.log(projectList);
    const projectContainer = document.querySelector(".projects-container")
    projectList.map(project => {
        const projectCard = document.createElement('div');
        projectCard.className = "project-card"
        projectCard.innerHTML = 
        `<div class="project-header">
          ${project.title}
          <svg class="arrow" viewBox="0 0 20 20" fill="none">
            <path d="M5 8l5 5 5-5" stroke="#00a8e1" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div class="project-description-wrapper">
          <div class="project-description">
            <p>${project.description}</p></br>
            <a href="${project.link}"> see more </a>
          </div>
        </div>`;
        projectContainer.appendChild(projectCard);
    });

    accordionInteration()
}