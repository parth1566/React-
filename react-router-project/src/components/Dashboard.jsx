import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="page dashboard-page">
      <h1>📊 Dashboard Page</h1>
      <p>Your stats and data at a glance.</p>
      <Outlet/>
    </div>
  )
}

export default Dashboard