import React from "react";
import Image from "next/image";
import Satelite from "@/src/assets/satellite.png";

const Body = () => {
  return (
    <div>
      <div id="part1" className="border-2 border-gray-500">
        <div className="flex flex-row items-center w-full">
          <div>
            <Image src={Satelite} alt="Satellite" />
          </div>
          <div className="flex flex-col items-center w-full h-full justify-around">
            <h1>SOYUZ TMA-M</h1>
            <h2>SPACECRAFT</h2>
            <a href="">
              <div className="flex items-center justify-center w-40 h-10 border-2 border-gray-500 rounded-lg hover:bg-gray-500 hover:text-white transition duration-300">
                <span>READ MORE</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div id="floatingContainer"></div>
    </div>
  );
};

export default Body;
