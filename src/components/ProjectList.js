import { projects } from "../data"


const ProjectList = (projects) => {
  return `
  ${projects.map((project) => {
    return `
              <div class="projects_content swiper-slide">
                  <img src="assets/img/DA1.jpg" alt="projects image" class="projects_img">
                  <div>
                      <span class="projects_subtitle">Web</span>
                      <h1 class="projects_title">${project.name}</h1>
                      <a class="projects_buttom" href="/Projects/${project.id}">View <i class="ri-arrow-right-line"></i></a>
                  </div>
              </div>
    `
  }).join("")}
  `
}
export default ProjectList;
