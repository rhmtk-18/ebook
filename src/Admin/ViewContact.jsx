import React, { useState } from "react";
import { useEffect } from "react";
import { BACKEND_API } from "../backendapi";
function ViewContact() {
    let [allContact, setAllContact] = useState([])
    
    async function getContact() {
        try {
            let res = await fetch(`${BACKEND_API}/api/allContact`);
            let data = await res.json();
            console.log(data)
            setAllContact(data.allContact);
        } catch (error) {
            console.log(error);
        }
    }
  


    useEffect(() => {
        getContact()
    }, [])
  
    async function deleteContact(id) {

        let ans =  confirm("Data delete ?")
        if(ans){

       
        try {
            let res = await fetch(`${BACKEND_API}/api/deleteContact/${id}`,{
                method : "delete"
            })
            let data = res.json()
            alert(data.msg)
            getContact()
        } catch (error) {
            console.log(error)
        }

         }
        
    }

    return <div className="col-md-8">
        <table className="table">
            <tr>
                <th> Sr</th>
                <th> Name</th>
                <th> Email</th>
                <th>msg</th>
                <th>Action</th>
            </tr>
            {
                allContact.map((c, idx) => {
                    return (<tr>
                        <td>{idx + 1} </td>
                        <td>{c.name}</td>
                        <td>{c.email}</td>
                        <td>{c.message}</td>
                        <td><button onClick={()=>{ deleteContact(c._id)}}>delete</button></td>
                    </tr>
                    )
                })
            }
        </table>
    </div>
}
export default ViewContact