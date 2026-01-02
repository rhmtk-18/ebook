import React from "react"
import { useState, useEffect } from "react"
import { BACKEND_API } from "../backendapi"

function AddBlog() {
   let [title, setTitle] = useState("")
   let [poston, setPoston] = useState("")
   let [postby, setPostby] = useState("")
   let [des, setDescription] = useState("")
   let [img, setImg] = useState("")

   function handelContact(e) {
      e.preventDefault()
      fetch(`${BACKEND_API}/api/AddBlog`, {
         method: "post",
         body: JSON.stringify({ img, title, poston, postby, des }),
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

         setTitle("")
         setPoston("")
         setPostby("")
         setDescription("")
         setImg("")
   }
   async function hadnelImg(e) {
      let file = e.target.files[0];
      let formData = new FormData()
      try {
          formData.append("file", file)
      formData.append("upload_preset", "imgDemo")
      let res = await fetch("https://api.cloudinary.com/v1_1/duzirakrt/image/upload", {
         method: "post",
         body: formData
      })
      let data = await res.json()
      setImg(data.secure_url)
         
      } catch (error) {
         console.log(error);
      }
     

   }


   return (
      <>
         <div className="col-md-8 tsn m-5 pt-2">
            {title}
            <form className="">
               
               <div>
                  <label htmlFor=""> Choose File</label>""
                  <input required type="file" className="form-control" onChange={hadnelImg} />
               </div>
               <div className="p-4">
                  <label htmlFor=" ">Tittle</label>
                  <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder="" className="form-control" />
               </div>
               <div className="p-4">
                  <label htmlFor="z">Post On</label>
                  <input value={poston} onChange={(e) => { setPoston(e.target.value) }} type="date" placeholder="" className="form-control" />
               </div>
               <div className="p-4">
                  <label htmlFor="">Post By</label>
                  <input value={postby} onChange={(e) => { setPostby(e.target.value) }} type="text" placeholder="" className="form-control" />
               </div>
               <div className="p-4">
                  <label htmlFor="">Description</label>
                  <input value={des} onChange={(e) => { setDescription(e.target.value) }} type="text" placeholder="" className="form-control" />
               </div>
               <div className="p-4 text-center ">
                  <button className="btn btn-danger " onClick={handelContact}> Button</button>
               </div>
            </form>
         </div>

      </>
   )
}
export default AddBlog