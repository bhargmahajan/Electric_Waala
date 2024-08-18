import { Routes, Route } from "react-router-dom";
import HomeLayout from "./Layout/Home.layout";
import SigninLayout from "./Layout/Signin.layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SignupLayout from "./Layout/Signup.layout";
import ContactUsLayout from "./Layout/ContactUs.Layout";
import AboutUsLayout from "./Layout/AboutUs.Layout";
import Profile from "./Components/Profile";
import City from "./Components/Pages/city";
import CityFX from "./Components/Pages/cityfx";
import CityFXMax from "./Components/Pages/cityfxmax";
import Container from "./Components/Pages/container";
import DelticStar from "./Components/Pages/delticstar";
import DelticVista from "./Components/Pages/delticvista";
import Delux from "./Components/Pages/delux";
import DeluxGrand from "./Components/Pages/deluxgrand";
import DeluxPlus from "./Components/Pages/deluxplus";
import DLX from "./Components/Pages/dlx";
import DX from "./Components/Pages/dx";
import EC1 from "./Components/Pages/ec1";
import Electric from "./Components/Pages/electric";
import Eloader from "./Components/Pages/eloader";
import FullyLoaded from "./Components/Pages/fullyloaded";
import GoldMS from "./Components/Pages/goldMS";
import GoldSS from "./Components/Pages/goldSS";
import Grand from "./Components/Pages/grand";
import HeavyLoader from "./Components/Pages/heavyloader";
import HRT from "./Components/Pages/hrt";
import Jumbo from "./Components/Pages/jumbo";
import King from "./Components/Pages/king";
import LDR from "./Components/Pages/ldr";
import M1MS from "./Components/Pages/m1ms";
import Marshal from "./Components/Pages/marshal";
import MSPro from "./Components/Pages/mspro";
import Paint from "./Components/Pages/paint";
import Plus from "./Components/Pages/plus";
import SFT from "./Components/Pages/sft";
import Shakti from "./Components/Pages/shakti";
import Shaktiman from "./Components/Pages/shaktiman";
import Smart from "./Components/Pages/smart";
import SSPro from "./Components/Pages/sspro";
import Star from "./Components/Pages/star";
import Super from "./Components/Pages/super";
import SuperDelux from "./Components/Pages/superdelux";
import TotalSteel from "./Components/Pages/totalsteel";
import XtraFX from "./Components/Pages/xtrafx";
import YaariHRT from "./Components/Pages/yaarihrt";
import YaariSFT from "./Components/Pages/yaarisft";
import Bhavi from "./Components/Pages/bhavi";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomeLayout />} />
        <Route exact path="/signin" element={<SigninLayout />} />
        <Route exact path="/signup" element={<SignupLayout />} />
        <Route exact path="/contactUs" element={<ContactUsLayout />} />
        <Route exact path="/aboutUs" element={<AboutUsLayout />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/bhavi" element={<Bhavi />} />
        <Route exact path="/city" element={<City />} />
        <Route exact path="/fx" element={<CityFX />} />
        <Route exact path="/max" element={<CityFXMax />} />
        <Route exact path="/container" element={<Container />} />
        <Route exact path="/delticstar" element={<DelticStar />} />
        <Route exact path="/vista" element={<DelticVista />} />
        <Route exact path="/delux" element={<Delux />} />
        <Route exact path="/delgrand" element={<DeluxGrand />} />
        <Route exact path="/delplus" element={<DeluxPlus />} />
        <Route exact path="/dlx" element={<DLX />} />
        <Route exact path="/dx" element={<DX />} />
        <Route exact path="/ec1" element={<EC1 />} />
        <Route exact path="/electric" element={<Electric />} />
        <Route exact path="/loader" element={<Eloader />} />
        <Route exact path="/fully" element={<FullyLoaded />} />
        <Route exact path="/ms" element={<GoldMS />} />
        <Route exact path="/ss" element={<GoldSS />} />
        <Route exact path="/grand" element={<Grand />} />
        <Route exact path="/heavyloader" element={<HeavyLoader />} />
        <Route exact path="/hrt" element={<HRT />} />
        <Route exact path="/jumbo" element={<Jumbo />} />
        <Route exact path="/king" element={<King />} />
        <Route exact path="/ldr" element={<LDR />} />
        <Route exact path="/m1ms" element={<M1MS />} />
        <Route exact path="/marshal" element={<Marshal />} />
        <Route exact path="/mspro" element={<MSPro />} />
        <Route exact path="/paint" element={<Paint />} />
        <Route exact path="/plus" element={<Plus />} />
        <Route exact path="/sft" element={<SFT />} />
        <Route exact path="/shakti" element={<Shakti />} />
        <Route exact path="/shaktiman" element={<Shaktiman />} />
        <Route exact path="/smart" element={<Smart />} />
        <Route exact path="/sspro" element={<SSPro />} />
        <Route exact path="/star" element={<Star />} />
        <Route exact path="/super" element={<Super />} />
        <Route exact path="/superdelux" element={<SuperDelux />} />
        <Route exact path="/totalsteel" element={<TotalSteel />} />
        <Route exact path="/xtra" element={<XtraFX />} />
        <Route exact path="/yaarihrt" element={<YaariHRT />} />
        <Route exact path="/yaarisft" element={<YaariSFT />} />
      </Routes>
    </>
  );
}

export default App;