import { Outlet } from "react-router-dom"
import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar"


const Main = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    )
  }
  
  export default Main