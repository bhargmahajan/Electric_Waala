import { RxCross1 } from "react-icons/rx";
const DX=()=>{
    return(
        <div className="max-w-[1000px] mt-10">
           
           
           <div className=" m-40 max-w-full flex flex-col ">
             <h2 className="text-[22px] font-bold opacity-70">Technical Specificaion of SSB Bhavi</h2>

             <table className="mt-6  bg-white border border-gray-300 font-inter w-full table-fixed border-collapse border-spacing-y-1 overflow-scroll text-left md:overflow-auto">
                
                  <thead className=" font-bold ">
                    <tr className=" mx-auto col-span-2 ">
                      <td className=" py-3  text-xl font-semibold  text-black">vehicle</td>
                    </tr>
                  </thead>
               
                <tbody className="max-w-full ">

               {/* vehicles section  */}
                 
               
       
                  <tr className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-2xl ">
                    <td className="py-4 pl-3 font-normal text-[#637381]">Model</td>
                    <td className="value py-4 pl-3  font-normal text-[#637381]">Bhavi New</td>
                  </tr>
 
                  <tr className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-2xl">
                    <td className="py-4 pl-3  font-normal text-[#637381]">Type</td>
                    <td className="value py-4 pl-3  font-normal text-[#637381]">Jangid</td>
                  </tr>

                  <tr className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-2xl">
                    <td className="py-4 pl-3 font-normal text-[#637381]">Dimensions</td>
                    <td className="value py-4 pl-3  font-normal text-[#637381]">2850{ RxCross1}1000</td>
                  </tr>

                  <tr className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-2xl">
                    <td className="py-4 pl-3 font-normal text-[#637381]">Motor Power</td>
                    <td className="value py-4 pl-3 font-normal text-[#637381]">48V, 1250 Watt</td>
                  </tr>

                  <tr className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-2xl">
                    <td className="py-4 pl-3 font-normal text-[#637381]">Motor Type</td>
                    <td className="value py-4 pl-3 font-normal text-[#637381]">Brushless DC Motor</td>
                  </tr>
                  
                  <tr className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-2xl">
                    <td className="py-4 pl-3 font-normal text-[#637381]">Controller</td>
                    <td className="value py-4 pl-3 font-normal text-[#637381]">24 Tube</td>
                  </tr>

                  <tr className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-2xl">
                    <td className="py-4 pl-3 font-normal text-[#637381]">Seating Capacity</td>
                    <td className="value py-4 pl-3 font-normal text-[#637381]">4+1(Driver)</td>
                  </tr>

                  <tr className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-2xl">
                    <td className="py-4 pl-3 font-normal text-[#637381]">vehicle weight</td>
                    <td className="value py-4 pl-3 font-normal text-[#637381]">351 kg</td>
                  </tr>

                  <tr className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-2xl">
                    <td className="py-4 pl-3 font-normal text-[#637381]">Total Load Capacity</td>
                    <td className="value py-4 pl-3 font-normal text-[#637381]">400 kg</td>
                  </tr>

                  <tr className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-2xl">
                    <td className="py-4 pl-3 font-normal text-[#637381]">Type Front</td>
                    <td className="value py-4 pl-3 font-normal text-[#637381]">3-75-12</td>
                  </tr>
                  
                  <tr className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-2xl">
                    <td className="py-4 pl-3 font-normal text-[#637381]">Type Rear</td>
                    <td className="value py-4 pl-3 font-normal text-[#637381]">3-75-12</td>
                  </tr>

                  <tr className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-2xl">
                    <td className="py-4 pl-3 font-normal text-[#637381]">Max speed</td>
                    <td className="value py-4 pl-3 font-normal text-[#637381]">25km/hr</td>
                  </tr>

                  <tr className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-2xl">
                    <td className="py-4 pl-3 font-normal text-[#637381]">Break Type</td>
                    <td className="value py-4 pl-3 font-normal text-[#637381]">Drum Break</td>
                  </tr>

                  <tr className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-2xl">
                    <td className="py-4 pl-3 font-normal text-[#637381]">Roof Type</td>
                    <td className="value py-4 pl-3 font-normal text-[#637381]">Iron</td>
                  </tr>
                  </tbody>
                  </table>
                  {/* //....................... */}

                  {/* battery */}
             <table className="bg-white border border-gray-300 font-inter w-full table-auto border-collapse border-spacing-y-1 overflow-scroll text-left md:overflow-auto">
                 
                 <thead className=" font-bold ">
                    <tr className=" mx-auto">
                      <th className=" py-3 text-xl font-semibold  text-black">Battery</th>
                    </tr>
                  </thead>

              <tbody>
              <tr className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-2xl">
                    <td className="py-4 pl-3 font-normal text-[#637381]">Battery Voltage</td>
                    <td className="value py-4 pl-3 font-normal text-[#637381]">12V</td>
                  </tr>

                  <tr className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-2xl">
                    <td className="py-4 pl-3 font-normal text-[#637381]">Batteries</td>
                    <td className="value py-4 pl-3 font-normal text-[#637381]">130AH</td>
                  </tr>

                  <tr className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-2xl">
                    <td className="py-4 pl-3 font-normal text-[#637381]">Battery Quantity</td>
                    <td className="value py-4 pl-3 font-normal text-[#637381]">4 pcs</td>
                  </tr>

                  <tr className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-2xl">
                    <td className="py-4 pl-3 font-normal text-[#637381]">Battery Mileage</td>
                    <td className="value py-4 pl-3 font-normal text-[#637381]">100-120 Km/Charge</td>
                  </tr>
              </tbody>
             </table>
                  
                 

                  {/* ......................................................... */}

                  {/* charger */}
                <table className="bg-white border border-gray-300 font-inter w-full table-auto border-collapse border-spacing-y-1 overflow-scroll text-left md:overflow-auto">

                <thead className=" font-bold ">
                    <tr className=" mx-auto">
                      <th className=" py-3 text-xl  font-semibold  text-black">Charger</th>
                    </tr>
                  </thead>

                <tbody>

                <tr className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-2xl">
                    <td className="py-4 pl-3 font-normal text-[#637381]">Charger Type</td>
                    <td className="value py-4 pl-3 font-normal text-[#637381]">SMPS</td>
                  </tr>

                  <tr className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-2xl">
                    <td className="py-4 pl-3 font-normal text-[#637381]">Charging Time</td>
                    <td className="value py-4 pl-3 font-normal text-[#637381]">6-7 hrs</td>
                  </tr>

                  <tr className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-2xl">
                    <td className="py-4 pl-3 font-normal text-[#637381]">Charger Capacity</td>
                    <td className="value py-4 pl-3 font-normal text-[#637381]">15 Ah</td>
                  </tr>

                  <tr className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-2xl">
                    <td className="py-4 pl-3 font-normal text-[#637381]">Charger Input Voltage</td>
                    <td className="value py-4 pl-3 font-normal text-[#637381]">220 V</td>
                  </tr>

                  
                  <tr className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-2xl">
                    <td className="py-4 pl-3 font-normal text-[#637381]">Charger Output Voltage</td>
                    <td className="value py-4 pl-3 font-normal text-[#637381]">48 V</td>
                  </tr>

                </tbody>
                 
                  </table>
                  
                  {/* ............................................................... */}
                     {/* Accessories */}
                   
                 <table className="bg-white border border-gray-300 font-inter w-full table-auto border-collapse border-spacing-y-1 overflow-scroll text-left md:overflow-auto">
                   
                 <thead className=" font-bold ">
                    <tr className=" mx-auto">
                      <th className=" py-3 text-xl font-semibold  text-black">Accessories</th>
                    </tr>
                  </thead>

                 <tbody>

                 
                 <tr className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-2xl">
                    <td className="py-4 pl-3 font-normal text-[#637381]">Full Curtains</td>
                    <td className="value py-4 pl-3 font-normal text-[#637381]">one</td>
                  </tr>

                  
                  <tr className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-2xl">
                    <td className="py-4 pl-3 font-normal text-[#637381]">Stepney</td>
                    <td className="value py-4 pl-3 font-normal text-[#637381]">one</td>
                  </tr>

                  
                  <tr className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-2xl">
                    <td className="py-4 pl-3 font-normal text-[#637381]">Center Locking</td>
                    <td className="value py-4 pl-3 font-normal text-[#637381]">one</td>
                  </tr>
                

                </tbody>
             </table>
                   
               
           </div>
        </div>
    )
}

export default DX;