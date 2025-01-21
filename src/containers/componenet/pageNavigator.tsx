import React from "react";
import { useNavigate } from "react-router-dom";

interface PageNavigatorProps {
  link: string;
  children: React.ReactNode;
}

export function PageNavigator({ link, children }: PageNavigatorProps) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(link);
  };

  return (
    <div onClick={handleNavigation} style={{ cursor: "pointer" }}>
      {children}
    </div>
  );
}
