import React from "react"
import Layout from "../components/layout"
import TodaysCards from "../components/TodaysCards"
import KPI from "../components/KPI"

const JapaneseVocab = () => (
  <Layout>
    
    <h1>Japanese Vocab</h1>
    <p>This is your dashboard:</p>

    <TodaysCards /> 
    
    <div className="kpiContainer">
        <KPI data="total cards"/> 
        <KPI data="time to next new card"/>
        <KPI data="total cards studied"/>
    </div>
    

  </Layout>
)

export default JapaneseVocab