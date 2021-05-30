import React from "react";
import "../css/main.css";

import onlinead from "./photos/online_ad.svg";
import socialMedid from "./photos/Social_media.svg";
import data from "./photos/Data.svg";
import website from "./photos/websites.svg";
import goal from "./photos/goals.svg";

function BackgComponent() {
    return (
        <div className="background">
            <div className="box">
                <div className="flex1">
                    <span className="title">Stay Top & Increase Sales </span>

                    <p className="flex-p">
                        In order to increase the visitors and sales of a
                        Website, it is important to stay on top. If you want you
                        can bring free traffic through Organic SEO, or you can
                        increase sales through paid traffic through PPC
                        Campaigns.
                    </p>
                </div>

                <div>
                    <img className="photo" src={onlinead} />
                </div>
            </div>

            <br />
            <br />
            <br />

            <div className="box2">
                <div>
                    <img className="photo2" src={socialMedid} />
                </div>

                <div className="flex2">
                    <span className="title">Engage and Entertain</span>
                    <p className="flex-q">
                        Marketing in social media is all about connecting with
                        audiences. More than 3 billion people worldwide use
                        social media regularly. This is a great opportunity to
                        grow your brand. WeTech will make your Brand unique on
                        Social Platform.
                    </p>
                </div>
            </div>

            <br />
            <br />
            <br />
            <div className="box3">
                <div className="flex1">
                    <span className="title">Get the best ROI possible </span>
                    <p className="flex-p">
                        There is a need for data to stay ahead of the
                        competition in business in today's world. The more
                        information and data you have, the more you will survive
                        in the market. WeTech Digital will help you get the
                        highest return on investment by doing research on your
                        brand and your competitors.
                    </p>
                </div>

                <div>
                    <img className="photo3" src={data} />
                </div>
            </div>
            <br />
            <br />
            <br />

            <div className="box4">
                <div>
                    <img className="photo4" src={website} />
                </div>

                <div className="flex2">
                    <span className="title">
                        For a better virtual experience
                    </span>
                    <p className="flex-q">
                        The needs of the audience are changing with the times;
                        the type of marketing is changing. To be in the best
                        position here, you have to compete to win the visitors'
                        hearts with a good quality website. Continue with WeTech
                        Digital to get an experience of the best design and
                        fastest website ever.
                    </p>
                </div>
            </div>
            <br />
            <br />
            <br />

            <div className="box5">
                <div className="flex1">
                    <span className="title">
                        Differentiate the Brand from others{" "}
                    </span>
                    <p className="flex-p">
                        Branding plays a vital role in new or old companies. To
                        give you the best from your competitors, easily solve
                        unique marketing strategies and other important issues
                        and make a different brand face with WeTech Digital.
                    </p>
                </div>

                <div>
                    <img className="photo5" src={goal} />
                </div>
            </div>
        </div>
    );
}

export default BackgComponent;
