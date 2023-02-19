import { useEffect ,router, useState} from "../../utilities"
// import { projects } from "../../data";
// import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

const AdminProjectEditPage = ({id}) => {
//   console.log(id)
//   const projects = JSON.parse(localStorage.getItem('projects')) || [];
//   const currentProject = projects.find(project => project.id === id);
    const [project, setProject] = useState({});
    
    useEffect(() =>{
        // fetch(`http://localhost:3000/projects/${id}`)
        // .then((response) => response.json())
        // .then((data) =>{
        //     setProject(data);
        // });

        axios.get(`http://localhost:3000/projects/${id}`)
        .then(({data}) => setProject(data));
    }, []);
    useEffect(() => {
        const form = document.getElementById('form-add');
        const projectName = document.getElementById('project-name');
        const projectImage = document.getElementById('project-description')
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = {
                // id: uuidv4(),
                name: projectName.value,
                image: projectImage.value
            };
            // Cập nhật phần tử trong mảng projects
            // const newProjects = projects.map((project) => {
            //     return project.id === newProject.id ? newProject : project;
            // });
            // api
            // fetch(`http://localhost:3000/projects/${id}`,{
            //     method: "PUT",
            //     headers:{
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify(formData),
            // }).then(()=>{
            //     // sang trang 
            // router.navigate('/admin/Projects');
            // })
            
            // // lưu lại storage
            // localStorage.setItem('projects', JSON.stringify(newProjects));

            axios.put(`http://localhost:3000/projects/${id}`, formData)
            .then(()=> router.navigate("/admin/Projects"));
            
        });
    });
    // if(!currentProject) return null;
    return /*html*/` 
    <div class="container">
        <h1>Edit Projects</h1>
        <form action="" id="form-add">
            <div class="form-group mb-3">
                <label for="">Tên projects</label>
                <input type="text" name="" id="project-name" class="form-control" value="${project.name ?? ""}">
            </div>
            <div class="form-group mb-3">
                <label for="">Description</label>
                <input type="text" name="" id="project-description" class="project-description" value="${project.image}">
            </div>
            <div class="form-group">
                <button class="btn btn-primary"> Edit</button>
            </div>
        </form>
    </div>
  `
}

export default AdminProjectEditPage;