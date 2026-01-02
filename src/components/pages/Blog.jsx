import { useState, useEffect } from "react";
function Blog() {

    let [allBlog, setAllBlog] = useState([])

    async function getBlog() {
        try {
            let res = await fetch("http://localhost:4000/api/allblog");
            let data = await res.json();
            console.log(data)
            setAllBlog(data.allblog);
        } catch (error) {
            console.log(error); 
        }
    }
    useEffect(() => {
        getBlog()
    }, [])
    return (
        <>
            <div className="container ">
                <div className="row ">
                    {
                        allBlog.map((item) => {
                            return (
                                <div className="col-4">
                                    <div class="card" >
                                        <img src={item.img} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">{item.title}</h5>
                                            <p class="card-text">{item.des}</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Blog