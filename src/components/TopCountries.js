import React from "react"
//import axios from "axios";
import america from "../img/usflag.png"
import brazil from "../img/brazil.png"
import india from "../img/india.ico"

function TopCountries() {
    return (
        <div className="TopCountries">
            <h1>Top Countries by Case</h1>
            <div className="countries">
                <div className="America country-box">
                    <img className="img" src={america} alt={"america"}></img>
                    <h2>United States</h2>
                    <h3>Cases<br></br>{1024}</h3>
                    <h3>Deaths<br></br>{1024}</h3>
                </div>
                <div className="Brazil country-box">
                    <img className="img" src={brazil} alt={"brazil"}></img>
                    <h2>Brazil</h2>
                    <h3>Cases<br></br>{1024}</h3>
                    <h3>Deaths<br></br>{1024}</h3>
                </div>
                <div className="India country-box">
                    <img className="img" src={india} alt={"india"}></img>
                    <h2>India</h2>
                    <h3>Cases<br></br>{1024}</h3>
                    <h3>Deaths<br></br>{1024}</h3>
                </div>
            </div>
        </div>
    )
}

export default TopCountries