import React, { useEffect } from "react";
import "../assets/style/style.css";
import FirstImg from "../assets/images/heroSectionImg.png";
import Heroimg from '../assets/images/cars/Roadster/heroImg.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CarouselImgFirst from "../assets/images/cars/Model3Performance/Model-3-Performance_52.jpg";
import CarouselImgSecond from "../assets/images/cars/Cybertruck/Cybertruck_22.jpg";
import CarouselImgThird from "../assets/images/cars/Roadster/0x0-Roadster_01.jpg";
import whySectionFirst from "../assets/images/cars/ModelS/ModelS_72.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ChargerImg from '../assets/images/charging.jpg'

function LandingPage() {
  // Initialize AOS
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  return (
    <div>

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
            <div className="col-md-6 text-center" data-aos="fade-down-right">
              <img
                src={Heroimg}
                alt="Car"
                className="img-fluid pl-5 pt-5 mt-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/*  Gallery section starts*/}
      <section className="hero-section2 ">
        <div className="container">
          <div className="section-wrap col-10 mx-auto text-center page-section-for-scroll position-relative">
            <div id="whyteslaSection"></div>
            <hr className="colored mx-auto" />
            <h3 className="mt-n2 mb-n2 section-title">Gallary </h3>
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
      {/*Gallery section end*/}

      {/*why section start*/}
      <section className="hero-section2">
        <div className="section-wrap col-10 mx-auto text-center page-section-for-scroll position-relative">
          <div id="whyteslaSection"></div>
          <hr className="colored mx-auto" />
          <h3 className="mt-n2 mb-n2 section-title">Why Tesla ?</h3>
          <hr className="colored mx-auto invertedHr" />
        </div>
        <div className="container mr-4 noMarginRight">
          {/* row 1 start */}
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="custom-card-title ml-3 my-4">
                Tackling Climate Change
              </div>
              <div className=" mr-5 noMarginRight">
                <div className="col-10 col-sm-12 text-justify">
                  At Tesla, we imagine a world where you can power everything with renewable energy. Our team is dedicated to solving problems that will have the most meaningful impact on emissions.

                </div>
                <a
                  type="button"
                  className="shadow9 col-5 my-2 custom-button text-center mt-4"
                  href='https://www.tesla.com/'
                >
                  Know More
                </a>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="img-fluid rounded" >
                <img
                  src={FirstImg}
                  className="img-fluid rounded"
                  alt="whySectionSecond"
                  width={450}
                  height={300}
                />
              </div>
            </div>
          </div>
          {/* row 1 end */}
          {/* row 2 start */}

          <div className="row my-5">
            <div className="col-md-6 col-sm-12 order-1 order-lg-1 order-sm-2 order-md-2">
              <div className="img-fluid rounded">
                <img
                  src={whySectionFirst}
                  className="img-fluid rounded"
                  alt="whySectionSecond"
                  width={450}
                  height={300}
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12 order-lg-2 order-sm-1 order-md-1">
              <div className="custom-card-title ml-3 my-4">
                Unlock the Future of Driving
              </div>
              <div className=" mr-5 noMarginRight">
                <div className="col-10 text-justify">
                  From the Sleek and Aerodynamic Design to the Seamless Integration of Advanced Technology, Tesla's Electric Vehicles Represent a Groundbreaking Leap in Sustainable Mobility. Experience the Thrill of Uncompromising Performance, Unmatched Efficiency, and Unparalleled Driving Dynamics that Redefine the
                </div>

                <a
                  type="button"
                  className="shadow9 col-5 my-2 custom-button text-center mt-4"
                  href='https://www.tesla.com/'
                >
                  Know More
                </a>

              </div>
            </div>

          </div>
          {/* row 2 end */}
          {/* row 3 start */}

          <div className="row my-5">
            <div className="col-md-6 col-sm-12">
              <div className="custom-card-title ml-3 my-4">
                Charging the Future
              </div>
              <div className=" mr-5 noMarginRight">
                <div className="col-10 text-justify">
                  Discover the Electrifying Future of Transportation with Tesla. Our Cutting-Edge Electric Vehicles Combine Exhilarating Performance, Advanced Technology, and Timeless Design to Redefine the Driving Experience
                </div>
                <a
                  type="button"
                  className="shadow9 col-5 my-2 custom-button text-center mt-4"
                  href='https://www.tesla.com/'
                >
                  Know More
                </a>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="img-fluid rounded">
                <img
                  src={ChargerImg}
                  className="img-fluid rounded"
                  alt="whySectionSecond"
                  width={450}
                  height={300}
                />
              </div>
            </div>
          </div>
          {/* row 3 end */}

        </div>

      </section>
      {/*why section end*/}
    </div>
  );
}

export default LandingPage;
