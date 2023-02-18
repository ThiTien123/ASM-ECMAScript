import { projects } from "../../data";
import { useEffect } from "../../utilities";
const AdminProjectsPage = () => {
    useEffect(()=>{
        const btns = document.querySelectorAll('.btn-remove');
    });
  return /*html*/`
    <div class="container  mt-3">
        <table>
            <div class="table table-hover">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                ${projects.map((project, index) =>`
                    <tr>
                        <td>${index +1}</td>
                        <td>${project.name}</td>
                        <td><button data-id="${project.id}" class="btn btn-danger btn-remove">Xóa</button></td>
                    </tr>
                    `).join("")}
                </tbody>
            </div>
        </table>
    </div>
  `
}

export default AdminProjectsPage;
