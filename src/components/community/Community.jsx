import React from 'react'
import { Carousel } from "react-responsive-3d-carousel";
import "./Community.css";

const Community = () => {
  return (
    <div id="community" className="community">
      <h3>Our Team</h3>
      {/* <p>Lorem Ipsum Serento Coris Rentroes</p> */}
      <div className="communityContainer">
        <Carousel
          spread="narrow"
          startIndex={0}
          interval={5000}
          width="390px"
          height="380px"
        >
          <div className="communityCard">
            <div className="cardTop">
              <div className="communityImg">
                <img src="/images/keshav.png" alt="" />
              </div>
              <div className="communityContent">
                <h5>Keshav Gupta</h5>
                <p className="jobRole">Founder and CEO</p>
              </div>
            </div>
            <div>
              <p>
                <b>Hi myself Keshav</b> ,We at Bettel are driving an esports
                revolution with innovative tech and a thriving gaming community.
                Join us as we redefine esports With Bettel !
              </p>
              <div>
                <a
                  href="https://www.instagram.com/iamkeshav7272/"
                  target="blank"
                  className="button"
                >
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/keshavgupta72/"
                  target="blank"
                  className="button"
                >
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="communityCard">
            <div className="cardTop">
              <div className="communityImg">
                <img src="/images/shwetank.jpg" alt="" />
              </div>
              <div className="communityContent">
                <h5>Shwetank Aryan</h5>
                <p className="jobRole">Co-Founder and CTO</p>
              </div>
            </div>
            <div>
              <p>
                <b>Hey Gamers, I'm Shwetank</b>, We're making something crazy to
                convert your passion into a worthy experience, join the
                Hyperspace for an immersive gaming.
              </p>
              <div>
                <a
                  href="https://www.instagram.com/aayan_lobo/"
                  target="blank"
                  className="button"
                >
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/shwetank-aryan/"
                  target="blank"
                  className="button"
                >
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="communityCard">
            <div className="cardTop">
              <div className="communityImg">
                <img src="/images/aayush.jpeg" alt="" />
              </div>
              <div className="communityContent">
                <h5>Aayush Meshram</h5>
                <p className="jobRole">Head of Technical Team</p>
              </div>
            </div>
            <div>
              <p>
                <b>Hi, I'm Aayush</b>, Our esports fan engagement platform have
                been evolving innovatively, fostering an immersive gaming
                community. Our growth transforming gaming experiences globally.
              </p>
              <div>
                <a
                  href="https://www.instagram.com/itzme_aayush05/"
                  target="blank"
                  className="button"
                >
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/aayush-meshram-b70420258/"
                  target="blank"
                  className="button"
                >
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Community