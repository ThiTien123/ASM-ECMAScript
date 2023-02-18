import { projects } from "../data"


const ProjectList = (projects) => {
  return `
  ${projects.map((project) => {
    return`
    <div id="portfolio">
    
    <div class="work-list">
          <div class="work row">
              <img src="../img/images.jpg" alt="">
              <div class="layer col">
              <h3><a href="/Projects/${project.id}">${project.name}</a></h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et numquam culpa expedita,
                      dignissimos labore officia deserunt animi consequatur odit commodi excepturi sed amet rem,
                      explicabo veritatis quia harum blanditiis ea.</p>
                  <a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
              </div>
          </div>
      </div>
      </div>
    `
  }).join("")};
  `
}
export default ProjectList;