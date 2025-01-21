import * as React from "react";
import search from "@/assets/search.webp";

const Header = React.forwardRef<HTMLDivElement>(() => {
  return (
    <div className="flex justify-between">
      <div className="daon_logo">DAON</div>
      <div className="header_option ml-auto">
        <div>홈</div>
        <div className="ml-7">조직소개</div>
        <div>
          <img className="ml-7" src={search}></img>
        </div>
      </div>
    </div>
  );
});

Header.displayName = "Header";

export { Header };
