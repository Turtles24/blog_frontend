import * as React from "react";
import search from "@/assets/search.webp";
import { useNavigate } from "react-router-dom";

const Header = React.forwardRef<HTMLDivElement>(() => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleIntroClick = () => {
    navigate("/intro");
  };
  return (
    <div className="flex justify-between">
      <div
        onClick={handleHomeClick}
        className="daon_logo font-extrabold xxl:text-4xl  xl:text-4xl lg:text-2xl md:text-2xl sm:text-2xl xs:text-2xl"
      >
        DAON
      </div>
      <div className="header_option font-medium xxl:text-2xl  xl:text-2xl lg:text-xl md:text-xl sm:text-xl xs:text-xl ml-auto">
        <div onClick={handleHomeClick}>홈</div>
        <div onClick={handleIntroClick} className="ml-7">
          조직소개
        </div>
        <div>
          <img className="ml-7" src={search}></img>
        </div>
      </div>
    </div>
  );
});

Header.displayName = "Header";

export { Header };
