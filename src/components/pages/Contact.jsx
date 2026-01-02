import { useState } from "react"
import { BACKEND_API } from "../../backendapi"
function Contact() {
    let [name, getName] = useState("")
  
    let [email, getEmail] = useState("")

    let [message, getMessage] = useState("")
    
    function handelContact() {
        if (name == "") {
            return alert(" Enter name ")
        }

        fetch(`${BACKEND_API}/api/contact`, {
            method: "post",
            body: JSON.stringify({ name, email, message }),
            headers: {
                "Content-Type": "application/json",
            },

        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {

                alert(data.msg);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <div className="apj">
                <h1 className="pt-5 pb-5 fw-bold">Contact with Author</h1>
                <p className="pb-5">  This book is concerned with creating typography and is essential for professionals who regularly <br /> work for clients.      </p>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6   abcd">
                        <input value={name} onChange={(f) => { getName(f.target.value) }} type="text" placeholder="Enter Your Name" className="form-control " />
                    </div>
                    <div className="col-md-6  abcd">
                        <input value={email} onChange={(f) => { getEmail(f.target.value) }} type="text" placeholder="Enter Your Email Address" className="form-control " />
                    </div>
                    <div className="col-md-12 mt-5   abcd">
                        <  textarea value={message} onChange={(f) => { getMessage(f.target.value) }} name="" placeholder=" Your Message" id="" rows={8} className="form-control border"></textarea>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <p>* Rest assured. We will not spam at your inbox.</p>
                    <button className="ogp bg-primary text-light border  rounded b fw-bold " onClick={handelContact}>Send Message</button>
                </div>
            </div>
        </>
    )
}
export default Contact