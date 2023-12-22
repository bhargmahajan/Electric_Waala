import React from "react";
import Navbar from "../Components/Navbar";
import Variant from "../Components/Body/VariantCards/MiniMetroVariants";
import BrandCarousal from "../Components/Body/Brands/brandCarousal";

const HomeLayout = () => {
    return (
        <>
        <Navbar />
        <BrandCarousal/>
        <Variant />
        </>
    );
};

export default HomeLayout;