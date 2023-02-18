import Header from "../components/Header";
const PostPage = () => {
  return `
  ${Header()}
  <!-- Services -->
  <div id="services">
      <h1 class="sub-title">My Services</h1>
      <div class="services-list">
          <div>
              <i class="fa-solid fa-code"></i>
              <h2>Web Design</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga ad perspiciatis mollitia similique
                  est qui quae voluptatibus laboriosam, neque quis debitis nulla excepturi adipisci pariatur
                  tenetur nisi nam veniam ratione.</p>
              <a href="#">Learn moer</a>
          </div>
          <div>
              <i class="fa-solid fa-crop-simple"></i>
              <h2>UI/UX Design</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga ad perspiciatis mollitia similique
                  est qui quae voluptatibus laboriosam, neque quis debitis nulla excepturi adipisci pariatur
                  tenetur nisi nam veniam ratione.</p>
              <a href="#">Learn moer</a>
          </div>
          <div>
              <i class="fa-brands fa-app-store"></i>
              <h2>App Design</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga ad perspiciatis mollitia similique
                  est qui quae voluptatibus laboriosam, neque quis debitis nulla excepturi adipisci pariatur
                  tenetur nisi nam veniam ratione.</p>
              <a href="#">Learn moer</a>
          </div>
      </div>
  </div>
  `
}

export default PostPage;