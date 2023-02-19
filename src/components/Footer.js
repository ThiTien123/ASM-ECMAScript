
const Footer = () => {
  return `
  <!--==================== FOOTER ====================-->
    <footer class="footer">
        <div class="footer_container container">
            <h1 class="footer_title">Tiên</h1>
            <p>Frontend Developer</p>
            <ul class="footer_list">
                <li><a href="#home" class="footer_link">Home</a></li>
                <li><a href="#skills" class="footer_link">Skills</a></li>
                <li><a href="#project" class="footer_link">Projects</a></li>
            </ul>
            <ul class="footer_social">
                <a href="https://www.linkedin.com/" target="_blank" class="footer_social-link"><i
                        class="ri-linkedin-box-line"></i></a>
                <a href="https://github.com/" target="_blank" class="footer_social-link"><i
                        class="ri-github-line"></i></a>
                <a href="https://dribbble.com/" target="_blank" class="footer_social-link"><i
                        class="ri-dribbble-line"></i></a>
            </ul>
            <span class="footer_copy">
                &#169; Copyright . All rights reserved
            </span>
        </div>
    </footer>
    <script src="assets/js/swiper-bundle.min.js"></script>

    <!--=============== EMAIL JS ===============-->


    <!--=============== MAIN JS ===============-->
    <script src="assets/js/main.js"></script>
  `
}

export default Footer