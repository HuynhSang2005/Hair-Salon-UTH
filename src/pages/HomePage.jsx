import React from 'react'
import Home from "../components/Home";


const HomePage = ({services, staffMembers}) => {

  return (
    <Home
    services={services}  
    staffMembers={staffMembers}
    />
  )
}

export default HomePage;