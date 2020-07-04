import React from "react";

class OurStory extends React.Component {
    render() {
        return (
            <section id="ourstory" class="pt-3 bg-light text-black">
                <div class="container">
                    <h />
                    <div class="row pt-3">
                        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 panel-left text-center">
                            <img
                                src={require("./../../assets/img/roshni.png")}
                                alt=""
                                class="img-fluid rounded-circle mb-2"
                            />
                        </div>
                        <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12 panel-right">
                            <h1 class="text-center">About Roshni</h1>
                            <p>
                                Mobile web traffic overtook desktop one in 2016
                                and will only grow in 2020, and that's why it's
                                important to create websites that look good on
                                all devices. No special actions required, all
                                sites you make with the Builder are
                                mobile-friendly. Mobile web traffic overtook
                                desktop one in 2016 and will only grow in 2020,
                                and that's why it's important to create websites
                                that look good on all devices. No special
                                actions required, all sites you make with the
                                Builder are mobile-friendly. Mobile web traffic
                                overtook desktop one in 2016 and will only grow
                                in 2020, and that's why it's important to create
                                websites that look good on all devices.
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 panel-right">
                            <p>
                                Mobile web traffic overtook desktop one in 2016
                                and will only grow in 2020, and that's why it's
                                important to create websites that look good on
                                all devices. No special actions required, all
                                sites you make with the Builder are
                                mobile-friendly. Mobile web traffic overtook
                                desktop one in 2016 and will only grow in 2020,
                                and that's why it's important to create websites
                                that look good on all devices. No special
                                actions required, all sites you make with the
                                Builder are mobile-friendly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OurStory;
