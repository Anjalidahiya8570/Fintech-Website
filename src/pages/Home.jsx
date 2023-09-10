import React from 'react';
import Carouselhome from './components/Carouselhome';
import Achievements from './components/Achievements/Achievements';
import Projects from './components/Projects/Projects';

const Home = () => {
  return (
    <>
    <Carouselhome/>
    <div className='main-container'>
      <Achievements/>
      <Projects/>
    </div>
    </>
  )
}

export default Home;