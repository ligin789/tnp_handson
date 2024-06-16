import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../assets/style/product.css'
import Lottie from "lottie-react";
import NoData from "../assets/noData.json";
import FilterIcon from '../assets/images/filter.png'

function Products() {
  const [data, setData] = useState([]);
  const [dataCopy, setDataCopy] = useState([]);
  const [selectedCars, setSelectedCars] = useState([]);


  const navigate = useNavigate();


  //fetch products details
  useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((response) => {
        let responseData = response.data;
        setData(responseData.TeslaProducts.Cars);
        setDataCopy(responseData.TeslaProducts.Cars)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // function to navigate to detatils page
  let handleClick = (props) => {
    navigate("/productsDetails", { state: { name: props } });
  };
  let searchList = (event) => {
    let value = event.target.value

    //check the value is empty or not
    if (value !== "") {
      const result = dataCopy?.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
      setData(result)
    }
    else {
      setData(dataCopy)
    }

  }

  //filter functianlty function

  const handleCheckboxChange = (name) => {
    if (selectedCars.includes(name)) {
      setSelectedCars(selectedCars.filter(car => car !== name));
    } else {
      setSelectedCars([...selectedCars, name]);
    }
  }

  //do filter 
  const doFilterFunction = () => {
    if (selectedCars.length > 0) {
      const filteredArray = dataCopy.filter(item => selectedCars.includes(item.name));
      setData(filteredArray)
    }

  }

  //clear filter

  const clearFilter = () => {
    setSelectedCars([])
    setData(dataCopy)

  }
  return (
    <div>
      {/*Tab header*/}
      <section className="container">
        <div className="section-wrap col-10 mx-auto text-center page-section-for-scroll position-relative">
          <div id="whyteslaSection"></div>
          <hr className="colored mx-auto" />
          <h3 className="mt-n2 mb-n2 section-title">Car Models</h3>
          <hr className="colored mx-auto invertedHr" />
        </div>
        <div className="input-group mb-2 col d-flex justify-content-center">
          <input
            type="text"
            className="form-control searchBox"

            placeholder="Search Car"
            onChange={searchList}
          />
          <a data-toggle="modal" data-target="#exampleModalCenter" > <img src={FilterIcon} className="img-fluid mx-2 mt-1" style={{ maxHeight: "29px" }} /></a>
        </div>
        {data.length > 0 ?
          <>

            <div className="row">
              {data.map((item, index) => {
                return (
                  <div
                    className="col d-flex justify-content-center my-2"
                    key={index}
                  >
                    <div
                      className="card"
                      style={{ width: "18rem" }}
                      onClick={() => handleClick(item)}
                    >
                      <img
                        className="card-img-top"
                        src={item.image}
                        height={160}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <p className="card-text">{item.name}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div> </>
          :
          <div className="col-12 d-flex justify-content-center">
            <div> <Lottie
              animationData={NoData}
              height={200}
              width={100}
              loop={true}
              style={{ maxHeight: 500, maxWidth: 500 }}
            /></div>
          </div>
        }
        <div className="modal fade" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Select Option</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {
                  dataCopy.map((item, key) => {
                    return (
                      <div className="form-check flex-row d-flex justify-content-between mx-5" key={key}>
                        <input className="form-check-input" name="mobileConnector" type="checkbox" checked={selectedCars.includes(item.name)} value="" onChange={() => handleCheckboxChange(item.name)} />
                        <label className="form-check-label" >
                          {item.name}
                        </label>


                      </div>

                    )
                  })
                }
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={clearFilter}>Clear</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={doFilterFunction} >Done</button>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Products;
