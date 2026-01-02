import React, { useState } from "react";
import { use } from "react";
import { useEffect } from "react";
function ViewPricing() {

let [data , setData] =   useState([])

async function getData() {
        try {
            let res = await fetch("http://localhost:4000/api/allpricing");
            let data = await res.json();
            console.log(data);
            
            setData(data)
           
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getData()
    } , [])
return(
    <>
        <div className="col-md-8 p-5">
            <table className="table border">
                <thead className="">
                    <tr className="">
                        <th>Sr </th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Pricing</th>
                    </tr>
                     {
                data.map((c, idx) => {
                    return (<tr>
                        <td>{idx + 1} </td>
                        <td>{c.userID.name}</td>
                        <td>{c.userID.email}</td>
                        <td> {c.price}</td>
                    </tr>
                    )
                })
            }
       
                </thead>
            </table>
        </div>

    </>
)
    
}


export default ViewPricing