import React from "react";
import BrandSlider from "react-slick";

const BrandCarousal = () => {
    const settingsLg = {
        arrows:true,
        autoplay:true,
        centerMode:true,
        slidesToShow:3,
        slidesToScroll:1,
        infinite: true,
        centerPadding: "200px"
    }

    const settingsMd = {
        arrows:true,
        autoplay:true,
        centerMode:true,
        slidesToShow:2,
        slidesToScroll:1,
        infinite: true,
        centerPadding: "100px"
    }

    const settings = {
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const images = [
        "https://electricwaala.s3.ap-south-1.amazonaws.com/deltic.png",
        "https://electricwaala.s3.ap-south-1.amazonaws.com/jangid.png",
        "https://electricwaala.s3.ap-south-1.amazonaws.com/kinetic.png",
        "https://electricwaala.s3.ap-south-1.amazonaws.com/kuku.png",
        "https://electricwaala.s3.ap-south-1.amazonaws.com/mahendra.png",
        "https://electricwaala.s3.ap-south-1.amazonaws.com/minimetro.png",
        "https://electricwaala.s3.ap-south-1.amazonaws.com/piaggo.png",
        "https://electricwaala.s3.ap-south-1.amazonaws.com/sarthi.png",
        "https://electricwaala.s3.ap-south-1.amazonaws.com/ssb.png",
        "https://electricwaala.s3.ap-south-1.amazonaws.com/thukral.png",
        "https://electricwaala.s3.ap-south-1.amazonaws.com/yc.png",
        "https://electricwaala.s3.ap-south-1.amazonaws.com/komaki.webp"
    ]

    return (
        <>
        <div className="md:hidden lg:hidden mx-4 my-1">
        <h1 className="text-4xl font-bold px-6 py-3">Brands</h1>
            <BrandSlider {...settings}>
            {
                images.map((image) => (
                    <div className="w-full h-36 py-3">
                        <img src={image} 
                        alt="testing" className="w-full h-full px-8 rounded-md" />
                    </div>
                ))
            }
            </BrandSlider>
        </div>

        <div className="hidden lg:hidden md:block mx-4 my-1">
        <h1 className="text-4xl font-bold px-6 py-3">Brands</h1>
            <BrandSlider {...settingsMd}>
            {
                images.map((image) => (
                    <div className="w-full h-40 py-3">
                        <img src={image} 
                        alt="testing" className="w-full px-8 h-full rounded-md" />
                    </div>
                ))
            }
            </BrandSlider>
        </div>

        <div className="hidden lg:block mx-8 my-4">
        <h1 className="text-5xl font-bold px-10 py-4">Brands</h1>
            <BrandSlider {...settingsLg}>
            {
                images.map((image) => (
                    <div className="w-full h-52 px-4 py-3">
                        <img src={image} 
                        alt="testing" className="w-full h-full px-5 rounded-md" />
                    </div>
                ))
            }
            </BrandSlider>
        </div>
        </>
    );
};

export default BrandCarousal;