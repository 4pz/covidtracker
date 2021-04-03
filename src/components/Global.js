import React, {useState, useEffect} from "react"
import axios from "axios";


function Global() {
    const [data, setData] = useState()

    function getNewConfirmed() {
        const options = {
            method: 'GET',
            url: 'https://api.covid19api.com/summary'
        };

        axios.request(options).then(function (response) {
            let res = response.data["Global"]["NewConfirmed"];
            setData(res)
        }).catch(function (error) {
            console.error(error);
        });
    }

    useEffect(()=>{
        getNewConfirmed()
    },[])

    /*function getTotalConfirmed() {
        const options = {
            method: 'GET',
            url: 'https://api.covid19api.com/summary'
        };

        axios.request(options).then(function (response) {
            let res = response.data["Global"]["TotalConfirmed"];
            setData(res)
        }).catch(function (error) {
            console.error(error);
        });
    }

    useEffect(()=>{
        getTotalConfirmed()
    },[])*/

    return (
        <div className="summary">
            <h1>World Summary</h1>
            <div className="newconfirmed">
                <h2>New Confirmed Cases</h2>
                <div className="box">
                    <h3>{data}</h3>
                </div>
            </div>
            <div className="totalconfirmed">
                <h2>Total Confirmed Cases</h2>
                <div className="box">
                    <h3>{data}</h3>
                </div>
            </div>
            <div className="newdeaths">
                <h2>New Deaths</h2>
                <div className="box">
                    <h3>1024</h3>
                </div>
            </div>
            <div className="totaldeaths">
                <h2>Total Deaths</h2>
                <div className="box">
                    <h3>1024</h3>
                </div>
            </div>
            <div className="newrecovered">
                <h2>New Recovered</h2>
                <div className="box">
                    <h3>1024</h3>
                </div>
            </div>
            <div className="totalrecovered">
                <h2>Total Recovered</h2>
                <div className="box">
                    <h3>1024</h3>
                </div>
            </div>
        </div>
    )
}

export default Global