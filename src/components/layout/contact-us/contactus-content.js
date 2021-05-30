import React from "react";
import "../../css/pages.css";

function ContactUsContent() {
    return (
        <div className="contactContentMain">
            <div className="container contactContentSub">
                <div className="row mediaClass">
                    <div className="col-4 left">
                        <div className="phone">
                            <div class="phoneIcon">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div className="phoneNo">
                                <h4 className="he1">Phone No.</h4>
                                <p className="p1">000000000</p>
                            </div>
                        </div>
                        <div className="mail">
                            <div class="mailIcon">
                                <i class="far fa-envelope"></i>
                            </div>
                            <div className="mailNo">
                                <h4 className="he1">Email</h4>
                                <p className="p1">some@mail</p>
                            </div>
                        </div>
                        <div className="fax">
                            <div class="faxIcon">
                                <i class="fas fa-fax"></i>
                            </div>
                            <div className="faxNo">
                                <h4 className="he1">Fax</h4>
                                <p className="p1">0000000</p>
                            </div>
                        </div>
                        <div className="locate">
                            <div class="locIcon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="locateNo">
                                <h4 className="he1">Location</h4>
                                <p className="p1">some address</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 right">
                        <div className="formHeader">
                            <h3 className="he1">Send Message</h3>
                            <p>
                                Let our Experts help you through our best
                                solutions!
                            </p>
                        </div>
                        <div className="formContent">
                            <form action="">
                                <div className="nameMail">
                                    <input
                                        id="iName"
                                        type="text"
                                        placeholder="Name"
                                    />
                                    <input
                                        id="iMail"
                                        type="text"
                                        placeholder="Email"
                                    />
                                </div>
                                <br />
                                <div className="phoneSub">
                                    <input
                                        id="iPhone"
                                        type="text"
                                        placeholder="Phone"
                                    />
                                    <input
                                        id="iSub"
                                        type="text"
                                        placeholder="Subject"
                                    />
                                </div>
                                <br />
                                <div className="msg">
                                    <input
                                        id="iMsg"
                                        type="text"
                                        placeholder="Message"
                                    />
                                </div>
                                <div className="btnSection">
                                    <button class="btnSend">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUsContent;
