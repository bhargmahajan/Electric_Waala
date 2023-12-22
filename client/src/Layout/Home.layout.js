import React from "react";
import Navbar from "../Components/Navbar";
import MiniMetroVariants from "../Components/Body/VariantCards/MiniMetroVariants";
import SarthiVariant from "../Components/Body/VariantCards/SarthiVariant";
import KomakiVariant from "../Components/Body/VariantCards/KomakiVariants";
import BrandCarousal from "../Components/Body/Brands/brandCarousal";

const HomeLayout = () => {
    return (
        <>
        <Navbar />
        <BrandCarousal/>
        <MiniMetroVariants />
        <SarthiVariant />
        <KomakiVariant />
        </>
    );
};

export default HomeLayout;