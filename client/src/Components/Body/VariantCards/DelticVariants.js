import React from "react";
import { Link } from "react-router-dom";

const NavSm = () =>{
    return (
        <>
        <h1 className="mx-10 font-bold text-2xl">Deltic</h1>
        <div className="flex flex-row flex-wrap gap-8 justify-center px-16 my-10">
            <Link to="/delticstar">
            <div className="bg-white rounded-m shadow">
                <div className="w-80 h-48">
                    <img
                    src="https://electricwaala.s3.ap-south-1.amazonaws.com/deltic-star.png"
                    alt="Deltic Star"
                    className="w-full h-full"
                    />
                </div>
                <div className="mx-8 my-3">
                    <h3 className="my-2 text-base mx-4 font-medium">Deltic Star</h3>
                    <h3 className="my-2 text-sm mx-4">Price: 1.45L</h3>
                </div>
            </div>
            </Link>

            <Link to="/vista">
            <div className="bg-white rounded-m shadow">
                <div className="w-80 h-48">
                    <img
                    src="https://electricwaala.s3.ap-south-1.amazonaws.com/deltic-vista.png"
                    alt="Deltic Vista"
                    className="w-full h-full"
                    />
                </div>
                <div>
                    <h3 className="my-2 text-base font-medium mx-4">Deltic Vista</h3>
                    <h3 className="my-2 text-sm mx-4">Price: 1.62L</h3>
                </div>
            </div>
            </Link>
        </div>
        </>
    );
};

const NavMd =() =>{
    return (
        <>
        <h1 className="mx-16 font-bold text-4xl">Deltic</h1>
        <div className="flex flex-row flex-wrap gap-8 justify-between my-10 mx-12">
        <Link to="/delticstar">
            <div className="bg-white rounded-m shadow">
                <div className="w-80 h-52">
                    <img
                    src="https://electricwaala.s3.ap-south-1.amazonaws.com/deltic-star.png"
                    alt="Deltic Star"
                    className="w-full h-full"
                    />
                </div>
                <div>
                    <h3 className="my-2 text-base font-medium mx-4">Deltic Star</h3>
                    <h3 className="my-2 text-sm mx-4">Price: 1.62L</h3>
                </div>
            </div>
            </Link>

            <Link to="/vista">
            <div className="bg-white rounded-m shadow">
                <div className="w-80 h-52">
                    <img
                    src="https://electricwaala.s3.ap-south-1.amazonaws.com/deltic-vista.png"
                    alt="Deltic Vista"
                    className="w-full h-full"
                    />
                </div>
                <div>
                    <h3 className="my-2 text-base font-medium mx-4">Deltic Vista</h3>
                    <h3 className="my-2 text-sm mx-4">Price: 1.62L</h3>
                </div>
            </div>
            </Link>
        </div>
        </>
    )
};

const NavLg =() =>{
    return (
        <>
        <h1 className="mx-28 font-bold text-4xl">Deltic</h1>
        <div className="flex flex-row flex-wrap gap-12 justify-start my-10 mx-32">
        <Link to="/delticstar">
            <div className="bg-white rounded-m shadow">
                <div className="w-96 h-60">
                    <img
                    src="https://electricwaala.s3.ap-south-1.amazonaws.com/deltic-star.png"
                    alt="Deltic Star"
                    className="w-full h-full"
                    />
                </div>
                <div>
                    <h3 className="my-2 text-base font-medium mx-4">Deltic Star</h3>
                    <h3 className="my-2 text-sm mx-4">Price: 1.45L</h3>
                </div>
            </div>
            </Link>

            <Link to="/vista">
            <div className="bg-white rounded-m shadow">
                <div className="w-96 h-60">
                    <img
                    src="https://electricwaala.s3.ap-south-1.amazonaws.com/deltic-vista.png"
                    alt="Deltic Vista"
                    className="w-full h-full"
                    />
                </div>
                <div>
                    <h3 className="my-2 text-base font-medium mx-4">Deltic Vista</h3>
                    <h3 className="my-2 text-sm mx-4">Price: 1.62L</h3>
                </div>
            </div>
            </Link>
        </div>
        </>
    )
};


const variantCard = () => {
    return ( 
        <>
        <div className="md:hidden my-8">{
            <NavSm />
        }</div>
        <div className="hidden lg:hidden md:block w-full my-8">{
            <NavMd />
        }</div>
        <div className="hidden lg:block my-16">{
            <NavLg />
        }</div>     
        </>
    );
};

export default variantCard;