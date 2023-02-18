import Header from "../components/Header";
import ProjectList from "../components/ProjectList";
import { projects } from "../data";
const ProjectPage = () => {
  return `
  ${Header()}
  
  ${ProjectList(projects)}
  <!-- Portfolio -->
  <div id="portfolio">
  
      <h1 class="sub-title">My Work</h1>
      <div class="work-list">
          <div class="work">
              <img src="../img/images.jpg" alt="">
              <div class="layer">
                  <h3>Social Media App</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et numquam culpa expedita,
                      dignissimos labore officia deserunt animi consequatur odit commodi excepturi sed amet rem,
                      explicabo veritatis quia harum blanditiis ea.</p>
                  <a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
              </div>
          </div>
          <div class="work">
              <img src="../img/img.png" alt="">
              <div class="layer">
                  <h3>Music App</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et numquam culpa expedita,
                      dignissimos labore officia deserunt animi consequatur odit commodi excepturi sed amet rem,
                      explicabo veritatis quia harum blanditiis ea.</p>
                  <a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
              </div>
          </div>
          <div class="work">
              <img src="../img/mug_coffee_PNG16814.png" alt="">
              <div class="layer">
                  <h3>Online Shopping App</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et numquam culpa expedita,
                      dignissimos labore officia deserunt animi consequatur odit commodi excepturi sed amet rem,
                      explicabo veritatis quia harum blanditiis ea.</p>
                  <a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
              </div>
          </div>
      </div>
      <a href="#" class="btn">See more</a>
  </div>
  `
}

export default ProjectPage;