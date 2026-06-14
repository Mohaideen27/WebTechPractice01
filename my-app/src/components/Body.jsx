import React from "react";
import Image from "next/image";
import Satelite from "@/src/assets/satellite.png";
import FloatingContainer from "./Body/FloatingContainer";
import VideoThumbnail from "@/src/assets/MarsRover.jpg";
import BlogImage1 from "@/src/assets/FindingPlanet.jpg";
import BlogImage2 from "@/src/assets/NewSatellitedish.jpg";

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
      <div id="floatingContainer">
        <FloatingContainer />
      </div>
      <div id="part3">
        <h1>our mission</h1>
        <p>
          This website template is designed to showcase your projects and
          services in a modern, responsive layout.
        </p>
      </div>
      <div id="part4" className="flex flex-row w-[75%] m-auto">
        <div className="w-full">
          <h1>Featured Video</h1>
          <a href="">
            <Image src={VideoThumbnail} alt="Featured Video" />
          </a>
        </div>
        <div className="w-full">
          <h1>latest Blog</h1>
          <ul>
            <li>
              <div className="flex flex-row items-center">
                <a href="">
                  <Image src={BlogImage1} alt="Finding Planet X-123" />
                </a>
                <div>
                  <h1>finding planet x-123</h1>
                  <span>february 6, 2023</span>
                  <div>
                    <a href="">Read More</a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-row items-center">
                <a href="">
                  <Image src={BlogImage2} alt="Finding Planet X-123" />
                </a>
                <div>
                  <h1>new satellite dish</h1>
                  <span>february 3, 2023</span>
                  <div>
                    <a href="">Read More</a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Body;
