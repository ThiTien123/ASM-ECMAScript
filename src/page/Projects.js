import Header from "../components/Header";
import ProjectList from "../components/ProjectList";
import { projects } from "../data";
const ProjectPage = () => {
  return `
  ${Header()}
  
  <!-- Portfolio -->
  <div id="portfolio">
 
      <h1 class="sub-title">My Projects</h1>
      <div class="work-list tw-grid  tw-grid-col-3 ">
      ${ProjectList(projects)}
      </div>
      
      <a href="#" class="btn">See more</a>
  </div>
  `
}

export default ProjectPage;