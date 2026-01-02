import { authContext } from "../../context/AuthContextProvider"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
function Pricing() {
    let { isLogin } = useContext(authContext)
    let navigate =  useNavigate()
    async function addData(price) {

        

        if (!isLogin) {
            alert("login")
        }
        navigate(`/form?price=${price}`)

        // let userID = localStorage.getItem("userid")
        // try {
        //     let res = await fetch("http://localhost:4000/api/addPricing", {
        //         method: "post",
        //         body: JSON.stringify({ userID, price }),
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //     })
        //     .then((res) => {
        //         return res.json();
        //     })
        //     .then((data) => {

        //         alert(data.msg);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });

        //     let data = await res.json()
           

        // } catch (error) {

        // }


    }
    return (
        <>
            <div className="oggy">
                <h1 className="pt-5 pb-5">Pricing and Plans</h1>
                <p className="pb-5">This book is concerned with creating typography and is essential for professionals who regularly <br /> work for clients.</p>
            </div>
            <div className="container">
                <div className="row justify-content-center gap-3 pb-5 mb-4">
                    <div className="col-md-3 border bg-light">
                        <div className="pg pt-4 mb-5 ">
                            <p>Free Version</p>
                            <h1 className="gg"><span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-indian-rupee-icon lucide-indian-rupee"><path d="M6 3h12" /><path d="M6 8h12" /><path d="m6 13 8.5 8" /><path d="M6 13h3" /><path d="M9 13c6.667 0 6.667-10 0-10" /></svg>
                            </span>
                                0</h1>
                            <h6 className="text-primary">Full Free Chapter</h6>
                            <p className="pb-4">Get one chapter of pdf version for <br /> free busy subscribing</p>
                        </div>
                        <ul>
                            <li> 1 Free Chapter</li>
                            <li> PDF version</li>
                            <li> Free Subscripion </li>
                            <li> No hardcover </li>
                        </ul>
                        <div className=" text-center mb-5">
                            <button onClick={() => { addData(0) }} className="ogp bg-primary text-light border  rounded b fw-bold ">Get it now</button>
                        </div>
                    </div>
                    <div className="col-md-3 border bg-light">
                        <div className="pg pt-4 mb-5">
                            <p> eBook Version</p>
                            <h1 className="gg"> <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-indian-rupee-icon lucide-indian-rupee"><path d="M6 3h12" /><path d="M6 8h12" /><path d="m6 13 8.5 8" /><path d="M6 13h3" /><path d="M9 13c6.667 0 6.667-10 0-10" /></svg>
                            </span>
                                49.99 </h1>
                            <h6 className="text-primary">One time purchase</h6>
                            <p className="pb-4"> Get one chapter of pdf version for <br /> free busy subscribing</p>
                        </div>
                        <ul>
                            <li>  Ebook Version</li>
                            <li> Audio Book</li>
                            <li> PDF version</li>
                            <li> Free Subscripion</li>
                        </ul>
                        <div className=" text-center">
                            <button onClick={() => { addData(49) }} className=" ogp bg-primary text-light border  rounded b fw-bold ">Get it now</button>
                        </div>
                    </div>

                    <div className="col-md-3 border bg-light">
                        <div className="pg pt-4 mb-5 ">
                            <p>Full Version </p>
                            <h1 className="gg"> <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-indian-rupee-icon lucide-indian-rupee"><path d="M6 3h12" /><path d="M6 8h12" /><path d="m6 13 8.5 8" /><path d="M6 13h3" /><path d="M9 13c6.667 0 6.667-10 0-10" /></svg>
                            </span>79.99 </h1>
                            <h6 className="text-primary"> One time purchase</h6>
                            <p className="pb-4">Get one chapter of pdf version for <br /> free busy subscribing </p>
                        </div>
                        <ul>
                            <li>  Ebook Version2</li>
                            <li>  Audio Book</li>
                            <li>  PDF version</li>
                            <li>  hardcover variation</li>
                        </ul>
                        <div className=" text-center">

                            <button onClick={() => { addData(79) }} className=" ogp bg-primary text-light border  rounded b fw-bold ">Get it now</button>
                        </div>
                    </div>

                </div>

            </div>
            <div className="grh">
                <h1 className="pt-5">Frequently Asked Questions</h1>
                <p className="pt-5 pb-5">This book is concerned with creating typography and is essential for professionals who regularly <br /> work for clients</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne1">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne">
                                        How to contact with Customer Service?
                                    </button>
                                </h2>
                                <div id="collapseOne1" class="accordion-collapse collapse show" aria-labelledby="headingOne1" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus <br /> terry richardson ad squid. 3 wolf moon officia aute, non cupidatat <br /> skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo">
                                        New update fixed all bug and issues?
                                    </button>
                                </h2>
                                <div id="collapseTwo2" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample1">
                                    <div class="accordion-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus <br /> terry richardson ad squid. 3 wolf moon officia aute, non cupidatat <br /> skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree3" aria-expanded="false" aria-controls="collapseThree">
                                        Website response taking time, how to improve?
                                    </button>
                                </h2>
                                <div id="collapseThree3" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus <br /> terry richardson ad squid. 3 wolf moon officia aute, non cupidatat <br /> skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFourth">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree4" aria-expanded="false" aria-controls="collapseFourth">
                                        How to purchase the book online?
                                    </button>
                                </h2>
                                <div id="collapseThree4" class="accordion-collapse collapse" aria-labelledby="headingFourth" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus <br /> terry richardson ad squid. 3 wolf moon officia aute, non cupidatat <br /> skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        How to contact with Customer Service?
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus <br /> terry richardson ad squid. 3 wolf moon officia aute, non cupidatat <br /> skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        New update fixed all bug and issues?
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus <br /> terry richardson ad squid. 3 wolf moon officia aute, non cupidatat <br /> skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Website response taking time, how to improve?
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus <br /> terry richardson ad squid. 3 wolf moon officia aute, non cupidatat <br /> skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFourth">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree4" aria-expanded="false" aria-controls="collapseFourth">
                                        How to purchase the book online?
                                    </button>
                                </h2>
                                <div id="collapseThree4" class="accordion-collapse collapse" aria-labelledby="headingFourth" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus <br /> terry richardson ad squid. 3 wolf moon officia aute, non cupidatat <br /> skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className=" text-center mb-5  pt-5">
                <button className=" ogp bg-primary text-light border  rounded b fw-bold ">Get it now</button>
            </div>
        </>
    )
}
export default Pricing