import { withWidth } from "@material-ui/core";
import React from "react";
import {} from "reactstrap";
import "../css/footer.css";

const Footer = () => {
    return (
        <div>
            <footer class="site-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-md-3 center">
                            <h6>Services</h6>
                           
                            <ul class="footer-links">
                                <li>
                                    <a href="">Digital Marketing Services</a>
                                </li>
                                <li>
                                    <a href="">SEO Services</a>
                                </li>
                                <li>
                                    <a href="">PPC Services</a>
                                </li>
                                <li>
                                    <a href="">Web Design Services</a>
                                </li>
                                <li>
                                    <a href="">Social Media Services</a>
                                </li>
                                <li>
                                    <a href="">Digital Advertising Services</a>
                                </li>
                                <li>
                                    <a href="">Content Marketing Services</a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>KNOWLEDge BASE</h6>
                
                            <ul class="footer-links">
                                <li>
                                    <a href="">Internet Marketing</a>
                                </li>
                                <li>
                                    <a href="">Content Marketing</a>
                                </li>
                                <li>
                                    <a href="">Social Media</a>
                                </li>
                                <li>
                                    <a href="">Web Design</a>
                                </li>
                                <li>
                                    <a href="">SEO</a>
                                </li>
                                <li>
                                    <a href="">PPC</a>
                                </li>
                                <li>
                                    <a href="">Amazon</a>
                                </li>
                            </ul>
                            <br />
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>Company</h6>
                            <ul class="footer-links">
                                <li>
                                    <a href="">SEO Agency</a>
                                </li>
                                <li>
                                    <a href="">PPC Agency</a>
                                </li>
                                <li>
                                    <a href="">Content Marketing Agency</a>
                                </li>
                                <li>
                                    <a href="">Digital Marketing Agency</a>
                                </li>
                                <li>
                                    <a href="">Internet Marketing Agency</a>
                                </li>
                                <li>
                                    <a href="">Locations</a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-xs-6 col-md-2">
                            <h6>resources</h6>
                            <ul class="footer-links">
                                <li>
                                    <a href="">About Us</a>
                                </li>
                                <li>
                                    <a href="">Contact Us</a>
                                </li>
                                <li>
                                    <a href="">SEO Checker</a>
                                </li>
                                <li>
                                    <a href="">Tools</a>
                                </li>
                                <li>
                                    <a href="">Marketing Guides</a>
                                </li>
                                <li>
                                    <a href="">Careers</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-6 col-xs-12">
                            <p class="copyright-text">
                                Copyright &copy; 2021 All Rights Reserved by
                                <a href="#"> WeTechDigital</a>.
                            </p>
                        </div>

                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <ul class="social-icons">
                                <li>
                                    <a
                                        class="facebook"
                                        href="https://www.facebook.com/WeTechDigitalGlobal"
                                    >
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="twitter"
                                        href="https://twitter.com/WeTech_Digital"
                                    >
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="instagram"
                                        href="https://www.instagram.com/wetechdigitalglobal/"
                                    >
                                        <i class="fa fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="linkedin"
                                        href="https://www.linkedin.com/company/wetechdigitalglobal"
                                    >
                                        <i class="fa fa-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
