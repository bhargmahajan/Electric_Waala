import React from "react";

const NavSm = () =>{
    return (
        <>
        <h1 className="mx-10 font-bold text-2xl">Kuku</h1>
        <div className="flex flex-row flex-wrap gap-8 justify-center px-16 my-10">
            <div className="bg-white rounded-m shadow">
                <div className="w-80 h-48">
                    <img
                    src="https://electricwaala.s3.ap-south-1.amazonaws.com/container-rickshaw-kuku.png"
                    alt="Container Rickshaw"
                    className="w-full h-full"
                    />
                </div>
                <div className="mx-8 my-3">
                    <h3 className="my-2 text-base font-medium mx-4">Container Rickshaw</h3>
                    <h3 className="my-2 text-sm mx-4">Price: 1.45L</h3>
                </div>
            </div>

            <div className="bg-white rounded-m shadow">
                <div className="w-80 h-48">
                    <img
                    src="https://electricwaala.s3.ap-south-1.amazonaws.com/electric-auto-kuku.png"
                    alt="Electric Auto"
                    className="w-full h-full"
                    />
                </div>
                <div>
                    <h3 className="my-2 text-base font-medium mx-4">Electric Auto</h3>
                    <h3 className="my-2 text-sm mx-4">Price: 1.62L</h3>
                </div>
            </div>

            <div className="bg-white rounded-m shadow">
                <div className="w-80 h-48">
                    <img
                    src="https://electricwaala.s3.ap-south-1.amazonaws.com/jumbo-heavy-loader-kuku.png"
                    alt="Jumbo Heavy Loader"
                    className="w-full h-full"
                    />
                </div>
                <div>
                    <h3 className="my-2 text-base font-medium mx-4">Jumbo Heavy Loader</h3>
                    <h3 className="my-2 text-sm mx-4">Price: 1.62L</h3>
                </div>
            </div>
        </div>
        </>
    );
};

const NavMd =() =>{
    return (
        <>
        <h1 className="mx-16 font-bold text-4xl">Kuku</h1>
        <div className="flex flex-row flex-wrap gap-8 justify-between my-10 mx-12">
            <div className="bg-white rounded-m shadow">
                <div className="w-80 h-52">
                    <img
                    src="https://electricwaala.s3.ap-south-1.amazonaws.com/container-rickshaw-kuku.png"
                    alt="Container Rickshaw"
                    className="w-full h-full"
                    />
                </div>
                <div>
                    <h3 className="my-2 text-base font-medium mx-4">Container Rickshaw</h3>
                    <h3 className="my-2 text-sm mx-4">Price: 1.45L</h3>
                </div>
            </div>

            <div className="bg-white rounded-m shadow">
                <div className="w-80 h-52">
                    <img
                    src="https://electricwaala.s3.ap-south-1.amazonaws.com/electric-auto-kuku.png"
                    alt="Container Rickshaw"
                    className="w-full h-full"
                    />
                </div>
                <div>
                    <h3 className="my-2 text-base font-medium mx-4">Electric Auto</h3>
                    <h3 className="my-2 text-sm mx-4">Price: 1.62L</h3>
                </div>
            </div>

            <div className="bg-white rounded-m shadow">
                <div className="w-80 h-52">
                    <img
                    src="https://electricwaala.s3.ap-south-1.amazonaws.com/jumbo-heavy-loader-kuku.png"
                    alt="Container Rickshaw"
                    className="w-full h-full"
                    />
                </div>
                <div>
                    <h3 className="my-2 text-base font-medium mx-4">Jumbo Heavy Loader</h3>
                    <h3 className="my-2 text-sm mx-4">Price: 1.62L</h3>
                </div>
            </div>
        </div>
        </>
    )
};

const NavLg =() =>{
    return (
        <>
        <h1 className="mx-28 font-bold text-4xl">Kuku</h1>
        <div className="flex flex-row flex-wrap gap-8 justify-between my-10 mx-32">
            <div className="bg-white rounded-m shadow">
                <div className="w-96 h-60">
                    <img
                    src="https://electricwaala.s3.ap-south-1.amazonaws.com/container-rickshaw-kuku.png"
                    alt="Container Rickshaw"
                    className="w-full h-full"
                    />
                </div>
                <div>
                    <h3 className="my-2 text-base font-medium mx-4">Container Rickshaw</h3>
                    <h3 className="my-2 text-sm mx-4">Price: 1.45L</h3>
                </div>
            </div>

            <div className="bg-white rounded-m shadow">
                <div className="w-96 h-60">
                    <img
                    src="https://electricwaala.s3.ap-south-1.amazonaws.com/electric-auto-kuku.png"
                    alt="Container Rickshaw"
                    className="w-full h-full"
                    />
                </div>
                <div>
                    <h3 className="my-2 text-base font-medium mx-4">Electric Auto</h3>
                    <h3 className="my-2 text-sm mx-4">Price: 1.62L</h3>
                </div>
            </div>

            <div className="bg-white rounded-m shadow">
                <div className="w-96 h-60">
                    <img
                    src="https://electricwaala.s3.ap-south-1.amazonaws.com/jumbo-heavy-loader-kuku.png"
                    alt="Container Rickshaw"
                    className="w-full h-full"
                    />
                </div>
                <div>
                    <h3 className="my-2 text-base font-medium mx-4">Jumbo Heavy Loader</h3>
                    <h3 className="my-2 text-sm mx-4">Price: 1.62L</h3>
                </div>
            </div>
        </div>
        </>
    )
};


const variantCard = () => {
    return ( 
        <>
        <div className="md:hidden">{
                <NavSm />
            }</div>
            <div className="hidden lg:hidden md:block w-full">{
                <NavMd />
            }</div>
            <div className="hidden lg:block">{
                <NavLg />
            }</div>     
        </>
    );
};

export default variantCard;