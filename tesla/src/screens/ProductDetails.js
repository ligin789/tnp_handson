import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import imageMapping from "../assets/lib/imageMapper";
// import * from '../assets/images/cars/' as imageMapping2;
import CarouselImgFirst from "../assets/images/cars/Model3Performance/Model-3-Performance_52.jpg";
import { useLocation } from "react-router-dom";

function ProductDetails() {
  let [itemPriceList, setItemPriceList] = useState(
    {
      wallConnector: false,
      mobileConnector: false,
      sunShade: false, roofRack: false, allWheel: false, plaid: false, selfDrive: false, warranty: false
    }
  )
  const [selectedCar, setSelectedCar] = useState();
  const [saleStatus, setSaleStatus] = useState(false);
  const props = useLocation();
  const [price, setPrice] = useState();
  let arra = [1, 2, 4];

  useEffect(() => {
    setPrice(parseFloat(props.state?.name?.price) || 0)
    setSelectedCar(props.state);
    if (props.state.name.saleStatus) {
      setSaleStatus(true);
    } else {
      setSaleStatus(false);
    }
  }, []);
  //handle checkbox change and update price
  const updatePrice = (event,price) => {
    const { name, checked } = event.target;
    setItemPriceList(prevState => ({ ...prevState, [name]: checked }));

    // Update the total price based on whether the checkbox is checked or unchecked
    const priceChange = checked ? price : -price;
    setPrice(prevTotal => prevTotal + priceChange);
  }
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
          <div className="container mt-5">
            <div className="row mt-5">
              <div className="col-sm ">
                <h3>{selectedCar?.name?.range}</h3> <h6>range (EPA est.)</h6>
              </div>
              <div className="col-sm">
                <h3>{selectedCar?.name?.top_speed}</h3>
                <h6>top speed</h6>
              </div>
              <div className="col-sm">
                <h3>{selectedCar?.name?.range}</h3>
                <h6>range (EPA est.)</h6>
              </div>
            </div>
          </div>
          

          <div className="mt-5 mx-4">
            <p className="text-justify" style={{ fontSize: 18 }}>
              {selectedCar?.name?.desc}
            </p>
          </div>
          <div className="hero-buttons text-center">
            
            {saleStatus ? (
              <button
                type="button"
                className="shadow9 col-5  m-5 mt-5 custom-button"
                data-toggle="modal" data-target=".bd-example-modal-lg"
              >
                Order Now
              </button>
            ) : (
              <button type="button" className="shadow9 col-5 mt-5 custom-button">
              Coming Soon
            </button>
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
      <div className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title col-12 text-center" id="exampleModalCenterTitle">Customize Order</h5>

            </div>
            <div className="modal-body">
              <div>
                <h2 className="text-center my-4">Base Price :${price}</h2>

              </div>
              <div className="accordion" id="accordionExample">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                      <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Charger Type
                      </button>
                    </h2>
                  </div>

                  <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div className="card-body">
                      <div className="form-check flex-row d-flex justify-content-between mx-5 ">
                        <input className="form-check-input" onChange={(e) => updatePrice(e, 350)} type="checkbox" checked={itemPriceList.wallConnector} name="wallConnector" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                          Wall Connector
                        </label>
                        <label className="form-check-label" for="flexCheckDefault">
                          $350
                        </label>
                      </div>
                      <div className="form-check flex-row d-flex justify-content-between mx-5">
                        <input className="form-check-input" name="mobileConnector" onChange={(e) => updatePrice(e, 250)} type="checkbox" checked={itemPriceList.mobileConnector} value="" id="flexCheckChecked"  />
                        <label className="form-check-label" for="flexCheckChecked" >
                          Mobile Connector
                        </label>
                        <label className="form-check-label" for="flexCheckChecked">
                          $250
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h2 className="mb-0">
                      <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accessories
                      </button>
                    </h2>
                  </div>
                  <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div className="card-body">
                      <div className="form-check flex-row d-flex justify-content-between mx-5" >
                        <input className="form-check-input " type="checkbox" onChange={(e) => updatePrice(e, 100)} value="" checked={itemPriceList.sunShade} id="flexCheckDefault" name="sunShade" />
                        <label className="form-check-label" for="flexCheckDefault">
                          Sun Shade
                        </label>
                        <label className="form-check-label" for="flexCheckDefault">
                          $100
                        </label>
                      </div>
                      <div className="form-check flex-row d-flex justify-content-between mx-5" >
                        <input className="form-check-input " onChange={(e) => updatePrice(e, 450)} type="checkbox" value="" checked={itemPriceList.roofRack} id="flexCheckDefault" name="roofRack" />
                        <label className="form-check-label" for="flexCheckDefault">
                          Roof Rack
                        </label>
                        <label className="form-check-label" for="flexCheckDefault">
                          $450
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h2 className="mb-0">
                      <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Drive Mode
                      </button>
                    </h2>
                  </div>
                  <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div className="card-body">
                      <div className="form-check flex-row d-flex justify-content-between mx-5" >
                        <input className="form-check-input " onChange={(e) => updatePrice(e, 8000)} type="checkbox" value="" id="flexCheckDefault" checked={itemPriceList.allWheel} name="allWheel" />
                        <label className="form-check-label" for="flexCheckDefault">
                          All Wheel Drive
                        </label>
                        <label className="form-check-label" for="flexCheckDefault">
                          $8000
                        </label>
                      </div> <div className="form-check flex-row d-flex justify-content-between mx-5" >
                        <input className="form-check-input " type="checkbox" value="" onChange={(e) => updatePrice(e, 8000)} checked={itemPriceList.plaid} id="flexCheckDefault" name="plaid" />
                        <label className="form-check-label" for="flexCheckDefault">
                          S-Plaid
                        </label>
                        <label className="form-check-label" for="flexCheckDefault">
                          $8000
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h2 className="mb-0">
                      <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Extra Addon
                      </button>
                    </h2>
                  </div>
                  <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div className="card-body">
                      <div className="form-check flex-row d-flex justify-content-between mx-5" >
                        <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" checked={itemPriceList.selfDrive} name="selfDrive" onChange={(e) => updatePrice(e, 8000)} />
                        <label className="form-check-label" for="flexCheckDefault">
                          Full Self Drive Capabilty
                        </label>
                        <label className="form-check-label" for="flexCheckDefault">
                          $8000
                        </label>
                      </div><div className="form-check flex-row d-flex justify-content-between mx-5" >
                        <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" checked={itemPriceList.warranty} name="warranty" onChange={(e) => updatePrice(e, 5000)} />
                        <label className="form-check-label" for="flexCheckDefault">
                          Extended Warranty (3 year)
                        </label>
                        <label className="form-check-label" for="flexCheckDefault">
                          $5000
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer text-center ">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Book Now</button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal end */}
    </div >
  );
}

export default ProductDetails;
