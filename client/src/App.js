import { Routes, Route } from "react-router-dom";
import HomeLayout from "./Layout/Home.layout";
import LoginLayout from "./Layout/Login.layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SignupLayout from "./Layout/Signup.layout";
import ContactUsLayout from "./Layout/ContactUs.Layout";
import AboutUsLayout from "./Layout/AboutUs.Layout";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomeLayout />} />
        <Route exact path="/signin" element={<LoginLayout />} />
        <Route exact path="/signup" element={<SignupLayout />} />
        <Route exact path="/contactUs" element={<ContactUsLayout />} />
        <Route exact path="/aboutUs" element={<AboutUsLayout />} />
      </Routes>
    </>
  );
}

export default App;