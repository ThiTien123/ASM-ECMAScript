const app = document.querySelector("#app");

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { render , router} from "./utilities";

import HomePage from "./page/Home";
import AboutPage from "./page/About";
import ContactPage from "./page/Contact";
import PostPage from "./page/Post";
import ProjectPage from "./page/Projects";
import ProjectDetailPage from "./page/Projects-detail";
import NotFoundPage from "./page/NotFound";
import Skill from "./page/Skill";
import Qualification from "./page/Qualification";
import Services from "./page/Services";
// admin
import AdminProjectsPage from "./page/admin/Projects";
import AdminProjectAddPage from "./page/admin/Projects-add";
import AdminProjectEditPage from "./page/admin/Projects-edit";

router.on("/", () => render(HomePage, app));
router.on('/About',() => render(AboutPage, app));
router.on('/Contact',() => render(ContactPage, app));
router.on('/Skills',() => render(Skill, app));
router.on('/Qualification',() => render(Qualification, app));
router.on('/Services',() => render(Services, app));
router.on('/Post',() => render(PostPage, app));
router.on('/Projects',() => render(ProjectPage, app));
router.on('/Projects/:id',(data) => render(()=>ProjectDetailPage(data), app));

// admin
router.on("/admin/Projects", () => render(AdminProjectsPage, app));
router.on("/admin/Projects/add", () => render(AdminProjectAddPage, app));
router.on("/admin/Projects/:id/edit", ({data}) => render(() => AdminProjectEditPage(data), app));


router.notFound(() => render(NotFoundPage, app));

router.resolve();