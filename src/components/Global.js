import React, {useState, useEffect} from "react"
import axios from "axios";

function Global() {
    const [data, setData] = useState(0)
    const [data1, setData1] = useState(0)
    const [data2, setData2] = useState(0)
    const [data3, setData3] = useState(0)
    const [data4, setData4] = useState(0)
    const [data5, setData5] = useState(0)

    useEffect(() => {

        function getData() {
            axios.get('https://api.covid19api.com/summary')
                .then(response => {
                    setData(response.data.Global.NewConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    setData1(response.data.Global.TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    setData2(response.data.Global.NewDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    setData3(response.data.Global.TotalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    setData4(response.data.Global.NewRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    setData5(response.data.Global.TotalRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    console.log("Global Summary Updated")
                })
                .catch(console.error);
        }

        getData()

        const intervalId = setInterval(() => {
            getData()
        }, 60 * 1000);

        return () => clearInterval(intervalId);

    }, [])

    /*function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }*/

    return (
        <div className="row">
            <div className="summary">
                <h1>World Cases</h1>
                <div className="newconfirmed">
                    <h2>New Cases</h2>
                    <div className="box">
                        <h3>{data}</h3>
                    </div>
                </div>
                <div className="totalconfirmed">
                    <h2>Total Cases</h2>
                    <div className="box">
                        <h3>{data1}</h3>
                    </div>
                </div>
                <div className="newdeaths">
                    <h2>New Deaths</h2>
                    <div className="box">
                        <h3>{data2}</h3>
                    </div>
                </div>
                <div className="totaldeaths">
                    <h2>Total Deaths</h2>
                    <div className="box">
                        <h3>{data3}</h3>
                    </div>
                </div>
                <div className="newrecovered">
                    <h2>New Recovered</h2>
                    <div className="box">
                        <h3>{data4}</h3>
                    </div>
                </div>
                <div className="totalrecovered">
                    <h2>Total Recovered</h2>
                    <div className="box" style={{marginBottom: "20px"}}>
                        <h3>{data5}</h3>
                    </div>
                </div>
            </div>
            <div className="summary">
                <h1>World Vaccines</h1>
                <div className="newconfirmed">
                    <h2>Doses Given</h2>
                    <div className="box">
                        <h3>{data}</h3>
                    </div>
                </div>
                <div className="totalconfirmed">
                    <h2>New Doses Given</h2>
                    <div className="box">
                        <h3>{data1}</h3>
                    </div>
                </div>
                <div className="newdeaths">
                    <h2>People Fully Vaccinated</h2>
                    <div className="box">
                        <h3>{data2}</h3>
                    </div>
                </div>
                <div className="totaldeaths" style={{marginBottom: "20px"}}>
                    <h2>% of People Fully Vaccinated</h2>
                    <div className="box">
                        <h3>{data3}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Global