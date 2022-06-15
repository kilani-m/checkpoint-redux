import React from 'react'
import AddTask from '../component/AddTask/AddTask'
import ListTask from '../component/ListTask/ListTask'

import './Home.css'


const Home = () => {
  return (
    <div className='posetion'>
      <div className='container'>
        <AddTask />
        <ListTask />
      </div>
    </div>
  )
}

export default Home