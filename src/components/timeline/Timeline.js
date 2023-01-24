import "./timeline.css"
import { AiFillEdit,AiFillTrophy } from 'react-icons/ai';
// FaLaptopCode
import { FaLaptopCode,FaHandshake } from 'react-icons/fa';
// BsCodeSlash
import { BsCodeSlash } from 'react-icons/bs';
export default function Timeline() {
    return (
      
            <div style={{color:'white'}}>
        <section id="process">
          <div class="container-fluid">
            <div class="row">
              <div class="steps-timeline text-center">
                <div class="steps-one">
                  {/* <h3>Step 1</h3> */}
                  <div class="end-circle back-orange"></div>
                  <div class="step-wrap">
                    <div class="steps-stops">
                      <div class="verticle-line back-orange"></div>
                    </div>
                  </div>
                  <div class="pane-warp back-blue">
                    <div class="steps-pane">
                        <AiFillEdit size={50} color="white" />
                        <div>Registrations</div>
                    </div>
                  </div>
                  <div class="inverted-pane-warp back-blue">
                    <div class="inverted-steps-pane">
                      <p>Please fill your respective details in the attached TAX sheet whose salary mandat</p>
                    </div>
                  </div>
                </div>
        
                <div class="steps-two">
                  {/* <h3>Step 2</h3> */}
                  <div class="step-wrap">
                    <div class="steps-stops">
                      <div class="verticle-line back-orange"></div>
                    </div>
                  </div>
                  <div class="pane-warp back-orange">
                    <div class="steps-pane">
                        <FaLaptopCode size={50} color="white" />
                        <div>Pre Hackathon Sessions</div>
                    </div>
                  </div>
                  <div class="inverted-pane-warp back-orange">
                    <div class="inverted-steps-pane">
                      <p>Please fill your respective details in the attached TAX sheet whose salary mandat</p>
                    </div>
                  </div>
                </div>
        
                <div class="steps-three">
                  {/* <h3>Step 3</h3> */}
                  <div class="step-wrap">
                    <div class="steps-stops">
                      <div class="verticle-line back-orange"></div>
                    </div>
                  </div>
                  <div class="pane-warp back-blue">
                    <div class="steps-pane">
                        <BsCodeSlash size={50} color="white" />
                        <div>Hackathon Starts</div>                
                                        
                    </div>
                  </div>
                  <div class="inverted-pane-warp back-blue">
                    <div class="inverted-steps-pane">
                      <p>Please fill your respective details in the attached TAX sheet whose salary mandat</p>
                    </div>
                  </div>
                </div>
        
                <div class="steps-four">
                  {/* <h3>Step 4</h3> */}
                  <div class="step-wrap">
                    <div class="steps-stops">
                      <div class="verticle-line back-orange"></div>
                    </div>
                  </div>
                  <div class="pane-warp back-orange">
                    <div class="steps-pane">
                                        <AiFillTrophy size={50} color="white" />
                                        <div>Winner Announcement</div>
                    </div>
                  </div>
                  <div class="inverted-pane-warp back-orange">
                    <div class="inverted-steps-pane">
                      <p>Please fill your respective details in the attached TAX sheet whose salary mandat</p>
                    </div>
                  </div>
                </div>
        
                <div class="steps-five">
                  {/* <h3>Step 5</h3> */}
                  <div class="inverted-end-circle back-orange"></div>
                  <div class="step-wrap">
                    <div class="steps-stops">
                      <div class="verticle-line back-orange"></div>
                    </div>
                  </div>
                  <div class="pane-warp back-blue">
                    <div class="steps-pane">
                                        <FaHandshake size={50} color="white" />
                                        <div>Closing Ceremony</div>
                    </div>
                  </div>
                  <div class="inverted-pane-warp back-blue">
                    <div class="inverted-steps-pane">
                      <p>Please fill your respective details in the attached TAX sheet whose salary mandat</p>
                    </div>
                  </div>
                </div>
        
              </div>
            </div>
          </div>
        </section>
                  
            </div>

        
        )
    }
    