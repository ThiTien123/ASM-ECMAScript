import Header from "../components/Header";
const ContactPage = () => {
  return `
  ${Header()}
  <!--==================== CONTACT ====================-->
        <section class="contact section" id="contact">
            <h2 class="section_title">Contact Me</h2>
            <span class="section_subtitle">Get in touch</span>
            <div class="contact_contaier container flex grid section_border">
                <div class="contact_content">
                    <h3 class="contact_title">
                        <i class="ri-chat-3-line"></i> Talk to me
                    </h3>
                    <div class="contact_info">
                        <div class="contact_data">
                            <span class="contact_data-title">Email</span>
                            <span class="contact_data-info">tienltph19794@fpt.edu.vn</span>
                        </div>
                        <div class="contact_data">
                            <span class="contact_data-title">Số điện thoại</span>
                            <span class="contact_data-info">0329047527</span>
                            <!-- <a href="" target="_blank" class="contact_button">Write me <i class="ri-arrow-right-line"></i></a> -->
                        </div>
                        <div class="contact_data">
                            <span class="contact_data-title">Messenger</span>
                            <span class="contact_data-info">m.me.tien.la.090103</span>
                            <a href="https://m.me/tien.la.090103" target="_blank" class="contact_button">Write me <i
                                    class="ri-arrow-right-line"></i></a>
                        </div>
                        <div class="contact_data">
                            <a href="images/my-cv.pdf" download class="btn btn2">Dowbload CV</a>
                        </div>
                    </div>
                </div>
                <div class="contact_content">
                    <h3 style="margin-top: 150px;" class="contact_title margin-top: 50px;">
                        <i class="ri-send-plane-line"></i> Write me your project
                    </h3>
                    <form action="" class="contact_form" id="contact-form">
                        <div style="margin: 50px 0;">
                        <div class="contact_form-group">
                            <lable class="contact_form-tag">Name</lable>
                            <input type="text" name="user_name" class="contact_form-input" id="contact-name" required
                                placeholder="Write your names">
                        </div>
                        </div>
                        <div style="margin: 50px 0;">
                        <div class="contact_form-group">
                            <lable class="contact_form-tag">Email</lable>
                            <input type="email" name="user_email" class="contact_form-input" id="contact-email" required
                                placeholder="Write your email">
                        </div>
                        </div>
                        <div style="margin: 50px 0;">
                        <div class="contact_form-group contact_form-area">
                            <lable class="contact_form-tag">Messenger</lable>
                            <textarea name="user_project" id="contact-project" class="contact_form-input"
                                placeholder="Write your project"></textarea>

                        </div>
                    </div>

                        <div style="margin-top: 100px ;">


                        <div class="contact_form-group contact_form-area">
                            <button type="submit" class="contact_button">Submit <i
                                    class="ri-arrow-right-up-line"></i></button>

                        </div>
                        </div>
                    </form>

                </div>
            </div>
        </section>
  `
}

export default ContactPage;