import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { BiShieldQuarter } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import { PiShieldCheckFill } from "react-icons/pi";
const Services = () => {
  return (
    <div className=" md:w-[75%] w-full h-[45vh]  mx-auto md:mt-20 mt-0 md:flex md:flex-row flex-col  items-center md:justify-between md:p-10 p-3 ">
      <div className="md:w-[22vw] w-full md:h-full h-[11vh] bg-zinc-100 rounded-xl flex flex-col items-center justify-center gap-5">
        <TbTruckDelivery className="w-[3vw] h-[3vw] bg-white rounded-full text-blue-700 text-[10px] " />
        <h1 className="text-lg text-black font-medium">
          Super fast and free delivery
        </h1>
      </div>
      <div className="md:w-[22vw] w-full md:h-full h-[22vh]  flex flex-col  items-center justify-between my-5 md:my-0">
        <div className="w-full h-[45%]  bg-zinc-100 rounded-xl flex  items-center justify-center gap-3">
          <BiShieldQuarter className="w-[3vw] h-[3vw] bg-white rounded-full text-blue-700 text-[10px] " />
          <h1 className="text-lg text-black font-medium">
            Non contact shipping
          </h1>
        </div>
        <div className="w-full h-[45%] bg-zinc-100 rounded-xl flex  items-center justify-center gap-3">
          <GiReceiveMoney className="w-[3vw] h-[3vw] bg-white rounded-full text-blue-700 text-[10px] " />
          <h1 className="text-lg text-black font-medium">
            Money back guaranteed
          </h1>
        </div>
      </div>
      <div className="md:w-[22vw] w-full md:h-full h-[11vh] bg-zinc-100 rounded-xl flex flex-col items-center justify-center gap-5">
        <PiShieldCheckFill className="w-[3vw] h-[3vw] bg-white rounded-full text-blue-700 text-[10px] " />
        <h1 className="text-lg text-black font-medium">
          Super secure payment system
        </h1>
      </div>
    </div>
  );
};

export default Services;
