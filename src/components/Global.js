import React, {useState, useEffect} from "react"
import axios from "axios";

function Global() {
    const [data, setData] = useState(0)

    useEffect(() => {

        function getData() {
            axios.get('https://api.covid19api.com/summary')
                .then(response => {
                    setData(response.data.Global);
                    console.log("Updated")
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
        <div className="summary">
            <h1>World Summary</h1>
            <div className="newconfirmed">
                <h2>New Cases</h2>
                <div className="box">
                    <h3>{data.NewConfirmed}</h3>
                </div>
            </div>
            <div className="totalconfirmed">
                <h2>Total Cases</h2>
                <div className="box">
                    <h3>{data.TotalConfirmed}</h3>
                </div>
            </div>
            <div className="newdeaths">
                <h2>New Deaths</h2>
                <div className="box">
                    <h3>{data.NewDeaths}</h3>
                </div>
            </div>
            <div className="totaldeaths">
                <h2>Total Deaths</h2>
                <div className="box">
                    <h3>{data.TotalDeaths}</h3>
                </div>
            </div>
            <div className="newrecovered">
                <h2>New Recovered</h2>
                <div className="box">
                    <h3>{data.NewRecovered}</h3>
                </div>
            </div>
            <div className="totalrecovered">
                <h2>Total Recovered</h2>
                <div className="box" style={{marginBottom: "20px"}}>
                    <h3>{data.TotalRecovered}</h3>
                </div>
            </div>
        </div>
    )
}

export default Global