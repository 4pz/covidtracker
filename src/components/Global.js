import React from "react"

function Global() {
    return (
        <div className="summary">
            <h1>World Summary</h1>
            <div className="newsconfirmed">
                <h2>New Confirmed Cases</h2>
                <div className="box">
                    <h3>1024</h3>
                </div>
            </div>
            <div className="totalconfirmed">
                <h2>Total Confirmed Cases</h2>
                <div className="box">
                    <h3>1024</h3>
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