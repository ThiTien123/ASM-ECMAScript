import { projects } from "../data";

const ProjectDetailPage = ({data: {id}}) => {
  // console.log(typeof id);
  
  const project = projects.find((project) => project.id === +id);
  console.log("project", project)
  if(!project) return null;
  return `
  <div>${project.name}</div>
  `
}

export default ProjectDetailPage;