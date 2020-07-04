import React from "react";
import axios from "axios";

class Contact extends React.Component {
    state = {
        email: "",
        address: "",
        phone: "",
    };

    componentDidMount() {
        axios
            .get("http://35.184.242.240:1337/contact")
            .then(({ data }) => {
                const { email, address, phone } = data;
                this.setState({ email, address, phone });
            })
            .catch((err) => {
                console.error(err);
            });
    }

    render() {
        return (
            <section id="home-icons" className="py-5 bg-alabaster">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-4 text-center">
                            <i className="fas fa-envelope fa-3x mb-2"></i>
                            <h3>Email</h3>
                            <p>{this.state.email}</p>
                        </div>
                        <div className="col-md-4 mb-4 text-center">
                            <i className="fas fa-address-book fa-3x mb-2"></i>
                            <h3>Address</h3>
                            <p>{this.state.address}</p>
                        </div>
                        <div className="col-md-4 mb-4 text-center">
                            <i className="fas fa-phone fa-3x mb-2"></i>
                            <h3>Phone</h3>
                            <p>{this.state.phone}</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
