import React from 'react'
import PrimarySearchAppBar from "./components/navbar/Navigation";
import TeamCard from "./components/card/TeamCard";
import DashboardCard from "./components/card/DashboardCard";

function App () {
  return (
      <div>
        <PrimarySearchAppBar/>
        <br/>
        <TeamCard/>
        <DashboardCard/>
      </div>


  )
}

export default App
