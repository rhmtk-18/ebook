
import React, { useState } from "react";
import { useEffect } from "react";
import { BACKEND_API } from "../backendapi";
function ViewBlog() {
    let [allContact, setAllContact] = useState([])

    
    async function getContact() {
        try {
            let res = await fetch(`${BACKEND_API}/api/allblog`);
            let data = await res.json();
            
            setAllContact(data.allblog);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getContact()
    }, [])

    async function deleteContact(id) {

        let ans = confirm("Data delete ?")
        if (ans) {
            try {
                let res = await fetch(`${BACKEND_API}/api/deleteBlog/${id}`, {
                    method: "delete"
                })
                let data =  await res.json()
                
                alert(data.msg)
                getContact()
            } catch (error) {
                console.log(error)
            }

        }

    }
    return <div className="col-md-8 p-5  ">
        <table className="table border">
            <tr className="border lmao ">
                <th> Sr</th>
                <th> File</th>
                <th> Tittle</th>
                <th>Post On</th>
                <th>Post By</th>
                <th>Description</th>
                <th>Action</th>
            </tr>
            {
                allContact.map((c, idx) => {
                    return (<tr className="border instal ">
                        <td>{idx + 1} </td>
                        <td><img src={c.img} width={100} alt="" /></td>
                        <td>{c.title}</td>
                        <td>{c.poston}</td>
                        <td>{c.postby}</td>
                        <td>{c.des}</td>
                        <td><button onClick={() => { deleteContact(c._id) }} className="ROU">delete</button></td>
                    </tr>
                    )
                })
            }
        </table>
    </div>
}
export default ViewBlog