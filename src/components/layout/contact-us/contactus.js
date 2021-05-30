import React from "react";
import "../../css/pages.css";
import { Link } from "react-router-dom";
import ContactUsContent from "./contactus-content";

function ContactUs() {
    return (
        <div>
            <div className="contactsMain">
                <div className="contactCard">
                    <h2 className="mainTitle">Need More Details?</h2>
                    <p className="para1">
                        Meet our Technical Expert and share your thoughts
                    </p>
                    <Link to="/contactForm">
                        <button className="btn btn-outline-warning btn1">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
            <ContactUsContent />
        </div>
    );
}

export default ContactUs;
