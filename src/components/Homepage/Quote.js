import React from "react";

class Quotes extends React.Component {
    render() {
        return (
            <section
                id="quote"
                className="py-4 text-center bg-d-gray text-white"
            >
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="info-header">
                                <p className="lead font-monte font-size-16">
                                    "It is a privilege to serve mankind, for
                                    this is the worship of God. God is here, in
                                    all these human souls. He is the soul of
                                    living being."
                                </p>
                                <h5 className="font-lato">Swami Vivekananda</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Quotes;
