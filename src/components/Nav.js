

const Nav = () => {
  return `
  <header class="header" id="header">
  <nav class="nav container">
      <a href="#" class="nav_logo">Tiên</a>

      <div class="nav_menu" id="nav-menu">
          <ul class="nav_list grid">
              <li class="nav_item">
                  <a href="#home" class="nav_link active-link">
                      <i class="ri-home-4-line"></i> Home
                  </a>
              </li>
              <li class="nav_item">
                  <a href="#Skills" class="nav_link">
                      <i class="ri-trophy-line"></i> Skills
                  </a>
              </li>
              <li class="nav_item">
                  <a href="#Qualification" class="nav_link">
                      <i class="ri-book-open-line"></i> Qualification
                  </a>
              </li>
              <li class="nav_item">
                  <a href="#Services" class="nav_link">
                      <i class="ri-briefcase-line"></i> Services
                  </a>
              </li>
              <li class="nav_item">
                  <a href="#Projects" class="nav_link">
                      <i class="ri-image-line"></i> Projects
                  </a>
              </li>
              <li class="nav_item">
                  <a href="#Contact" class="nav_link">
                      <i class="ri-chat-3-line"></i> Contact
                  </a>
              </li>
          </ul>
          <!-- close buttom -->
          <div class="nav_close" id="nav-close">
              <i class="ri-close-line"></i>
          </div>
      </div>
      <div class="nav_toggle" id="nav-toggle">
          <i class="ri-menu-4-line"></i>
      </div>
  </nav>
</header>
  `
}

export default Nav;

