import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../assets/style/product.css'

function Products() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();


  //fetch products details
  useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((response) => {
        let responseData = response.data;
        setData(responseData);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  // function to navigate to detatils page
  let handleClick = (props) => {
    navigate("/productsDetails", { state: { name: props } });
  };
  let searchList=(event)=>
    {
      let value=event.target.value
      //checking whethere search value is empty
      // if(value!=="")
      //   {
      //     const result=data?.TeslaProducts?.Cars.filter(item=>
      //       {
      //         item.name.includes(result)
      //       }
      //       // setData(result)
      //     )
      //   }
      
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
        <div className="input-group mb-3 col-lg-11 col-sm-6 ">
          <input
            type="text"
            className="form-control searchBox"
            placeholder="Search Car"
            onChange={searchList}
          />
        </div>
        <div className="row">
          {data?.TeslaProducts?.Cars.map((item, index) => {
            return (
              <div
                className="col-sm-12 col-md-6 col-lg-4 mb-4 mx-sm-auto carListingDiv"
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
        </div>
      </section>
    </div>
  );
}

export default Products;
