import { useState } from "react"
import { useNavigate } from "react-router-dom";
function Login() {
     let [Username, getUsername] = useState("")
    let [Password, getPassword] = useState("")
    let navi =  useNavigate()

    function handelContact() {
        console.log(Username, Password);

        if (Username === "admin" && Password === "1234") {
            alert("Admin Login !")
            navi("/admin")
        }else{
            alert("password or username is wrong ! ")
        }
    }
    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{height: "80vh"}}>
                <div className="border p-5  bg-primary ">

                <div>
                <input value={Username} onChange={(f) => { getUsername(f.target.value) }} type="text" placeholder="Username" className="form-control " />
                </div>
                <div className="mt-4">
                <input value={Password} onChange={(f) => { getPassword(f.target.value) }} type="password" placeholder="Password" className="form-control " />
                </div>
                <div>
                <button className="ogp bg-primary text-light border  rounded b fw-bold" onClick={handelContact}>Adminlogin</button>
                </div>

                </div>
            </div>
            <div>
                
            </div>
        </>
    )
}
export default Login