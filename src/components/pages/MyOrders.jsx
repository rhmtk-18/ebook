import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
function MyOrders() {

    let [order, setOrder] = useState([])

    async function getContact() {
        let userId = localStorage.getItem("userid")
        try {
            let res = await fetch(`http://localhost:4000/api/my-order/${userId}`)
            let data = await res.json();

            setOrder(data);
        } catch (error) {
            console.log(error);
        }
    }



    useEffect(() => {
        getContact()
    }, [])
    console.log(order);

    return (
        <>
            {
                order.map((val, index) => {
                    return (
                        <div className="container my-4 p-4 border rounded bg-light shadow-sm" key={index}>
                            <h2 className="text-primary mb-3">Address</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <p><strong>Name:</strong> {val.address.name}</p>
                                    <p><strong>Number:</strong> {val.address.number}</p>
                                    <p><strong>Postal Code:</strong> {val.address.postalcode}</p>
                                    <p><strong>State:</strong> {val.address.state}</p>
                                    <p><strong>paymentId:</strong> {val.paymentId}</p>
                                    <p><strong>paymentStatus:</strong> {val.paymentStatus}</p>
                                    <p><strong>userId:</strong> {val.userId}</p>

                                </div>
                                <div className="col-md-6">
                                    <p><strong>totalAmount:</strong> {val.totalAmount}</p>
                                    <p><strong>Street Name:</strong> {val.address.streetname}</p>
                                    <p><strong>City:</strong> {val.address.city}</p>
                                    <p><strong>Country:</strong> {val.address.country}</p>
                                    <p><strong>Floor:</strong> {val.address.floor}</p>
                                    <p><strong>Last Name:</strong> {val.address.lastname}</p>
                                    <p><strong>Price:</strong> {val.totalAmount}</p>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
            {/* {
                order.map((val) => {
                    return (
                        <div>
                            <h1>adderss</h1>
                            <p> name  {val.address.name}</p>
                            <p> number {val.address.number}</p>
                            <p>{val.address.postalcode}</p>
                            <p>{val.address.state}</p>
                            <p>{val.address.streetname}</p>
                            <p>{val.address.city}</p>
                            <p>{val.address.country}</p>
                            <p>{val.address.floor}</p>
                            <p>{val.address.lastname}</p>

                        </div>
                    )
                })
            } */}
        </>
    )




}
export default MyOrders

