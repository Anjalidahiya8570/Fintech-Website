import React from 'react'
import MemberContainer from '../components/MemberContainer/MemberContainer'
import data from './membersData'

const Members = () => {
  //console.log(data);
  return (
    <div className="main-container">
      <h2 className="mhead">Members</h2>
      <h2 className="shead">Final Year</h2>
      <MemberContainer data = {data.fourthYear}/>
      <h2 className="shead">Pre-Final Year</h2>
      <MemberContainer data = {data.thirdYear}/>
      <h2 className="shead">Second Year</h2>
      <MemberContainer data = {data.secondYear}/>
      <br />
      <h2 className="mhead">Alumini</h2>
      <MemberContainer data = {data.alumni}/>
    </div>
  )
}

export default Members