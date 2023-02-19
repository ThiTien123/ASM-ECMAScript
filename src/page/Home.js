import Header from "../components/Header";
import AboutPage from "./About";
import PostPage from "./Post";
import ProjectPage from "./Projects";
import ContactPage from "./Contact";
import Footer from "../components/Footer";
const HomePage = () => {
  return `
  ${Header()}
  ${AboutPage()}
  ${PostPage()}
  ${ProjectPage()}
  ${ContactPage()}
  ${Footer()}
  
  `
}

export default HomePage;