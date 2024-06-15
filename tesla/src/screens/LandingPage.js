import React,{useEffect} from "react";
import "../assets/style.css";
import FirstImg from "../assets/heroSectionImg.png";
import Heroimg from '../assets/images/cars/Roadster/heroImg.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CarouselImgFirst from "../assets/images/cars/Model3Performance/Model-3-Performance_52.jpg";
import CarouselImgSecond from "../assets/images/cars/Cybertruck/Cybertruck_22.jpg";
import CarouselImgThird from "../assets/images/cars/Roadster/0x0-Roadster_01.jpg";
import whySectionFirst from "../assets/images/cars/ModelS/ModelS_72.jpg";
import whySectionSecond from "../assets/images/cars/Roadster/0x0-Roadster_08.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

function LandingPage() {
  // Initialize AOS
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  return (
    <div>
      {/* <Header /> */}

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="heading-part">
                Discover the Future of <br />
                Mobility with
              </div>
              <div className="hero-subtext">
                Unlock the Electrifying Experience: Tesla's Cutting-Edge
                Technology Redefines the Driving Landscape.
              </div>
              <div className="hero-buttons">
                <a
                  type="button"
                  className="shadow9 col-5 mt-5 custom-button text-center "
                  href='https://www.tesla.com/'
                >
                  Know More
                </a>
              </div>
            </div>
            <div className="col-md-6 text-center"  data-aos="fade-down-right">
              <img
                src={Heroimg}
                alt="Car"
                className="img-fluid pl-5 pt-5 mt-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* short paragraph section */}
      <section className="hero-section2 ">
        <div className="container">
          <div className="section-wrap col-10 mx-auto text-center page-section-for-scroll position-relative">
            <div id="whyteslaSection"></div>
            <hr className="colored mx-auto" />
            <h3 className="mt-n2 mb-n2 section-title">Why Tesla ?</h3>
            <hr className="colored mx-auto invertedHr" />
          </div>
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            swipeable={true}
          >
            <div>
              <img src={CarouselImgFirst} />
              {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
              <img src={CarouselImgSecond} />
            </div>
            <div className="courosel-container">
              <img src={CarouselImgThird} />
            </div>
          </Carousel>
          {/* <div className="row align-items-center">
            <div className="col-md-12 text-center">
              <div className="hero-text">Unleash the Power of Electric</div>
              <div className="hero-subtext2">
                Elevate Your Driving Experience: Tesla's Unparalleled
                Performance and efficiency.
              </div>
              <div className="hero-buttons">
                <button className="btn btn-danger">Experience It</button>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      {/*About section */}

      <section className="hero-section2">
        <div className="section-wrap col-10 mx-auto text-center page-section-for-scroll position-relative">
          <div id="whyteslaSection"></div>
          <hr className="colored mx-auto" />
          <h3 className="mt-n2 mb-n2 section-title">Why Tesla ?</h3>
          <hr className="colored mx-auto invertedHr" />
        </div>
        <div className="custom-card-wrap position-relative">
          <div id="PaywithBiometrics"></div>
          <div className="custom-card-title-group">
            <div className="custom-card-title ml-5 mt-5">
            Tackling Climate Change

            </div>
          </div>
          <div className="custom-card-image-wrap rounded"  data-aos="fade-right">
            <img
              src={whySectionSecond}
              className="img-fluid rounded"
              alt="pay_with_bio_vector"
              width={500}
              height={300}
            />
          </div>
          <div className="custom-card-description-wrap">
            <div className="custom-card-description text-justify">
            At Tesla, we imagine a world where you can power everything with renewable energy. Our team is dedicated to solving problems that will have the most meaningful impact on emissions.


              <br />
              <a href="#">
                {" "}
                <a
                  type="button"
                  className="shadow9 col-5 mt-5 custom-button text-center "
                  href='https://www.tesla.com/'
                >
                  Know More
                </a>
              </a>
            </div>
          </div>
        </div>

        <div className="custom-card-wrap-two position-relative">
          <div id="PaywithBiometrics"></div>
          <div className="custom-card-title-group">
            <div className="custom-card-title ml-5 mt-5">
              Powering the Future
            </div>
          </div>
          <div className="custom-card-image-wrap-two"  data-aos="fade-left">
            <img
              src={whySectionFirst}
              className="img-fluid rounded"
              alt="teslacar"
              width={500}
              height={300}
            />
          </div>
          <div className="custom-card-description-wrap">
            <div className="custom-card-description text-justify">
              Elevate your Driving Experience with Tesla's Cutting-Edge Electric
              Vechiles.Combining Unrivaled Performance and Efficiency.
              <br />
              <a href="#">
                {" "}
                <a
                  type="button"
                  className="shadow9 col-5 mt-5 custom-button text-center "
                  href='https://www.tesla.com/'
                >
                  Know More
                </a>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
