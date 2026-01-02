import { useState } from "react"
import { BACKEND_API } from "../../backendapi"
function Signup() {
    let [name, getName] = useState("")

    let [email, getEmail] = useState("")

    let [password, getPassword] = useState("")

    function handelSign(e) {
        
        e.preventDefault()
        fetch(`${BACKEND_API}/api/signup`, {
            method: "post",
            body: JSON.stringify({ email, password  ,name}),
            headers: {
                "Content-Type": "application/json",
            },
        })
         .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                alert(data.msg);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <>
            <div className="d-flex justify-content-center">
                <form onSubmit={handelSign}>
                    <div>
                        <label htmlFor="" className="mt-4">Name</label>
                        <input value={name} onChange={(a) => { getName(a.target.value) }} className="form-control" type="text" />
                    </div>
                    <div>
                        <label htmlFor="" className="">Email</label>
                        <input value={email} onChange={(a) => { getEmail(a.target.value) }} className="form-control" type="text" />
                    </div>
                    <div>
                        <label htmlFor="" className="">Password</label>
                        <input className="form-control" value={password} onChange={(a) => { getPassword(a.target.value) }} type="text" />
                    </div>
                    <h6>Don't Have Account Signup</h6>
                    <div>
                        <button className="my-3 btn btn-primary" >Signup</button>
                    </div>
                </form >        
            </div>
        </>

    )
}
export default Signup