import React from "react";
import "../css/mainnav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const MegaMenu = () => {
    return (
        <div className="banner-area">
            <div className="container"></div>
            <div className="row ">
                <div className="col-12">
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                        {/* <a class="navbar-brand" href="#">Navbar</a> */}

                        <button
                            class="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbar"
                            aria-controls="navbars"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbar">
                            <li class="nav-item dropdown menu-area">
                                <a
                                    class="nav-link dropdown-toggle "
                                    href="#"
                                    id="mega-one"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    SEO & SALES CONVERSION
                                </a>
                                <div
                                    class="dropdown-menu mega-area"
                                    aria-labelledby="mega-one"
                                >
                                    <div className="row">
                                        <div className="col-sm-6 col-lg-4">
                                            <h2 className="item-header">
                                                ORGANIC SEARCH PRICING
                                            </h2>

                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                {" "}
                                                SEO Services
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                E-commerce SEO
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Local SEO Services
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                SEO Audit
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Link Building Services
                                            </a>
                                        </div>
                                        <div className="col-sm-6 col-lg-4">
                                            <h2 className="item-header">
                                                PAID MARKETING PRICING
                                            </h2>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                PPC Management
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                E-commerce PPC Services
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Display Ads Management
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Local Search Ads Management{" "}
                                            </a>
                                        </div>
                                        <div className="col-sm-6 col-lg-4">
                                            <h2 className="item-header">
                                                MARKETPLACE PRICING
                                            </h2>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Amazon SEO & Product
                                                Optimization
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Amazon Advertising Management
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Amazon Stores & Marketplace
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Facebook Marketplace for
                                                Business
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Shopify optimization services
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Shopify Advertising Management
                                            </a>
                                        </div>
                                        {/* <div className="col-sm-6 col-lg-3">
                                                <p>
                                                    <span className="badge badge-secondary">WebDesign</span>
                                                    <span className="badge badge-secondary">Marketing</span>
                                                    <span className="badge badge-secondary">Graphics Design</span>
                                                    
                                                </p>

                                            </div> */}
                                    </div>
                                </div>
                            </li>

                            {/*SOCIAL & CREATIVE CONTENT */}
                            <li class="nav-item dropdown menu-area">
                                <a
                                    class="nav-link dropdown-toggle "
                                    href="#"
                                    id="mega-two"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    SOCIAL & CREATIVE CONTENT
                                </a>
                                <div
                                    class="dropdown-menu mega-area"
                                    aria-labelledby="mega-two"
                                >
                                    <div className="row">
                                        <div className="col-sm-6 col-lg-4">
                                            <h2 className="item-header">
                                                SOCIAL MEDIA PRICING
                                            </h2>

                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                {" "}
                                                Social Media Management Services{" "}
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Social Media Design
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Social Media Advertising
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Enterprise Social Advertising
                                                Services
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                eCommerce Social Advertising
                                                Services
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Youtube Advertising Services{" "}
                                            </a>
                                        </div>
                                        <div className="col-sm-6 col-lg-4">
                                            <h2 className="item-header">
                                                WEB CONTENT PRICING
                                            </h2>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Website SEO Copywriting
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Content Marketing Services
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Personalized Web Content
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Web Video Production Services
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Product Photography Services
                                            </a>
                                        </div>
                                        <div className="col-sm-6 col-lg-4">
                                            <h2 className="item-header">
                                                VIDEO & ANIMATION
                                            </h2>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Promo Video Production
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Infographics & Motion Graphics
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Animation Video (2D&3D)
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Character Animation
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Character Animation
                                            </a>
                                        </div>
                                        {/* <div className="col-sm-6 col-lg-3">
                                                <p>
                                                    <span className="badge badge-secondary">WebDesign</span>
                                                    <span className="badge badge-secondary">Marketing</span>
                                                    <span className="badge badge-secondary">Graphics Design</span>
                                                    
                                                </p>

                                            </div> */}
                                    </div>
                                </div>
                            </li>

                            {/* RESEARCH & OPTIMIZATION */}
                            <li class="nav-item dropdown menu-area">
                                <a
                                    class="nav-link dropdown-toggle "
                                    href="#"
                                    id="mega-three"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    RESEARCH & OPTIMIZATION
                                </a>
                                <div
                                    class="dropdown-menu mega-area"
                                    aria-labelledby="mega-three"
                                >
                                    <div className="row">
                                        <div className="col col-lg-4">
                                            <h2 className="item-header">
                                                ANALYSIS
                                            </h2>

                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                CRM ROI
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Lead Management Solution
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Custom SEO Reporting
                                            </a>
                                        </div>
                                        <div className="col-sm-5 col-lg-4">
                                            <a className="item-header">
                                                OPTIMIZATION
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Conversion Rate Optimization
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Page Speed Optimization
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            {/* DESIGN & DEVELOPMENT */}
                            <li class="nav-item dropdown menu-area">
                                <a
                                    class="nav-link dropdown-toggle "
                                    href="#"
                                    id="mega-four"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    DESIGN & DEVELOPMENT
                                </a>
                                <div
                                    class="dropdown-menu mega-area"
                                    aria-labelledby="mega-four"
                                >
                                    <div className="row">
                                        <div className="col-sm-6 col-lg-4">
                                            <h2 className="item-header">
                                                DESIGN PRICING
                                            </h2>

                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                {" "}
                                                UX Website Design
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                UX Website Redesign
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                User Experience Testing
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Landing Page Design
                                            </a>
                                        </div>
                                        <div className="col-sm-6 col-lg-4">
                                            <h2 className="item-header">
                                                DEVELOPMENT PRICING
                                            </h2>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Website Development
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                E-commerce Development
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Portfolio site
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Mobile Application
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Website Maintenance
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Content Management System
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            {/* BRANDING & BUSINESS SOLUTION */}
                            <li class="nav-item dropdown menu-area">
                                <a
                                    class="nav-link dropdown-toggle "
                                    href="#"
                                    id="mega-five"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    BRANDING & BUSINESS SOLUTION
                                </a>
                                <div
                                    class="dropdown-menu mega-area"
                                    aria-labelledby="mega-five"
                                >
                                    <div className="row">
                                        <div className="col-sm-6 col-lg-4">
                                            <h2 className="item-header">
                                                BRANDING STRATEGY
                                            </h2>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                {" "}
                                                Brand Identity
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Business Development Strategy
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Market Research
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Competitor Analysis
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Community Management
                                            </a>
                                        </div>
                                        <div className="col-sm-6 col-lg-4">
                                            <h2 className="item-header">
                                                BRAND AWARENESS
                                            </h2>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                TVC
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                OVC
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Influencer Marketing
                                            </a>
                                        </div>
                                        <div className="col-sm-6 col-lg-4">
                                            <h2 className="item-header">
                                                LEGAL DOCUMENTATION
                                            </h2>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Business Registration
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                License & Certification
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Trade Mark Application
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                Partnership Deed
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};
export default MegaMenu;
