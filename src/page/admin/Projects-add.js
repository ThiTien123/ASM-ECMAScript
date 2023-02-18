import { useEffect ,router} from "../../utilities"
import { projects } from "../../data";
// import { v4 as uuidv4 } from 'uuid';
const AdminProjectAddPage = () => {
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    useEffect(() => {
        const form = document.getElementById('form-add');
        const projectName = document.getElementById('project-name');
        const projectImage = document.getElementById('project-image')
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const newProject = {
                // id: uuidv4(),
                // id: projects.length +1,
                name: projectName.value,
                image: projectImage.value
            };

            fetch("http://localhost:3000/projects",{
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newProject) //Chuỗi json 
            });
            // Thêm vào mảng projects
            // projects.push(newProject);
            
            // lưu lại storage
            // localStorage.setItem('projects', JSON.stringify(projects));

            // sang trang 
            router.navigate('/admin/Projects')
        });
    });
    return /*html*/` 
    <div class="container">
        <h1>Add Projects</h1>
        <form action="" id="form-add">
            <div class="form-group mb-3">
                <label for="">Tên projects</label>
                <input type="text" name="" id="project-name" class="form-control">
            </div>
            <div class="form-group mb-3">
                <label for="">image</label>
                <input type="file" name="img" id="project-image" class="project-image">
            </div>
            <div class="form-group">
                <button class="btn btn-primary"> Add</button>
            </div>
        </form>
    </div>
  `
}

export default AdminProjectAddPage