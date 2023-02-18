

const arrticle = () => {
    return`
    <div id="about">
          <!-- <div class="container"> -->
              <div class="row">
                  <div class="about-col-1">
                      <img src="../img/kisspng-portable-network-graphics-vector-graphics-clip-art-do-nootropics-work-best-5-supplements-5c72a50c2701f4.0128278115510172281598.jpg" alt="">
                  </div>
                  <div class="about-col-2">
                      <h1 class="sub-title">About me</h1>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut placeat rem consequuntur exercitationem sed, omnis voluptas sunt doloremque facilis culpa similique harum, deserunt nam dolorum architecto, debitis consequatur impedit accusantium!</p>
                      <div class="tab-title">
                          <p class="tab-link active-link" onclick="opentab('skills')">Skills</p>
                          <p class="tab-link" onclick="opentab('experience')">Experience</p>
                          <p class="tab-link" onclick="opentab('education')">Education</p>
                      </div>
                      <div class="tab-content active-tab" id="skills">
                          <ul>
                              <li><span>UI?UX</span> <br> Designing Web/App interfaces</li>
                              <li><span>Web Development</span> <br> Web app Development </li>
                              <li><span>App Development</span> <br> Building Android/IOS apps</li>
                          </ul>
                      </div>
                      <div class="tab-content" id="experience">
                          <ul>
                              <li><span>Experience</span> <br> Designing Web/App interfaces</li>
                              <li><span>Web Development</span> <br> Web app Development </li>
                              <li><span>App Development</span> <br> Building Android/IOS apps</li>
                          </ul>
                      </div>
                      <div class="tab-content" id="education">
                          <ul>
                              <li><span>Education</span> <br> Designing Web/App interfaces</li>
                              <li><span>Web Development</span> <br> Web app Development </li>
                              <li><span>App Development</span> <br> Building Android/IOS apps</li>
                          </ul>
                      </div>
                  </div>
              </div>
          <!-- </div> -->
      </div>
    `
  }
  
  export default arrticle