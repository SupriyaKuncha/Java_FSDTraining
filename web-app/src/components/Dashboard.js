import React from 'react';
import { Link, Outlet } from 'react-router-dom';
 
function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="profile">Profile</Link> | <Link to="setting">Setting</Link>
      </nav>
      <Outlet />
    </div>
  );
}
 
export default Dashboard;