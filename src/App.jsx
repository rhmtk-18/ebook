
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./components/pages/Home"
import Layout from "./components/pages/Layout";
import About from "./components/pages/About"
import Chapters from "./components/pages/Chapters";
import Testimonial from "./components/pages/Testimonial";
import Pricing from "./components/pages/Pricing";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import Blog from "./components/pages/Blog";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
import You from "./components/pages/You";
import Form from "./components/pages/Form";
import MyOrders from "./components/pages/MyOrders";

import ViewPricing from "./Admin/ViewPricing";
import AdminLayout from "./Admin/AdminLayout";
import ViewContact from "./Admin/ViewContact";
import AddBlog from "./Admin/AddBlog";
import ViewBlog from "./Admin/ViewBlog";


import AuthContextProvider from "./context/AuthContextProvider";

// import Navbar from "./components/Navbar"


function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="About" element={<About />} />
              <Route path="chapter" element={<Chapters />} />
              <Route path="testimonial" element={<Testimonial />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="blog" element={<Blog></Blog>}></Route>
              <Route path="Contact" element={<Contact />} />
              <Route path="Login" element={<Login />} />
              <Route path="Signin" element={<Signin />}>/</Route>
              <Route path="Signup" element={<Signup />}>/</Route>
              <Route path="You" element={<MyOrders />} />
              <Route path="Form" element={<Form />}>/</Route>
              <Route path="MyOrders" element={<MyOrders></MyOrders>}></Route>
 </Route>



            <Route path="admin" element={<AdminLayout></AdminLayout>}>

              <Route index element={<> helllo</>}></Route>

              <Route path="viewcontact" element={<ViewContact />}></Route>
              <Route path="addblog" element={<AddBlog />}></Route>
              <Route path="viewblog" element={<ViewBlog />}></Route>
              <Route path="Viewpricing" element={<ViewPricing />}></Route>

            </Route>
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  )

}


// <BrowserRouter>
//     // </BrowserRouter>
export default App