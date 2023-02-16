const app = document.querySelector("#app");

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { render , router} from "./utilities";

import HomePage from "./page/Home";
import AboutPage from "./page/About";
import ContactPage from "./page/Contact";
import PostPage from "./page/Post";
import PostDetailPage from "./page/Post-detail";
import ProjectPage from "./page/Projects";
import ProjectDetailPage from "./page/Projects-detail";
import NotFoundPage from "./page/NotFound";

router.on("/", () => render(HomePage, app));
router.on('/About',() => render(AboutPage, app));
router.on('/Contact',() => render(ContactPage, app));
router.on('/Post',() => render(PostPage, app));
router.on('/Post-detail/:id',() => render(PostDetailPage, app));
router.on('/Projects',() => render(ProjectPage, app));
router.on('/Projects-detail/:id',() => render(ProjectDetailPage, app));

router.notFound(() => render(NotFoundPage, app));
// console.log(NotFoundPage())
router.resolve();