import { Outlet } from "react-router-dom"
import Navigate from "./Navigate";
const Layout = () => {
  return <div className="layout">
    <header className="header">header</header>
    <sidebar className="sidebar">
      <Navigate />
    </sidebar>
    <main className="main"><Outlet /></main>
    <footer className="footer">createad by Heny & Iti</footer>
  </div>
}
export default Layout