import { projects } from "../../data";
import { useEffect, useState } from "../../utilities";
import axios from "axios";
const AdminProjectsPage = () => {

    const [projects, setProjects] = useState([]);
    useEffect(() => {
        // const projects = JSON.parse(localStorage.getItem('projects'))||[];
        // setData(projects);

        // API 
        // fetch("http://localhost:3000/projects").then((response) => response.json()).then((data) =>setProjects(data));

        axios.get('http://localhost:3000/projects').then(({ data }) => setProjects(data));
    }, []);

    useEffect(() => {
        const btns = document.querySelectorAll('.btn-remove');
        for (let btn of btns) {
            btn.addEventListener('click', function () {
                const id = this.dataset.id;
                // API
                // fetch(`http://localhost:3000/projects/${id}`,{
                //     method: "DELETE",
                // }).then(() => {
                //     const newProject = projects.filter(project => project.id !== +id);
                // setProjects(newProject);
                // });

                axios.delete(`http://localhost:3000/projects/${id}`).then(() => {
                    const newProject = projects.filter(project => project.id !== +id);
                    setProjects(newProject);
                });
            });
        }
    });
    return /*html*/`
    <div class="container  mt-3">
        <table>
            <div class="table table-bordered">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                ${projects.map((project, index) => `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${project.name}</td>
                        <td>
                        <button data-id="${project.id}" class="btn btn-danger btn-remove">Xóa</button>
                        <a class="btn btn-danger " href="/#/admin/Projects/${project.id}/edit">Sửa</a>
                        </td>
                    </tr>
                    `).join("")}
                </tbody>
            </div>
        </table>
    </div>
  `
}

export default AdminProjectsPage;
