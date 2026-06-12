import React from "react";
import Image from "next/image";
import Logo from "@/src/assets/logo.png";

const Header = () => {
  return (
    <div className="flex justify-around items-center">
      <a href="">
        <Image src={Logo} alt="Logo" className="bg-gray-500" />
      </a>
      <nav>
        <ul className="flex gap-10 font-medium text-lg">
          <li>Home</li>
          <li>About</li>
          <li>Project</li>
          <li>Blogs</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
