import Header from "../components/Header";
import ProjectList from "../components/ProjectList";
import { projects } from "../data";

const ProjectPage = () => {
  
  return `
  ${Header()}
  
  <!--==================== PROJECTS ====================-->
        <section class="projects section" id="projects">
            <h2 class="section_title">Projects</h2>
            <span class="section_subtitle">My client saying</span>
            <div class=" container section_border">
                <div class="projects_container  swiper">
                    <div class="swiper-wrapper">
                    ${ProjectList(projects)}
                        
                    </div>
                    

                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </section>
  `
}

export default ProjectPage;