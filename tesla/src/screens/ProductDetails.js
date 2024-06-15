import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import imageMapping from "../assets/lib/imageMapper";
// import * from '../assets/images/cars/' as imageMapping2;
import CarouselImgFirst from "../assets/images/cars/Model3Performance/Model-3-Performance_52.jpg";
import { useLocation } from "react-router-dom";

function ProductDetails() {
  const [selectedCar, setSelectedCar] = useState();
  const [saleStatus, setSaleStatus] = useState(false);
  const props = useLocation();
  let arra = [1, 2, 4];

  useEffect(() => {
   
    setSelectedCar(props.state);
    if (props.state.name.saleStatus) {
      setSaleStatus(true);
    } else {
      setSaleStatus(false);
    }
  }, []);
  return (
    <div className="container-fluid">
      <div className="row m-3 mx-5">
        <div
          className="col-sm-4 col-lg-6 mt-5"
          style={{ backgroundColor: "white" }}
        >
          <Carousel
            showArrows={false}
            showStatus={false}
            showThumbs={saleStatus}
            autoPlay={false}
            infiniteLoop={false}
            swipeable={false}
            showIndicators={false}
          >
            {selectedCar?.name?.color.map((color) => {
              return (
                <div className="courosel-container">
                  <img src={color.Link} alt={color.colorName} />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div
          className="col-sm-12 col-lg-6 mt-3"
          style={{ backgroundColor: "white" }}
        >
          <div className="text-center mt-5 mr-5 pr-5">
            <h1 className="mb-5">{selectedCar?.name?.name}</h1>
          </div>
          <div class="container mt-5">
            <div class="row mt-5">
              <div class="col-sm ">
                <h3>{selectedCar?.name?.range}</h3> <h6>range (EPA est.)</h6>
              </div>
              <div class="col-sm">
                <h3>{selectedCar?.name?.top_speed}</h3>
                <h6>top speed</h6>
              </div>
              <div class="col-sm">
                <h3>{selectedCar?.name?.range}</h3>
                <h6>range (EPA est.)</h6>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col text-center mt-3">
              <div>
                <div>
                 
                </div>
                <div>
                  
                </div>
              </div>
              <div>
                <div>
                 
                </div>
                <div>
                 
                </div>
              </div>
            </div>
            <div className="col mt-3">
              <div>
                <div>
                  <h2>{selectedCar?.name?.power}</h2>
                </div>
                <div>
                  <h6>power</h6>
                </div>
              </div>
              <div>
                <div>
                  <h2>{selectedCar?.name?.reachSpeed}</h2>
                </div>
                <div>
                  <h6>0-60 mph</h6>
                </div>
              </div>
            </div>
          </div> */}

          <div className="mt-5 mx-4">
            <p className="text-justify" style={{ fontSize: 18 }}>
              {selectedCar?.name?.desc}
            </p>
          </div>
          <div className="hero-buttons text-center">
            <button type="button" className="shadow9 col-5 mt-5 custom-button">
              Know More
            </button>
            {saleStatus ? (
              <button
                type="button"
                className="shadow9 col-5  m-5 mt-5 custom-button"
                data-toggle="modal" data-target="#exampleModalCenter"
              >
                Order Now
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
        {/* galery section */}
        <div className="section-wrap col-10 mx-auto text-center page-section-for-scroll position-relative">
          <div id="whyteslaSection"></div>
          <hr className="colored mx-auto" />
          <h3 className="mt-n2 mb-n2 section-title">Our Gallery</h3>
          <hr className="colored mx-auto invertedHr" />
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-8 lc-block border-3 border border-light">
              <img
                className="h-100 img-fluid"
                style={{ objectFit: "cover" }}
                src={CarouselImgFirst}
                sizes="(max-width: 1080px) 100vw, 1080px"
                width="1080"
                height="768"
                alt="Photo by Randall  Ruiz"
                loading="lazy"
              />
            </div>
            <div className="col-4 lc-block border-3 border border-light">
              <img
                className="h-100 img-fluid"
                style={{ objectFit: "cover" }}
                src={CarouselImgFirst}
                sizes="(max-width: 1080px) 100vw, 1080px"
                width="1080"
                height=""
                alt="Photo by Dylan Shaw"
                loading="lazy"
              />
            </div>
          </div>
          <div className="row g-0 ">
            <div className="col-4 lc-block border-3 border border-light">
              <img
                className="h-100 img-fluid"
                style={{ objectFit: "cover" }}
                src={CarouselImgFirst}
                sizes="(max-width: 1080px) 100vw, 1080px"
                width="1080"
                height=""
                alt="Photo by Lightscape"
                loading="lazy"
              />
            </div>
            <div className="col-8 lc-block border-3 border border-light">
              <img
                className="h-100 img-fluid"
                style={{ objectFit: "cover" }}
                src={CarouselImgFirst}
                sizes="(max-width: 1080px) 100vw, 1080px"
                width="1080"
                height="768"
                alt="Photo by Hitoshi Namura"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Book Now
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal end */}
    </div>
  );
}

export default ProductDetails;
