import React from "react";
import Navbar from "../Components/Navbar";
import MiniMetroVariants from "../Components/Body/VariantCards/MiniMetroVariants";
import SarthiVariant from "../Components/Body/VariantCards/SarthiVariant";
import KomakiVariant from "../Components/Body/VariantCards/KomakiVariants";
import PiaggioVariant from "../Components/Body/VariantCards/PiaggioVariants";
import KineticGreenVariant from "../Components/Body/VariantCards/KineticGreenVariants";
import DelticVariant from "../Components/Body/VariantCards/DelticVariants";
import YCVariant from "../Components/Body/VariantCards/YCVariants";
import MahendraVariant from "../Components/Body/VariantCards/MahendraVariants";
import ThukralVariant from "../Components/Body/VariantCards/ThukralVariants";
import JangidVariant from "../Components/Body/VariantCards/JangidVariants";
import KukuVariant from "../Components/Body/VariantCards/KukuVariants";
import SSBVariant from "../Components/Body/VariantCards/SSBVariants";
import BrandCarousal from "../Components/Body/Brands/brandCarousal";
import Footer from "../Components/Footer/index";

const HomeLayout = () => {
    return (
        <>
        <Navbar />
        <BrandCarousal/>
        <MiniMetroVariants />
        <SarthiVariant />
        <KomakiVariant />
        <PiaggioVariant />
        <KineticGreenVariant />
        <DelticVariant />
        <YCVariant />
        <MahendraVariant />
        <ThukralVariant />
        <JangidVariant />
        <KukuVariant />
        <SSBVariant />
        <Footer />
        </>
    );
};

export default HomeLayout;