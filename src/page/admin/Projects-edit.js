import { useEffect ,router} from "../../utilities"
// import { projects } from "../../data";
import { v4 as uuidv4 } from 'uuid';

const AdminProjectEditPage = ({id}) => {
  
  const projects = JSON.parse(localStorage.getItem('projects')) || [];
  const currentProject = projects.find(project => project.id === +id);
    useEffect(() => {
        const form = document.getElementById('form-add');
        const projectName = document.getElementById('project-name');
        const projectImage = document.getElementById('project-image')
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const newProject = {
                id: uuidv4(),
                name: projectName.value,
                image: projectImage.value
            };
            // Cập nhật phần tử trong mảng projects
            const newProjects = projects.map((project) => {
                return project.id === newProject.id ? newProject : project;
            });
            
            // lưu lại storage
            localStorage.setItem('projects', JSON.stringify(newProjects));

            // sang trang 
            router.navigate('/admin/Projects')
        });
    });
    if(!currentProject) return null;
    return /*html*/` 
    <div class="container">
        <h1>Edit Projects</h1>
        <form action="" id="form-add">
            <div class="form-group mb-3">
                <label for="">Tên projects</label>
                <input type="text" name="" id="project-name" class="form-control" value="${currentProject.name}">
            </div>
            <div class="form-group mb-3">
                <label for="">image</label>
                <input type="file" name="img" id="project-image" class="project-image" value="${currentProject.image}">
            </div>
            <div class="form-group">
                <button class="btn btn-primary"> Add</button>
            </div>
        </form>
    </div>
  `
}

export default AdminProjectEditPage