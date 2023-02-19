import Header from "../components/Header"
const Services = () => {
  return `
  ${Header()}
  <!--==================== SERVICES ====================-->
        <section class="services section" id="services">
            <h2 class="section_title">Services</h2>
            <span class="section_subtitle">What i offer</span>
            <div class="services_contaier container flex grid section_border">
                <div class="services_card">
                    <i class="ri-layout-4-line"></i>

                    <h2 class="services_title">
                        UI/UX <br>
                        Designer
                    </h2>
                    <p class="services__description">
                        Service that provides the best quality and at
                        the request of the client, with professional
                        work and customer support.
                    </p>
                    <div class="services_border">

                    </div>
                </div>
                <div class="services_card">
                    <i class="ri-code-line"></i>

                    <h2 class="services_title">
                        Website <br>
                        Design
                    </h2>
                    <p class="services__description">
                        Service that provides the best quality and at
                        the request of the client, with professional
                        work and customer support.
                    </p>
                    <div class="services_border">

                    </div>
                </div>
                <div class="services_card">
                    <i class="ri-quill-pen-line"></i>

                    <h2 class="services_title">
                        Digital <br>
                        Animator
                    </h2>
                    <p class="services__description">
                        Service that provides the best quality and at
                        the request of the client, with professional
                        work and customer support.
                    </p>
                    <div class="services_border">

                    </div>
                </div>
            </div>
        </section>
  `
}

export default Services