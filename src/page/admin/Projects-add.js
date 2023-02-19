import { useEffect, router } from "../../utilities"
import { projects } from "../../data";
import axios from "axios";
// import { v4 as uuidv4 } from 'uuid';
const AdminProjectAddPage = () => {
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    useEffect(() => {
        const form = document.getElementById('form-add');
        const projectName = document.getElementById('project-name');
        const projectImage = document.getElementById('project-description')
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const newProject = {
                // id: uuidv4(),
                // id: projects.length +1,
                name: projectName.value,
                image: projectImage.value
            };
            // api
            // fetch("http://localhost:3000/projects", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify(newProject) //Chuỗi json 
            // }).then(() => {
            //     // sang trang 
            //     router.navigate('/admin/Projects')
            // })

            axios.post('http://localhost:3000/projects',newProject).
            then(()=>router.navigate('/admin/Projects'));
            // Thêm vào mảng projects
            // projects.push(newProject);

            // lưu lại storage
            // localStorage.setItem('projects', JSON.stringify(projects));


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
                <label for="">description</label>
                <input type="text" name="" id="project-description" class="project-description">
            </div>
            <div class="form-group">
                <button class="btn btn-primary"> Add</button>
            </div>
        </form>
    </div>
  `
}

export default AdminProjectAddPage