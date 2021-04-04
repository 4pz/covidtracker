import React from "react"
import Header from "./components/Header"
import "./style.css"
import Global from "./components/Global"
import TopCountries from "./components/TopCountries";

function App() {
  return (
      <div>
        <Header />
        <Global />
        <TopCountries />
      </div>
  )
}

export default App