import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Explore from "./pages/Explore"
import Offers from "./pages/Offers"
import Profile from "./pages/Profile"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import ForgotPassword from "./pages/ForgotPassword"
import CreateListing from "./pages/CreateListing"
import PrivateRoute from "./components/PrivateRoute"
import Navbar from "./components/Navbar"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import Category from "./pages/Category"
import Listing from "./pages/Listing"
import Contact from "./pages/Contact"
import EditListing from "./pages/EditListing"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/category/:categoryName" element={<Category />} />
          Category
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route
            path="/category/:categoryNAme/:listingId"
            element={<Listing />}
          />
          <Route path="/contact/:landlord" element={<Contact />} />
          <Route path="/edit-listing/:listingId" element={<EditListing />} />
        </Routes>
        <Navbar />
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
