import React from "react";
import "../components/css/home.css";
import Header from "../components/layout/header";

const Main = () => {
    return (
        <div>
            <Header />
            <div className="backG">
                <div className="box">
                    <div className="paragraph">
                        <h2>A Trusted Digital Marketing Agency</h2>
                        <h2>To Help Your Business riches the ultimate goal</h2>
                        <p>
                            Super charge Your Business and lead the market with
                            our skilled team support
                        </p>
                    </div>

                    <div className="forms">
                        <h2>Grow your business</h2>
                        <p>by partnering with WeTech Digital</p>
                        <hr className="hrline"></hr>
                        <input
                            type="text"
                            id="name"
                            placeholder="Full Name"
                        ></input>
                        <br />
                        <input
                            type="text"
                            id="name"
                            placeholder="Email Address"
                        ></input>
                        <br />
                        <input
                            type="text"
                            id="name"
                            placeholder="Phone Number"
                        ></input>
                        <br />
                        <input
                            type="text"
                            id="name"
                            placeholder="Message"
                        ></input>
                        <br />
                        <button id="name">Request a Free Consultancy</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Main;
