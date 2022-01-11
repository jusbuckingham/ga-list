import React, { Component } from "react";
import "./HomePage.css";
import SaleContainer from "./SaleContainer";
import JobContainer from "./JobContainer";
import { Link } from "react-router-dom";


class HomePage extends Component {
    render() {
        return (
            <div>
                <div id="background">
                    <br />
                </div>

                <div id="container1">
                    <div id="background" className="Column1">
                    </div>

                    <div id="mainbar" className="Column2">

                        <h1>ga-list</h1>
                        <Link to="/jobpostform">
                        <h3>create a posting</h3></Link>
                        <h3>my account</h3>

                        <div id="searchbar">
                            <input type="text" placeholder="Search GA-List" />
                        </div>
                        <div id="map">
                            <h2>Map will go here</h2>
                        </div>
                        <br />

                        <h4>about ga-list</h4>
                        <h4>terms of use</h4>
                        <h4>privacy policy</h4>
                        <h4>avoid scams</h4>

                    </div>



                    <div id="column3">
                        <div id="mainbar">
                            <h2>Los Angeles/ Southern California/ USA</h2>
                        </div>
                        <br />
                        <div id="container2">
                            <div id="container2item">
                                <div id="mainbar">
                                    <Link to="/sales">
                                        <h2>For Sale</h2>
                                    </Link></div>
                                <div>
                                    <SaleContainer />
                                </div>
                            </div>

                            <div id="container2item">
                                <div id="mainbar"><Link to="/jobs">
                                    <h2>Jobs</h2>
                                </Link></div>
                            <div>
                                <JobContainer />
                            </div>
                        </div>

                        <div id="container2item">
                            <h2 id="mainbar">Forum</h2>
                            <div>
                                <h4>ForumCONTAINER</h4>
                                <ul>
                                    <li>listing........</li>
                                    <li>listing........</li>
                                    <li>listing........</li>
                                    <li>listing........</li>
                                    <li>listing........</li>
                                    <li>listing........</li>
                                    <li>listing........</li>
                                    <li>listing........</li>
                                    <li>listing........</li>
                                    <li>listing........</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="background" className="column4">

                </div>

            </div>

            </div >
        );
    }
}

export default HomePage;