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
                        <br />


                        <Link to="/jobpostform">
                            <h3>create a Job Post</h3></Link>
                        <br />
                        <Link to="/salepostform">
                            <h3>create a Sale Post</h3></Link>
                        <br />
                        <Link to="/forumpostform">
                            <h3>create a Forum Post</h3></Link>
                        <br />
                        <div id="searchbar">
                            <input type="text" placeholder="Search GA-List" />
                        </div>
                        <br />
                        <div id="map">
                            <h2>Current Location</h2>
                        </div>
                        <br />

                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">about ga-list</a>
                        <br />
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">terms of use</a>
                        <br />
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">privacy policy</a>
                        <br />
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">avoid scams</a>

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
                                    <h4></h4>
                                    <ul id="container2">
                                        <li><a href="https://ga-list.herokuapp.com/sales">cars</a></li>
                                        <li><a href="https://ga-list.herokuapp.com/sales">bike</a></li>
                                        <li><a href="https://ga-list.herokuapp.com/sales">cell phones</a></li>
                                        <li><a href="https://ga-list.herokuapp.com/sales">computer parts</a></li>
                                        <li><a href="https://ga-list.herokuapp.com/sales">furniture</a></li>
                                        <li><a href="https://ga-list.herokuapp.com/sales">general</a></li>
                                        <li><a href="https://ga-list.herokuapp.com/sales">materials</a></li>
                                        <li><a href="https://ga-list.herokuapp.com/sales">jewelry</a></li>
                                        <li><a href="https://ga-list.herokuapp.com/sales">music</a></li>
                                        <li><a href="https://ga-list.herokuapp.com/sales">sporting</a></li>
                                        <li><a href="https://ga-list.herokuapp.com/sales">household</a></li>
                                        <li><a href="https://ga-list.herokuapp.com/sales">video</a></li>
                                        <li><a href="https://ga-list.herokuapp.com/sales">toys</a></li>
                                        <li><a href="https://ga-list.herokuapp.com/sales">garage sale</a></li>
                                        <li><a href="https://ga-list.herokuapp.com/sales">electronics</a></li>
                                        <li><a href="https://ga-list.herokuapp.com/sales">tickets</a></li>
                                        <li><a href="https://ga-list.herokuapp.com/sales">farm</a></li>


                                    </ul>
                                    {/* <JobContainer /> */}
                                </div>
                                <div>

                                </div>
                            </div>

                            <div id="container2item">
                                <h2 id="mainbar">Forum</h2>
                                <div>
                                    <h4></h4>
                                    <ul id="container2">
                                        <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">arts</a></li>
                                        <li><a href="https://forums.craigslist.org/?areaID=1&forumID=42">activities</a></li>
                                        <li><a href="https://forums.craigslist.org/?areaID=1&forumID=20">politics</a></li>
                                        <li><a href="https://forums.craigslist.org/?areaID=1&forumID=73">general</a></li>
                                        <li><a href="https://forums.craigslist.org/?areaID=1&forumID=32">sport</a></li>
                                        <li><a href="https://forums.craigslist.org/?areaID=1&forumID=6">housing</a></li>
                                        <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">help</a></li>
                                        <li><a href="https://forums.craigslist.org/?areaID=1&forumID=76">missed connections</a></li>
                                        <li><a href="https://forums.craigslist.org/?areaID=1&forumID=26">pets</a></li>
                                        <li><a href="https://forums.craigslist.org/?areaID=1&forumID=85">gigs</a></li>

                                    </ul>
                                </div>
                            </div>


                        </div>
                        <div id="container2item">
                            <div id="mainbar"><Link to="/jobs">
                                <h2>Jobs</h2>
                            </Link></div>
                            <div>
                                <h4></h4>
                                <ul id="container2">
                                    <li><a href="https://ga-list.herokuapp.com/salesjobs">accounting</a></li>
                                    <li><a href="https://ga-list.herokuapp.com/salesjobs">admin</a></li>
                                    <li><a href="https://ga-list.herokuapp.com/salesjobs">software</a></li>
                                    <li><a href="https://ga-list.herokuapp.com/salesjobs">food</a></li>
                                    <li><a href="https://ga-list.herokuapp.com/salesjobs">media</a></li>
                                    <li><a href="https://ga-list.herokuapp.com/salesjobs">transport</a></li>
                                    <li><a href="https://ga-list.herokuapp.com/salesjobs">security</a></li>
                                    <li><a href="https://ga-list.herokuapp.com/salesjobs">real estate</a></li>
                                    <li><a href="https://ga-list.herokuapp.com/salesjobs">education</a></li>
                                    <li><a href="https://ga-list.herokuapp.com/salesjobs">government</a></li>
                                    <li><a href="https://ga-list.herokuapp.com/salesjobs">skilled trade</a></li>
                                    <li><a href="https://ga-list.herokuapp.com/salesjobs">nonprofit sector</a></li>
                                    <li><a href="https://ga-list.herokuapp.com/salesjobs">web</a></li>
                                    <li><a href="https://ga-list.herokuapp.com/salesjobs">arch</a></li>
                                    <li><a href="https://ga-list.herokuapp.com/salesjobs">general labor</a></li>
                                    <li><a href="https://ga-list.herokuapp.com/salesjobs">wholesale</a></li>
                                    <li><a href="https://ga-list.herokuapp.com/salesjobs">fitness</a></li>

                                </ul>
                                {/* <JobContainer /> */}
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