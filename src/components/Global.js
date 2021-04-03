import React, {useState, useEffect} from "react"
import axios from "axios";


function Global() {
    const [newConfirmed, setNewConfirmed] = useState()
    const [totalConfirmed, setTotalConfirmed] = useState()
    const [newDeaths, setNewDeaths] = useState()
    const [totalDeaths, setTotalDeaths] = useState()
    const [newRecovered, setNewRecovered] = useState()
    const [totalRecovered, setTotalRecovered] = useState()

    useEffect(() => {
        axios.get('https://api.covid19api.com/summary')
            .then(response => {
                setNewConfirmed(response.data["Global"]["NewConfirmed"]);
                setTotalConfirmed(response.data["Global"]["TotalConfirmed"]);
                setNewDeaths(response.data["Global"]["NewDeaths"]);
                setTotalDeaths(response.data["Global"]["TotalDeaths"]);
                setNewRecovered(response.data["Global"]["NewRecovered"]);
                setTotalRecovered(response.data["Global"]["TotalRecovered"]);
            })
            .catch(console.error);
    }, [])

    return (
        <div className="summary">
            <h1>World Summary</h1>
            <div className="newconfirmed">
                <h2>New Confirmed Cases</h2>
                <div className="box">
                    <h3>{newConfirmed}</h3>
                </div>
            </div>
            <div className="totalconfirmed">
                <h2>Total Confirmed Cases</h2>
                <div className="box">
                    <h3>{totalConfirmed}</h3>
                </div>
            </div>
            <div className="newdeaths">
                <h2>New Deaths</h2>
                <div className="box">
                    <h3>{newDeaths}</h3>
                </div>
            </div>
            <div className="totaldeaths">
                <h2>Total Deaths</h2>
                <div className="box">
                    <h3>{totalDeaths}</h3>
                </div>
            </div>
            <div className="newrecovered">
                <h2>New Recovered</h2>
                <div className="box">
                    <h3>{newRecovered}</h3>
                </div>
            </div>
            <div className="totalrecovered">
                <h2>Total Recovered</h2>
                <div className="box">
                    <h3>{totalRecovered}</h3>
                </div>
            </div>
        </div>
    )
}

export default Global