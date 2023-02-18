

const Header = () => {
    return (
      `
      <body>
    <div class="container">
    <header id="header">
            <nav>
                <h1 class="logo">LT</h1>
                <!-- <img src="" alt=""> -->
                <ul id="sidemenu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/About">About Page</a></li>
                    <li><a href="/Projects">Projects</a></li>
                    <li><a href="/Contact">Contact</a></li>
                    <li><a href="/Post">Post</a></li>
                    <i class="fa-solid fa-xmark" onclick="closemenu()"></i>
                </ul>
                <i class="fa-solid fa-bars" onclick="openmenu()"></i>
            </nav>
            <div class="header-text">
                <p>Web Designer</p>
                <h1>Hi, I'm <span>Tiên</span></h1>
            </div>
        </header>
  </header>`
    )
  }
  
  export default Header;