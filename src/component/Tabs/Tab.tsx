import { useState } from "react";
import PropTypes from "prop-types";
import * as React from "react";
import "./Tab.css";

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  items: string[];
  initialActiveIndex?: number;
  styleVariant?: "rectangular" | "rounded" | "underline";
  onTabChange?: (selectedItem: string) => void; // 부모로 선택된 아이템 전달용 prop
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      items,
      initialActiveIndex = 0,
      styleVariant = "rounded",
      onTabChange,
      ...rest
    },
    ref
  ) => {
    // 내부 상태: 현재 활성화된 탭과 선택된 아이템
    const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
    const [, setSelectedItem] = useState(items[initialActiveIndex] || "");

    // 탭 클릭 핸들러: 상태 업데이트 후 부모 콜백 호출
    const handleTabClick = (index: number, item: string) => {
      setActiveIndex(index);
      setSelectedItem(item);
      if (onTabChange) {
        onTabChange(item);
      }
    };

    return (
      <div ref={ref} className={`tabs tabs--${styleVariant}`} {...rest}>
        {items.map((item, index) => (
          <button
            key={index}
            className={`tab ${index === activeIndex ? "tab--active" : ""}`}
            onClick={() => handleTabClick(index, item)}
          >
            {item}
          </button>
        ))}
      </div>
    );
  }
);

Tabs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  initialActiveIndex: PropTypes.number,
  styleVariant: PropTypes.oneOf(["rectangular", "rounded", "underline"]),
  onTabChange: PropTypes.func,
};

Tabs.defaultProps = {
  initialActiveIndex: 0,
  styleVariant: "rectangular",
};
