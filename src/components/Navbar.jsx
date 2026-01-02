import { Link } from "react-router-dom"

import { authContext } from "../context/AuthContextProvider"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
function Navbar() {
    let { isLogin , setIslogin } = useContext(authContext)
    let navItems = ["home", "About", "Chapter", "Testimonial", "Pricing", "Contact" , "You", ]
let navigate =  useNavigate()
    return (
        <div className="bg-light">
            <div className="container position-sticky top-0">
                <nav class="navbar navbar-expand-lg navbar-light ">
                    <div class="container-fluid">
                        <a class="navbar-brand  " href="#">BookHunt</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mx-auto mb/[-2 mb-lg-0">
                                {
                                    navItems.map((item) => {
                                        return (
                                            <li class="nav-item mr-4">
                                                <Link class="nav-link" to={item}>{item}</Link>
                                            </li>
                                        )
                                    })
                                }
                                <li class="nav-item mr-4">
                                    <Link class="nav-link" to={"login"}>Admin Login</Link>
                                </li>

                                {
                                    isLogin == true ? (
                                        <>
                                            <li class="nav-item mr-4">
                                                <Link class="nav-link" onClick={()=>{
                                                    localStorage.removeItem("userid")
                                                    setIslogin(false)
                                                    navigate("/")
                                                }}> Logout</Link>
                                            </li>
                                        </>
                                    ) :(
                                        <>
                                        <li class="nav-item mr-4">
                                    <Link class="nav-link" to={"Signup"}>Signup</Link>
                                </li>

                                <li class="nav-item mr-4">
                                    <Link class="nav-link" to={"Signin"}>Signin</Link>
                                </li>

                                        </>
                                    )
                                    }
                                


                                <li class="nav-item mr-4">
                                    <span class="nav-link">< i class="fa-brands fa-facebook"></i></span>
                                </li>

                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-pinterest"></i>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}




export default Navbar
// import { Link } from "react-router-dom"
// function Navbar(){
//     return(
//         <>
//         <li ><Link to={"home"}>Home</Link></li>
//         <li><Link to={"about"}>About</Link></li>
//         <li><Link to={"chapter"}>Chapters</Link></li>
//         <li> <Link to={"testimonial"}>Testimonial</Link></li>
//         <li><Link to={">Author"}>Author</Link></li>
//         <li><Link to={"Pricing<"}>Pricing</Link></li>
//         <li><Link to={"Contacts"}>Contacts</Link></li>
//         </>
//     )
// }
// export default Navbar