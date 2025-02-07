import React from "react";
import { useNavigate } from "react-router-dom";
import "@/styles/pageNavigator.css";

interface PageNavigatorProps {
  link?: string;
  children?: React.ReactNode;
  currentPage?: number;
  onPageChange?: (page: number) => void;
}

export function PageNavigator({ 
  link, 
  children,
  currentPage = 1,
  onPageChange = () => {}
}: PageNavigatorProps) {
  const navigate = useNavigate();
  const totalPages = 6;
  const pages = [1, 2, 3, 4, 5, 6];

  // 링크가 있는 경우 페이지 이동을 위한 핸들러
  const handleNavigation = () => {
    if (link) {
      navigate(link);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // 페이지네이션을 위한 렌더링
  if (!link && !children) {
    return (
      <div className="pagination-container">
        <button 
          className="arrow-button"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          ←
        </button>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`page-button ${currentPage === page ? 'active' : ''}`}
          >
            {page}
          </button>
        ))}
        <button 
          className="arrow-button"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          →
        </button>
      </div>
    );
  }

  // 기존의 페이지 이동을 위한 렌더링
  return (
    <div onClick={handleNavigation} className="cursor-pointer">
      {children}
    </div>
  );
}
