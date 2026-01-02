function About() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 ">
                        <div className="e"> < img src="https://bookhunts.netlify.app/assets/images/banner/book.png" width={"90%"} /></div>
                    </div>
                    <div className="col-md-6">
                        <div className="f">
                            <p>50% discount on early purchase</p>
                            <h1>Everything in your hand using mobile or tablet</h1>
                            <h6>This lovely, well-written book is concerned with creating typography and is essential for professionals.</h6>
                            <ul className="g list-unstyled">
                                <li> <i class="fa-solid fa-award"></i>  10+ award achieved</li>
                                <p>Debitis ab ipsum a autem sit ducimus voluptatem, quos. Consequatur non eum facilis, ex repellendus, vitae debitis.</p>
                                <li> <i class="fa-solid fa-helmet-safety"></i> Read On Any Device</li>
                                <p> Debitis ab ipsum a autem sit ducimus voluptatem, quos. Consequatur non eum facilis, ex repellendus, vitae debitis.  </p>
                                <li> <i class="fa-solid fa-rocket"></i>Marketing Goals</li>
                                <p>Debitis ab ipsum a autem sit ducimus voluptatem, quos. Consequatur non eum facilis, ex repellendus, vitae debitis.</p>
                            </ul>
                            <button> <i class="fa-solid fa-check"></i>More About Support</button>
                        </div>
                    </div>

                </div>
            </div>



            <div className="container mt-5" >
            <div className="z">
                <h2 className="pb-5 pt-5">About the author</h2>
                <h6 className="pb-2">This book is concerned with creating typography and is essential for <br /> professionals who regularly work for clients.</h6>
            </div>
                <div className="row justify-content-center mt-5 mb-5">
                    <div className="col-md-4 img-border  ">
                        <img src="https://bookhunts.netlify.app/assets/images/bg/author.jpg" />
                    </div>
                    <div className="col-md-6">
                        <h1 className="fs-1 fw-bold pb-3">Michale John</h1>
                        <p>My name is john . Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Consequuntur, professionals who regularly</p>
                        <p className="pb-2">This lovely, well-written book is concerned with creating typography and <br /> is essential for professionals who regularly work for clients.</p>
                        <li className=" list-unstyled ">
                            <li className="fs-5 pb-1"> <i  class="fa-solid fa-check text-primary fw-bold"></i>  Achieved 10+ awarded </li>
                            <li className="fs-5 pb-1">   <i class="fa-solid fa-check text-primary"></i>  Very passionate about writting  </li>
                            <li className="fs-5 pb-5"> <i class="fa-solid fa-check text-primary"></i>  Most Popular writter in the year  </li>
                        </li>

                        <p> Reach Me on <span className="text-danger"> Twitter </span> or<span className="text-danger"> Facebook</span> or <span className="text-danger">Linkedin </span></p>

                    </div >
                </div>
            </div>
        </>
    )
}
export default About 