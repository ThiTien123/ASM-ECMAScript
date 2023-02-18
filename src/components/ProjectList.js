import { projects } from "../data"


const ProjectList = (projects) => {
  return `
  ${projects.map((project) => {
    return`
    
            <div class="work ">
                <img src="../img/images.jpg" alt="">
                <div class="layer ">
                    <h3><a class="tw-text-slate-400 tw-no-underline tw-hover:underline" href="/Projects/${project.id}">${project.name}</a></h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et numquam culpa expedita,
                        dignissimos labore officia deserunt animi consequatur odit commodi excepturi sed amet rem,
                        explicabo veritatis quia harum blanditiis ea.</p>
                    <a href="#" class="link" ><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
    `
  }).join("")}
  `
}
export default ProjectList;
