import React from "react";
import axios from "axios";

class Testimonial extends React.Component {
  state = {
    testimonials: [],
    active: 0,
  };

  componentDidMount() {
    axios
      .get("http://35.184.242.240:1337/messages")
      .then(({ data }) => {
        const root = "http://35.184.242.240:1337";
        const testimonials = data.map((testObj) => {
          const { name, desc, message } = testObj;
          const imgSrc = root + testObj.dpimg.formats.thumbnail.url;
          return {
            name,
            desc,
            message,
            imgSrc,
          };
        });

        this.setState({ testimonials });
      })
      .catch(console.error);
  }

  render() {
    return (
        
            <div className="testimonialcontainer row container-fluid text-center">
               <div className="col-12 mt-5 text-center"><h3>Testimonials</h3></div>
            {this.state.testimonials.map((testimonial, index) => (
              <div className="testimonialcard col-sm-12 col-md-4 col-lg-4 container mt-3 mb-3">
                <div className="row">
                  <div className="col-12 mt-2 mb-2 text-center">
                    <img src={testimonial.imgSrc} alt="Avatar" style={{width: '40%'}} />
                  </div>
                  <div className="container col-12" >
                    <p className="textimonial-text text-center" >{testimonial.message}</p>
                    <h4 className="font-weight-bold text-center">
                    {testimonial.name}
                    </h4>
                    <h6 className="font-weight-bold my-3 text-center">
                    {testimonial.desc}
                    </h6>
                  </div>
                </div>
              </div>
                
            ))}
            </div>
          
      
    );
  }
}

export default Testimonial;
