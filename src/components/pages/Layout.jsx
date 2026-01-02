import { Outlet } from "react-router-dom"
import Navbar from "../Navbar"
import Footer from "../Footer"
function Layout() {
    return (
        <>
            <Navbar />
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}
export default Layout