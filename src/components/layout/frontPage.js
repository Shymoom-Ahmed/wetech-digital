import "../css/frontPage.css";
import { Button } from "@material-ui/core";

const FrontPage = () => {
    return (
        <div className="main">
            <div className="header">
                <div className="paragraph">
                    <p className="p1">
                        A Trusted Digital Marketing Agency To Help Your Business
                        Reaches The Ultimate Goal
                    </p>
                    <span className="p2">
                        Super charge Your Business and lead the market with our
                        skilled team support
                    </span>
                </div>
                <div className="main-form">
                    <span className="form-header">Grow your business</span>
                    <span className="form-header-by">by partnering with</span>
                    <span className="form-header2">WeTech Digital</span>
                    <br />

                    <div className="input">
                        <input
                            type="text"
                            id="fullName"
                            placeholder="Full Name"
                            required
                        ></input>
                        <input
                            type="text"
                            id="email"
                            placeholder="Email Address"
                        ></input>
                        <input
                            type="text"
                            id="phoneNumber"
                            placeholder="Phone Number"
                        ></input>
                        <input
                            type="text"
                            id="message"
                            placeholder="Message"
                        ></input>
                    </div>

                    <Button id="btn1">Request a Free Consultancy</Button>
                </div>
            </div>
        </div>
    );
};

export default FrontPage;
