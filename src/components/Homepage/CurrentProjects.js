import React from "react";

class CurrentProjects extends React.Component {
  render() {
    return (
      <section id="story" className="bg-alabaster">
        <div className="container pb-2">
        <h1 class="text-primary text-center">Current Projects</h1>
          <div className="row pt-5">
            <div className="col-lg-6  col-md-6 col-12">
              <img
                src={require("./../../assets/img/POSCO_cover_watermark_1300x550_170227_1.jpg")}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-6  col-md-6 col-12">
              <h1 className="text-capitalize">Richard</h1>
              <p>
                {" "}
                Mobile web traffic overtook desktop one in 2016 and will only
                grow in 2020, and that's why it's important to create websites
                that look good on all devices. No special actions required, all
                sites you make with the Builder are mobile-friendly.
              </p>
              <button className="btn bg-primary text-white">
                Know more
              </button>{" "}
              <button className="btn bg-primary text-white ">Donate</button>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-lg-6  col-md-6 col-12 mb-5">
              <h1 className=" text-capitalize"> Lorem Ipsum</h1>
              <p>
                {" "}
                Mobile web traffic overtook desktop one in 2016 and will only
                grow in 2020, and that's why it's important to create websites
                that look good on all devices. No special actions required, all
                sites you make with the Builder are mobile-friendly.
              </p>
              <button className="btn bg-primary text-white">
                Know more
              </button>{" "}
              <button className="btn bg-primary text-white ">Donate</button>
            </div>
            <div className="col-lg-6  col-md-6 col-12">
              <img
                src={require("./../../assets/img/POSCO_cover_watermark_1300x550_170227_1.jpg")}
                className="img-fluid "
                alt=""
              />
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-lg-6  col-md-6 col-12">
              <img
                src={require("./../../assets/img/POSCO_cover_watermark_1300x550_170227_1.jpg")}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-6  col-md-6 col-12">
              <h1 className=" text-capitalize"> Lorem Ipsum</h1>
              <p>
                {" "}
                Mobile web traffic overtook desktop one in 2016 and will only
                grow in 2020, and that's why it's important to create websites
                that look good on all devices. No special actions required, all
                sites you make with the Builder are mobile-friendly.
              </p>
              <button className="btn bg-primary text-white">
                Know more
              </button>{" "}
              <button className="btn bg-primary text-white ">Donate</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CurrentProjects;
