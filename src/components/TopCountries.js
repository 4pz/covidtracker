import React, {useEffect, useState} from "react"
import axios from "axios";
import america from "../img/usflag.png"
import brazil from "../img/brazil.png"
import india from "../img/india.ico"
import france from "../img/france.png"
import russia from "../img/russia.png"

function TopCountries() {
    const [TotalConfirmed, setTotalConfirmed] = useState(0)
    const [TotalDeaths, setTotalDeaths] = useState(0)
    const [TotalConfirmed1, setTotalConfirmed1] = useState(0)
    const [TotalDeaths1, setTotalDeaths1] = useState(0)
    const [TotalConfirmed2, setTotalConfirmed2] = useState(0)
    const [TotalDeaths2, setTotalDeaths2] = useState(0)
    const [TotalConfirmed3, setTotalConfirmed3] = useState(0)
    const [TotalDeaths3, setTotalDeaths3] = useState(0)
    const [TotalConfirmed4, setTotalConfirmed4] = useState(0)
    const [TotalDeaths4, setTotalDeaths4] = useState(0)

    useEffect(() => {

        function getData() {
            axios.get('https://api.covid19api.com/summary')
                .then(response => {
                    //setData(response.data.Countries);
                    //setData(response.data["Countries"][181])
                    setTotalConfirmed(response.data.Countries[181].TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
                    setTotalDeaths(response.data.Countries[181].TotalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
                    setTotalConfirmed1(response.data.Countries[23].TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
                    setTotalDeaths1(response.data.Countries[23].TotalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
                    setTotalConfirmed2(response.data.Countries[76].TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
                    setTotalDeaths2(response.data.Countries[76].TotalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
                    setTotalConfirmed3(response.data.Countries[59].TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
                    setTotalDeaths3(response.data.Countries[59].TotalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
                    setTotalConfirmed4(response.data.Countries[140].TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
                    setTotalDeaths4(response.data.Countries[140].TotalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
                    console.log("Top Countries Updated")
                })
                .catch(console.error);
        }

        getData()

        const intervalId = setInterval(() => {
            getData()
        }, 60 * 1000);

        return () => clearInterval(intervalId);

    }, [])

    return (
        <div className="TopCountries">
            <h1>Top Countries by Case</h1>
            <div className="countries">
                <div className="America country-box">
                    <img className="img" src={america} alt={"america"}/>
                    <h2>1. United States</h2>
                    <h3>Cases<br/>{TotalConfirmed}</h3>
                    <h3>Deaths<br/>{TotalDeaths}</h3>
                </div>
                <div className="Brazil country-box">
                    <img className="img" src={brazil} alt={"brazil"}/>
                    <h2>2. Brazil</h2>
                    <h3>Cases<br/>{TotalConfirmed1}</h3>
                    <h3>Deaths<br/>{TotalDeaths1}</h3>
                </div>
                <div className="India country-box">
                    <img className="img" src={india} alt={"india"}/>
                    <h2>3. India</h2>
                    <h3>Cases<br/>{TotalConfirmed2}</h3>
                    <h3>Deaths<br/>{TotalDeaths2}</h3>
                </div>
                <div className="France country-box">
                    <img className="img" src={france} alt={"india"}/>
                    <h2>4. France</h2>
                    <h3>Cases<br/>{TotalConfirmed3}</h3>
                    <h3>Deaths<br/>{TotalDeaths3}</h3>
                </div>
                <div className="Russia country-box">
                    <img className="img" src={russia} alt={"india"}/>
                    <h2>5. Russia</h2>
                    <h3>Cases<br/>{TotalConfirmed4}</h3>
                    <h3>Deaths<br/>{TotalDeaths4}</h3>
                </div>
            </div>
        </div>
    )
}

export default TopCountries