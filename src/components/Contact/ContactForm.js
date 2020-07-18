import React from "react";
import axios from "axios";

class ContactForm extends React.Component {
  state = {
    email: "",
    name: "",
    brief: "",
  };

  handleSubmit(event) {
    event.preventDefault();
    const { email, brief, name } = this.state;
    const data = { email, brief, name };
    if (email && brief && name) {
      axios
        .post("http://35.184.242.240:1337/contact", data)
        .then(({ data }) => {
          console.log(data);
          this.setState({
            email: "",
            name: "",
            brief: "",
          });
        })
        .catch((err) => {
          console.error(err.response);
          alert(
            "Seems like there was an error while submitting the form. Please try again."
          );
        });
    } else {
      alert("Please fill up all data before submitting");
    }
  }

  render() {
    return (
      <section id="contact">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-10">
              <h3 className="text-center display-4">Contact Form</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="fullname">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullname"
                    aria-describedby="emailHelp"
                    value={this.state.name}
                    onChange={(event) =>
                      this.setState({
                        name: event.target.value,
                      })
                    }
                    placeholder
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    value={this.state.email}
                    onChange={(event) =>
                      this.setState({
                        email: event.target.value,
                      })
                    }
                    placeholder
                  />
                </div>
                {/* Radio Button Section */}
                <div className="py-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      defaultValue="option1"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios1"
                    >
                      Donate
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios2"
                      defaultValue="option2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios2"
                    >
                      Volunteer
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="brief">Brief</label>
                  <textarea
                    className="form-control rounded-0"
                    id="brief"
                    rows={8}
                    value={this.state.brief}
                    onChange={(event) =>
                      this.setState({
                        brief: event.target.value,
                      })
                    }
                    placeholder
                    defaultValue={""}
                  />
                </div>
                <button
                  type="submit"
                  id="contact-submit"
                  className="btn btn-primary"
                  onClick={this.handleSubmit.bind(this)}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactForm;
