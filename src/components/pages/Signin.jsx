import { useState , useContext } from "react"

import { authContext } from "../../context/AuthContextProvider"
import { BACKEND_API } from "../../backendapi"
function Signin() {
 let {setIsLogin} =   useContext(authContext)
    let [email, getEmail] = useState("")

    let [password, getPassword] = useState("")

    function signIn(e) {
        e.preventDefault()
        fetch(`${BACKEND_API}/api/signin`, {
            method: "post",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                return res.json();
            })
            .then(  (data) => {
                localStorage.setItem("userid"  , data.userid)
                
                alert(data.msg);
                setIsLogin(true)
            })
            .catch((error) => {
                console.log(error);
            });

    }
    return (
        <>
            <div className="d-flex justify-content-center">
                <form onSubmit={signIn}>
                    <h1 className=" mt-5  mb-2">Welcome Back!</h1>
                    <h6>Signin To Access Your Data</h6>
                    <div>
                        <label htmlFor="" className="mt-4">Email</label>
                        <input value={email} onChange={(a) => { getEmail(a.target.value) }} className="form-control" type="text" />
                    </div>
                    <div>
                        <label htmlFor="" className="">Password</label>
                        <input className="form-control" value={password} onChange={(a) => { getPassword(a.target.value) }} type="text" />
                    </div>
                    <div>
                        <button className="my-3 btn btn-primary" >Signin</button>
                    </div>

                </form >
            </div>
        </>
    )
}
export default Signin