import Header from "../components/Header"
const Qualification = () => {
  return `
  ${Header()}
  <!--==================== QUALIFICATION ====================-->
        <section class="qualification section" id="qualification">
            <h2 class="section_title">Qualification</h2>
            <span class="section_subtitle">Experience & education</span>
            <div class="qualification_contaier container grid section_border">
                <!--==================== QUALIFICATION 1====================-->
                <div class="qualification_content">
                    <div>
                        <h3 class="qualification_title">
                            <i class="ri-pencil-ruler-2-line"></i> Education
                        </h3>
                        <div class="qualification_info">
                            <div>
                                <h3 class="qualification_name">
                                    Web Developer
                                </h3>
                                <span class="qualification_country">Cao đẳng Polytectnic</span>
                                <span class="qualification_year">2021 - 2024</span>
                            </div>
                            <div>
                                <h3 class="qualification_name">
                                    UI/UX Design
                                </h3>
                                <span class="qualification_country">Institute - Spain</span>
                                <span class="qualification_year">2017 - 2019</span>
                            </div>

                        </div>
                    </div>
                    <!--==================== QUALIFICATION 2====================-->
                    <div>
                        <h3 class="qualification_title">
                            <i class="ri-building-line"></i> Work
                        </h3>
                        <div class="qualification_info">
                            <div>
                                <h3 class="qualification_name">
                                    Fontend Developer
                                </h3>
                                <span class="qualification_country">Adobe - Spain</span>
                                <span class="qualification_year">2014 - 2019</span>
                            </div>
                            <div>
                                <h3 class="qualification_name">
                                    Graphic Designer
                                </h3>
                                <span class="qualification_country">Figma - Perú</span>
                                <span class="qualification_year">2020 - Present</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
  `
}

export default Qualification