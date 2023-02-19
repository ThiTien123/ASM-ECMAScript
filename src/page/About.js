import Header from "../components/Header";
const AboutPage = () => {
  
  return` 
  ${Header()}
  <!--==================== HOME ====================-->
        <section class="home section" id="home">
            <div class="home_contaier container flex grid section_border">
                <div class="home_data grid">
                    <h1 class="home_title">
                        Hi, I'm Tiên <br>
                        Fontend Developer <br>
                    </h1>
                    <div class="home_blob grid">
                        <div class="home_perfil">
                            <img src="assets/img/avater-removebg-preview (1).png" alt="home perfil">
                        </div>
                        <!-- <img src="" alt=""> -->
                    </div>
                    <ul class="home_social">
                        <a href="https://www.linkedin.com/" target="_blank" class="home_social-link"><i
                                class="ri-linkedin-box-line"></i></a>
                        <a href="https://github.com/" target="_blank" class="home_social-link"><i
                                class="ri-github-line"></i></a>
                        <a href="https://dribbble.com/" target="_blank" class="home_social-link"><i
                                class="ri-dribbble-line"></i></a>
                    </ul>
                </div>
                <!--==================== HOME INFO 1 ====================-->
                <div class="home_info">
                    <div>
                        <h3 class="home_info-title">
                            ABOUT
                        </h3>
                        <p class="home_info-description">
                            Hi, I'm Tiên, Frontend Developer.
                            Passionate about designing beautiful web
                            interfaces. Based in Perú.
                        </p>
                    </div>
                    <div>
                        <h3 class="home_info-title">
                            CONTACT
                        </h3>
                        <p class="home_info-description">
                            
                            Email: tienltph19794@fpt.edu.vn <br>
                            Điện thoại: 0329047527 <br>
                            Địa chỉ: Cầu Giấy - Hà Nội <br>

                        </p>
                    </div>
                    <div>
                        <h3 class="home_info-title">
                            SERVICES
                        </h3>
                        <p class="home_info-description">
                            Website Design <br>
                            UI/UX Design <br>
                            Animation <br>
                        </p>
                    </div>
                </div>
                <!--==================== HOME INFO 2 ====================-->
                <div class="home_info">
                    <div>
                        <h3 class="home_info-title">
                            YEARS OF EXPERIENCE
                        </h3>
                        <p class="home_info-number">
                            0+
                        </p>
                    </div>
                    <div>
                        <h3 class="home_info-title">
                            COMPLETED PROJECTS
                        </h3>
                        <p class="home_info-number">
                            02+
                        </p>
                    </div>
                    <div>
                        <h3 class="home_info-title">
                            COMPANIES WORKED
                        </h3>
                        <p class="home_info-number">
                            0+
                        </p>
                    </div>
                </div>
            </div>
        </section>
  `
  
  
}


        
        
export default AboutPage;