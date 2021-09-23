import React from "react"
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import './Profile.css';
export default function Dashboard() {

  return (
    <>
    <div className="Dashboard">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </>
  )
}