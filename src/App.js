import Header from "./components/Header";
import arrticle from "./components/article";
// import Banner from "./components/Banner";
import Nav from "./components/Nav";
// import Footer from "./components/Footer";

const App = ()=> {
    return `
    ${Header()}
    ${arrticle()}
    ${Nav()}
    <h1 class="ttw-text-3xl tw-font-bold tw-underline tw-bg-red-500 ">
    Hello world!
  </h1>
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
    <h3> Header
     Banner
     NavAbout
     Services
     Work
     Contact</h3>
     <div className="h-[400px"></div>
 </div>

    `
}

export default App;