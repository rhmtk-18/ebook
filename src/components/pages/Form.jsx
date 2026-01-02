import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
function Form() {
    const [searchParams, setSearchParams] = useSearchParams();
    let [name, setName] = useState("")
    let [lastname, setLastname] = useState("")
    let [streetname, setStreetname] = useState("")
    let [postalcode, setPostalcode] = useState("")
    let [state, setState] = useState("")
    let [number, setNumber] = useState("")
    let [city, setCity] = useState("")
    let [country, setCountry] = useState("")
    let [floor, setFloor] = useState("")



    let totalAmount = searchParams.get("price")


    // fetch("http://localhost:4000/api/form", {
    //     method: "post",
    //     body: JSON.stringify({ name, lastname, streetname, postalcode, state, number, city, country, floor }),
    //     headers: {
    //         "Content-Type": "application/json",
    //     },

    // })
    //     .then((res) => {
    //         return res.json();
    //     })
    //     .then((data) => {

    //         alert(data.msg);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });


    const handlesubmit = async (e) => {
        e.preventDefault()

        let userId = localStorage.getItem("userid")
        if (userId) {
            try {
                const res = await axios.post(
                    "http://localhost:4000/api/orders/checkout",
                    {
                        userId,
                        address: { name, lastname, streetname, postalcode, state, number, city, country, floor },
                        totalAmount,
                    }
                );
                if (res.data.success) {
                    const options = {
                        Key: "rzp_test_99IwqPHWTFKkXS",
                        amount: totalAmount * 100,
                        currency: "INR",
                        name: "e-book",
                        description: " Order Payment ",
                        handler: async function (response) {
                            try {
                                const paymentRes = await fetch(
                                    `http://localhost:4000/api/orders/${res.data.order._id}`,
                                    {
                                        method: "PUT",
                                        headers: { "Content-Type": "application/json" },
                                        body: JSON.stringify({
                                            paymentId: response.razorpay_payment_id,
                                            paymentStatus: "Paid",
                                        })
                                    }
                                );
                                if (paymentRes.ok) {

                                    alert("payment Successfull!");

                                } else {
                                    alert("Payment captured but failed to update order.");
                                }
                            } catch (error) {
                                alert("Something went wrong while updating payment.");
                                console.error(error);
                            }
                        },
                        prefill: {
                            name: "admin",
                            email: "user@example.com",
                            contact: "99999999"
                        },
                        theme: {
                            color: "#3399cc",
                        },
                    };
                    const rzp = new window.Razorpay(options);
                    rzp.open();
                }
                else {
                    alert("Failed to create order. Try again.");

                }
            } catch (error) {
                console.log(error);
            }
        } else {
            alert("Plz login your acc!");
        }
    };

    


    return (
        <>
            <form onSubmit={handlesubmit} >
                <div className="container pb-5 pt-5">
                    <div className="row">
                        <h2>Name</h2>
                        <div className="col-md-6">
                            <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Name" className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <input value={lastname} onChange={(e) => { setLastname(e.target.value) }} type="text" placeholder="Last Name" className="form-control" />
                        </div>
                    </div>



                    <div className="row">
                        <h2>Address</h2>
                        <div className="col-md-4">
                            <input value={streetname} onChange={(e) => { setStreetname(e.target.value) }} type="text" placeholder="Street Name" className="form-control" />
                        </div>
                        <div className="col-md-4">
                            <input value={number} minLength={10} onChange={(e) => { setNumber(e.target.value) }} type="number" placeholder="Number" className="form-control" />
                        </div>
                        <div className="col-md-4">
                            <input value={floor} onChange={(e) => { setFloor(e.target.value) }} type="text" placeholder="Floor,Unit,......." className="form-control" />
                        </div>
                    </div>




                    <div className="row">
                        <div className="col-md-6 pt-3">
                            <input value={postalcode} onChange={(e) => { setPostalcode(e.target.value) }} type="text" placeholder="Postal Code" className="form-control" />
                        </div>
                        <div className="col-md-6 pt-3">
                            <input value={city} onChange={(e) => { setCity(e.target.value) }} type="text" placeholder="City" className="form-control" />
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-6 pt-3">
                            <input value={state} onChange={(e) => { setState(e.target.value) }} type="text" placeholder="State" className="form-control" />
                        </div>

                        <div className="col-md-6 pt-3">
                            <input value={country} onChange={(e) => { setCountry(e.target.value) }} type="text" placeholder="Country" className="form-control" />
                        </div>
                    </div>

                    {/* <div className="row">
                        <h2>Payment</h2>
                        <div>
                            <input type="radio" name="pay" id="" /> COD
                        </div>
                        <div>
                            <input type="radio" name="pay" id="" /> Online
                        </div>

                    </div> */}
                    <div className=" text-center mb-5  pt-5">
                        <button className=" ogp bg-primary text-light border  rounded b fw-bold ">Submit</button>
                    </div>
                </div>


            </form>

        </>
    )
}
export default Form