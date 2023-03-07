import React from "react";
import aboutImg from "../../assets/img/images/h2_about_img.png";
import shape01 from "../../assets/img/images/about_shape01.png";
import shape02 from "../../assets/img/images/about_shape02.png";

const About = () => {
  return (
    <section id="about" className="about-area-two">
      <div className="container custom-container-four">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="about-img-two text-center wow fadeInLeft"
              data-wow-delay=".2s"
            >
              <img src={aboutImg} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="about-content-two wow fadeInRight"
              data-wow-delay=".2s"
            >
              <div className="section-title section-title-two mb-15">
                <span className="sub-title">ABOUT Logic AI</span>
                <h2 className="title">
                  Bigtech Theme is the best for your ICO
                </h2>
              </div>
              <p>
              Welcome to Logic AI, where cutting-edge artificial intelligence technology meets the world of NFTs.
              Our revolutionary platform allows you to create unique, one-of-a-kind digital art pieces using the power of AI,
              and easily mint them as NFTs for sale on our marketplace. Whether you're an artist, collector, or simply looking
              to explore the exciting world of NFTs, Logic AI has everything you need to bring your digital creations to life.
              </p>
              <div className="about-list">
                <ul>
                  <li>
                    <i className="fas fa-check"></i>Mouthwatering leading how
                    real formula also
                  </li>
                  <li>
                    <i className="fas fa-check"></i>Locked-in have can mountain
                    thought
                  </li>
                </ul>
              </div>

              <a
                href={aboutImg}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-two"
              >
                Download Document
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="about-shape-wrap">
        <img src={shape01} alt="" className="shape-one" />
        <img src={shape02} alt="" className="shape-two rotateme" />
      </div>
    </section>
  );
};

export default About;
