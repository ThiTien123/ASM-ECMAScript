import Header from "../components/Header";

const ContactPage = () => {
  return `${Header()}
  <!-- Contact -->
  <div id="contact">
      <div class="row">
          <div class="contact-left">
              <h1 class="sub-title">Contact</h1>
              <p><i class="fa-solid fa-paper-plane"></i>tienltph19794@fpt.edu.vn</p>
              <p><i class="fa-solid fa-paper-plane"></i>0329047527</p>
              <div class="social-icon">
                  <a href="https://youtu.be/Hps-XPN1GeE
              https://www.facebook.com/tien.la.090103?mibextid=ZbWKwL"><i class="fa-brands fa-facebook"></i></a>
                  <a href="#"><i class="fa-brands fa-instagram"></i></a>
                  <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                  <a href="#"><i class="fa-brands fa-twitter"></i></a>
              </div>
              <a href="images/my-cv.pdf" download class="btn btn2">Dowbload CV</a>
          </div>
          <div class="contact-right">
              <form action="" name="submit-message">
                  <input type="text" name="Name" placeholder="Your Name..." required>
                  <input type="email" name="Email" id="" placeholder="Your Email..." required>
                  <textarea name="Message" id="" cols="30" rows="6" placeholder="Your Message..."></textarea>
                  <button type="submit" class="btn btn2">Submit</button>
              </form>
              <span id="msg"></span>
          </div>
      </div>
  </div>
  `
}

export default ContactPage;