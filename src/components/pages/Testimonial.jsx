import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
function Testimonial() {
    return (
        <div>
            <div className=" just">
                <h1 className="mt-5"> Reviews from happy <br /> readers</h1>
                <p className="mt-5 mb-5">This book is concerned with creating typography and is essential for <br /> professionals who regularly work for clients.</p>
            </div>
            <div className="container pb-5">
                <div className="row">

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className=" border rounded-top rounded-end ">
                                <div className="center ">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <h4 className="pb-3">Very Effective!</h4>
                                    <h5 className="pb-3"> They are creative enough. Very <br /> much creative and powerful <br /> enough. Lorem ipsum dolor sit <br /> amet consector adipsing elit. </h5>
                                    <div className="d-flex gap-4">

                                        <img src="https://bookhunts.netlify.app/assets/images/clients/test-1.jpg" className="rounded-circle"  />
                                        <div>
                                            <h4> John Doe </h4>
                                            <h6> Developer </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" border  rounded-top rounded-end">
                                <div className="center ">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <h4 className="pb-3">Very Effective!</h4>
                                    <h5 className="pb-3"> They are creative enough. Very <br /> much creative and powerful <br /> enough. Lorem ipsum dolor sit <br /> amet consector adipsing elit. </h5>
                                    <div className="d-flex gap-4">

                                        <img src="https://bookhunts.netlify.app/assets/images/clients/test-2.jpg" className="rounded-circle" />
                                        <div>
                                            <h4> John Doe 2</h4>
                                            <h6> Developer </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="border  rounded-top rounded-end">
                                <div className="center ">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <h4 className="pb-3">Very Effective!</h4>
                                    <h5 className="pb-3"> They are creative enough. Very <br /> much creative and powerful <br /> enough. Lorem ipsum dolor sit <br /> amet consector adipsing elit. </h5>
                                    <div className="d-flex gap-4">

                                        <img src="https://bookhunts.netlify.app/assets/images/clients/test-3.jpg" className="rounded-circle"  />
                                        <div>
                                            <h4> John Doe 3 </h4>
                                            <h6> Developer </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" border  rounded-top rounded-end">
                                <div className="center ">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <h4 className="pb-3">Very Effective!</h4>
                                    <h5 className="pb-3"> They are creative enough. Very <br /> much creative and powerful <br /> enough. Lorem ipsum dolor sit <br /> amet consector adipsing elit. </h5>
                                    <div className="d-flex gap-4">

                                        <img src="https://bookhunts.netlify.app/assets/images/clients/test-2.jpg" className="rounded-circle  " />
                                        <div>
                                            <h4> John Doe 2</h4>
                                            <h6> Developer </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>




                </div>


            </div>


        </div>
    )
}
export default Testimonial