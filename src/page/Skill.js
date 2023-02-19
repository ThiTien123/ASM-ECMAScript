import Header from "../components/Header"

const Skill = () => {
  return `
  ${Header()}
  <!--==================== SKILLS ====================-->
  <section class="skills section" id="skills">
      <h2 class="section_title">Skills</h2>
      <span class="section_subtitle">My favorite skills</span>
      <div class="skills_contaier container flex grid section_border">
          <!--==================== SKILLS 1====================-->
          <div class="skills_content">
              <h3 class="skills_title">
                  <i class="ri-braces-line"></i> Frontend Developer
              </h3>
              <div class="skills_info">
                  <div class="skills_data">
                      <div class="skills_blob">
                          <img src="assets/img/html5.png" alt="skills image">
                          <h3 class="skills_name">HTML</h3>
                          <span class="skilss_subtitle">Intermediate</span>
                      </div>
                  </div>
                  <div class="skills_data">
                      <div class="skills_blob">
                          <img src="assets/img/css.png" alt="skills image">
                          <h3 class="skills_name">CSS</h3>
                          <span class="skilss_subtitle">Advanced</span>
                      </div>
                  </div>
                  <div class="skills_data">
                      <div class="skills_blob">
                          <img src="assets/img/js.png" alt="skills image">
                          <h3 class="skills_name">JavaScript</h3>
                          <span class="skilss_subtitle">Intermediate</span>
                      </div>
                  </div>

              </div>
          </div>
          <!--==================== SKILLS 2====================-->
          <div class="skills_content">
              <h3 class="skills_title">
                  <i class="ri-pantone-line"></i> Web Designer
              </h3>
              <div class="skills_info">
                  <div class="skills_data">
                      <div class="skills_blob">
                          <img src="assets/img/github.png" alt="skills image">
                          <h3 class="skills_name">Git</h3>
                          <span class="skilss_subtitle">Intermediate</span>
                      </div>
                  </div>
                  <div class="skills_data">
                      <div class="skills_blob">
                          <img src="assets/img/fixma.png" alt="skills image">
                          <h3 class="skills_name">Figma</h3>
                          <span class="skilss_subtitle">Advanced</span>
                      </div>
                  </div>
                  <div class="skills_data">
                      <div class="skills_blob">
                          <img src="assets/img/Photoshop.png" alt="skills image">
                          <h3 class="skills_name">Photoshop</h3>
                          <span class="skilss_subtitle">Intermediate</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  `
}

export default Skill